"use client";

import { SessionProvider,useSession } from "next-auth/react";

export const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export function useAuth() {
  return useSession();
}


