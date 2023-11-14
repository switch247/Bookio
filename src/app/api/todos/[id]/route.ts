import { request } from 'http'
import { NextResponse } from 'next/server'
import { type } from 'os'

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"
const API_KEY: string = process.env.DATA_API_KEY as string
type Todo = {
    id:number,
    userId:number
    completed:boolean,
    title:string
}

export async function GET(request:Request) {
    const id  = request.url.slice(request.url.lastIndexOf('/')+1 )
    const res = await fetch(`${DATA_SOURCE_URL}/${id}`)
    const todo: Todo = await res.json()
    if (!todo.id) {
        return new NextResponse(JSON.stringify({ message: 'Not Found' }), {
          status: 404,
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }
    
    return NextResponse.json(todo)
}
