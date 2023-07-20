import Link from "next/link"

export default function Home() {
  return (
    <>
      <main className="p-10 bg-white m-10 flex flex-col items-center rounded-md">
        <h1>Welcome to Awesome Movies</h1>
        <div className="grid grid-cols-12 mt-10 gap-10">
          <Link href="/all" className="home-card">
            All Movies
          </Link>
          <Link href="/search" className="home-card">
            Search a Movie
          </Link>
        </div>
      </main>
    </>
  )
}
