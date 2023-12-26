// import { getSession } from 'next-auth/react';
// import jwt from 'jsonwebtoken';

// export async function apiAuth(req, res, next) {
//   try {
//     const session = await getSession({ req });

//     if (!session) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }

//     const token = session?.accessToken;
//     const decodedToken = jwt.verify(token, process.env.JWT_SECRETE);

//     // Perform additional checks if needed
//     // For example, check user roles or permissions

//     next();
//   } catch (error) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }
// }


// // import { useSession } from "next-auth/react";
// // import { redirect } from "next/navigation"
// // if(!session) redirect("/auth/signin")

