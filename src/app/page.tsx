"use client"
import Image from "next/image"
import { gql, useQuery } from "@apollo/client"
import type { Movie } from "@prisma/client"
import Header from "@/components/Layout/Header"

const AllMoviesQuery = gql`
  query allMoviesQuery($first: Int, $after: ID) {
    movie(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
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
    }
  }
`

export default function Home() {
  const { data, loading, error, fetchMore } = useQuery(AllMoviesQuery, {
    variables: { first: 12 },
  })

  if (loading) return <p>Loading</p>
  if (error) return <p>Oh no... {error.message}</p>

  const { endCursor, hasNextPage } = data.movie.pageInfo

  return (
    <>
      <Header />
      <main className="p-10">
        <div className="grid gap-4 grid-cols-12 flex-wrap justify-center">
          {data?.movie.edges.map(({ node }: { node: Movie }) => {
            return (
              <div
                key={node.id}
                className="card col-span-12 md:col-span-6 lg:col-span-4 flex gap-2"
              >
                {node.poster && (
                  <Image
                    src={node.poster}
                    alt={"Movie Poster"}
                    width={100}
                    height={100}
                    style={{ width: "auto", height: "auto" }}
                  />
                )}
                <div>
                  <h3 className="font-bold text-gray-900">{node.title}</h3>
                  <p className="text-sm text-gray-600">{node.plot}</p>
                </div>
              </div>
            )
          })}
        </div>
        {hasNextPage ? (
          <button
            className="px-4 py-2 bg-yellow-500 rounded my-10"
            onClick={() => {
              fetchMore({
                variables: { after: endCursor },
                updateQuery: (prevResult, { fetchMoreResult }) => {
                  fetchMoreResult.movie.edges = [
                    ...prevResult.movie.edges,
                    ...fetchMoreResult.movie.edges,
                  ]
                  return fetchMoreResult
                },
              })
            }}
          >
            more
          </button>
        ) : (
          <p className="my-10 text-center font-medium">
            You've reached the end!{" "}
          </p>
        )}
      </main>
    </>
  )
}
