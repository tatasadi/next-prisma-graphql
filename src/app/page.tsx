"use client"
import Image from "next/image"
import { gql, useQuery } from "@apollo/client"

const AllMoviesQuery = gql`
  query {
    movies {
      id
      title
      plot
      genres
      poster
      runtime
      cast
      fullplot
      languages
      directors
      writers
      rated
      lastupdated
      year
      countries
      type
    }
  }
`

export default function Home() {
  const { data, loading, error } = useQuery(AllMoviesQuery)

  if (loading) return <p>Loading</p>
  if (error) return <p>Oh no... {error.message}</p>

  return (
    <>
      <header className="p-4 bg-yellow-300">
        <h1>Awesome Movies</h1>
      </header>
      <main className="grid gap-4 grid-cols-12 flex-wrap justify-center p-10">
        {data.movies
          .filter((movie) => movie.poster && movie.poster !== "")
          .slice(0, 10)
          .map((movie) => {
            return (
              <div
                key={movie.id}
                className="card col-span-12 md:col-span-6 lg:col-span-4 flex gap-2"
              >
                {movie.poster && (
                  <Image
                    src={movie.poster}
                    alt={"Movie Poster"}
                    width={100}
                    height={100}
                    style={{ width: "auto", height: "auto" }}
                  />
                )}
                <div>
                  <h3 className="font-bold text-gray-900">{movie.title}</h3>
                  <p className="text-sm text-gray-600">{movie.plot}</p>
                </div>
              </div>
            )
          })}
      </main>
    </>
  )
}
