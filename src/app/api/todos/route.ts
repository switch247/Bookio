import { NextResponse } from 'next/server'
import { limiter } from '../config/limiter'
const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"
const API_KEY: string = process.env.DATA_API_KEY as string

type Todo = {
    id: number,
    userId: number
    completed: boolean,
    title: string
}
// you dont need type Todo it is bult in but i got sick of seeng it
export async function GET(request: Request) {
    const remaining = await limiter.removeTokens(1)
    console.log('remainig : ', remaining)
    const origin = request.headers.get('origin')
    if (remaining < 0) {
        return new NextResponse(null, {
            status: 429,
            statusText: "Too Many Request",
            headers: {
                "Access-Control-Allow-Origin": origin || "*",
                "Content-Type" : 'text/plain' 
            }
        })
    }

    const res = await fetch(DATA_SOURCE_URL)
    const todos: Todo[] = await res.json()
    // neccessary for cors
    return new  NextResponse(JSON.stringify(todos),{
        headers: {
            "Access-Control-Allow-Origin": origin || "*",
            "Content-Type" : 'application/json' 
        }
    })
}


export async function DELETE(request: Request) {
    // const { id }: Partial<Todo> = request.query;
    const { id }: Partial<Todo> = await request.json()
    if (!id) return NextResponse.json({ "message": "missing required data" })

    await fetch(`${DATA_SOURCE_URL}/${id}`), {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'API-KEY': `${API_KEY}`
        }
    }
    return NextResponse.json({ "message": `TODO ${id} deleted` })


}

export async function POST(request: Request) {
    // const { id }: Partial<Todo> = request.query;
    const { userId, title }: Partial<Todo> = await request.json()
    if (!userId || !title) return NextResponse.json({ "message": "missing required data" })

    const res = await fetch(DATA_SOURCE_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'API-KEY': `${API_KEY}`
        },
        body: JSON.stringify({
            userId, title, completed: false
        })
    })
    const newTodo: Todo = await res.json()
    return NextResponse.json(newTodo)


}
export async function PUT(request: Request) {
    // const { id }: Partial<Todo> = request.query;
    const { userId, id, title, completed }: Todo = await request.json()
    if (!userId || !title || !id || typeof (completed) !== 'boolean') return NextResponse.json({ "message": "missing required data" })

    const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'API-KEY': `${API_KEY}`
        },
        body: JSON.stringify({
            userId, title, completed
        })
    })
    const newTodo: Todo = await res.json()
    return NextResponse.json(newTodo)


}