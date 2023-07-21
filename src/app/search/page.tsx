"use client"
import { gql, useLazyQuery } from "@apollo/client"
import type { Movie } from "@prisma/client"
import { useEffect, useState } from "react"
import MovieCard from "@/components/MovieCard"

const movieQuery = gql`
  query getMovie($title: String!) {
    movie(title: $title) {
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

export default function SearchPage() {
  const [getMovie, { loading, error, data }] = useLazyQuery(movieQuery)
  const [inputValue, setInputValue] = useState("")
  const [titleToSearch, setTitleToSearch] = useState("")
  const [movie, setMovie] = useState<Movie>()

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setTitleToSearch(inputValue)
  }

  useEffect(() => {
    if (!titleToSearch) return
    getMovie({ variables: { title: titleToSearch } }).then((result) => {
      if (result.data) setMovie(result.data.movie[0])
    })
  }, [titleToSearch])

  function handleSelect(newMovieTitle) {
    setInputValue(newMovieTitle)
    setTitleToSearch(newMovieTitle)
  }

  return (
    <main>
      <form
        className="p-10 flex flex-col items-center gap-4"
        onSubmit={handleSubmit}
      >
        <label htmlFor="movieTitle-input" className="text-lg font-bold">
          Movie Title
        </label>
        <small>
          Try{" "}
          <button
            className="btn-invisible"
            type="button"
            onClick={() => handleSelect("Pulp Fiction")}
          >
            "Pulp Fiction"
          </button>
          {", "}
          <button
            className="btn-invisible"
            type="button"
            onClick={() => handleSelect("Frozen Planet")}
          >
            "Frozen Planet"
          </button>
          {", or "}
          <button
            className="btn-invisible"
            type="button"
            onClick={() => handleSelect("Django Unchained")}
          >
            "Django Unchained"
          </button>
        </small>
        <div className="flex gap-2">
          <input
            placeholder="Movie Title"
            id="movieTitle-input"
            name="movieTitle"
            value={inputValue}
            onChange={handleChange}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
        {loading && <div>Loading...</div>}
        {error && <div>{error.message}</div>}
        {movie && (
          <div className="max-w-[350px]">
            <MovieCard movie={movie} />
          </div>
        )}
      </form>
    </main>
  )
}
