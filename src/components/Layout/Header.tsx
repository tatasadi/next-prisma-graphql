import Link from "next/link"
import { useUser } from "@auth0/nextjs-auth0/client"

export default function Header() {
  const { user } = useUser()

  return (
    <header className="p-4 bg-yellow-300 flex items-center ">
      <h1>Awesome Movies</h1>
      <nav className="ml-auto">
        {user ? (
          <div className="flex items-center gap-4">
            <Link href="/api/auth/logout" className="auth-button">
              Logout
            </Link>
            <img
              alt="profile"
              className="rounded-full w-12 h-12"
              src={user.picture ? user.picture : ""}
            />
          </div>
        ) : (
          <Link href="/api/auth/login" className="auth-button">
            Login
          </Link>
        )}
      </nav>
    </header>
  )
}
