


import { NextResponse, NextRequest } from "next/server";

const allowedOrigins = process.env.NODE_ENV === 'production'?
['https://test.vercel.com']:
['http://localhost:3000',"https://www.google.com",null]
export async function middleware(request: Request) {

    // const regex = new RegExp('/api/*')
    // unnecessary because it is already in config 
    // if (regex.test(request.url)) {

    // }
    const origin = request.headers.get('origin')
    console.log(origin)
    if ( origin && !allowedOrigins.includes(origin)   ){
        // || !origin 
        // if you  want to block postman...
        return new NextResponse(null,{
            status:400,
            statusText:"Bad Request",
            headers:{
                'Content-Type':'text/plain'
            }
        })
    }
    console.log("Middleware")
    console.log(request.method, request.url)
    

    return NextResponse.next()

}
export const config = {
    matcher: '/api/:path*',
}




export function authMiddleware(req: { session: { user: any; }; }, res:any, next: () => void) {
    // Check if user is authenticated
    if (!req.session.user) {
      return res.redirect('/login');
    }
  
    // User is authenticated, continue to the next middleware or route handler
    next();
  }