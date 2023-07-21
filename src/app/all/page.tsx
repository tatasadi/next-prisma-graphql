"use client"
import Image from "next/image"
import { gql, useQuery } from "@apollo/client"
import type { Movie } from "@prisma/client"
import MovieCard from "@/components/MovieCard"

const AllMoviesQuery = gql`
  query allMoviesQuery($first: Int, $after: ID) {
    movies(first: $first, after: $after) {
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

export default function AllPage() {
  const { data, loading, error, fetchMore } = useQuery(AllMoviesQuery, {
    variables: { first: 12 },
  })

  if (loading) return <p>Loading</p>
  if (error) return <p>Oh no... {error.message}</p>

  const { endCursor, hasNextPage } = data.movies.pageInfo

  return (
    <main className="p-10">
      <div className="grid gap-4 grid-cols-12 flex-wrap justify-center">
        {data?.movies.edges.map(({ node }: { node: Movie }) => (
          <MovieCard key={node.id} movie={node} />
        ))}
      </div>
      {hasNextPage ? (
        <button
          className="px-4 py-2 bg-yellow-500 rounded my-10"
          onClick={() => {
            fetchMore({
              variables: { after: endCursor },
              updateQuery: (prevResult, { fetchMoreResult }) => {
                fetchMoreResult.movies.edges = [
                  ...prevResult.movies.edges,
                  ...fetchMoreResult.movies.edges,
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
  )
}
