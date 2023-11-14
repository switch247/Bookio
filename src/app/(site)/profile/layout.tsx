import { AuthProvider } from "../../context/providers";
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
