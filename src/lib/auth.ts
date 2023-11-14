import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';



export async function isLoggedIn() {

    const session = await getServerSession(authOptions)
    if (session) {
        // console.log('user is logged in ')
        return session.user?.email
    }
    else {
        // console.log('user is not logged in')
        redirect('/auth/signin')

    }

}

