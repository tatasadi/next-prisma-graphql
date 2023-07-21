import Link from "next/link"
import { useUser } from "@auth0/nextjs-auth0/client"
import { NavLink } from "../NavLink"

export default function Header() {
  const { user } = useUser()

  return (
    <header className="p-4 bg-yellow-300 flex items-center ">
      <h1 className="font-bold ml-2">Awesome Movies</h1>
      <nav className="ml-auto flex gap-4 items-center">
        <NavLink href="/" exact className="nav-link">
          Home
        </NavLink>
        <NavLink href="/all" className="nav-link">
          All Movies
        </NavLink>
        <NavLink href="/search" className="nav-link">
          Search
        </NavLink>
        {user ? (
          <div className="ml-auto flex items-center gap-4">
            <Link href="/api/auth/logout" className="nav-link">
              Logout
            </Link>
            <img
              alt="profile"
              className="rounded-full w-12 h-12"
              src={user.picture ? user.picture : ""}
            />
          </div>
        ) : (
          <Link href="/api/auth/login" className="nav-link ml-auto">
            Login
          </Link>
        )}
      </nav>
    </header>
  )
}
