"use client"
import { gql, useLazyQuery } from "@apollo/client"
import { Component, ReactNode, useEffect, useState } from "react"
import MovieCard from "@/components/MovieCard"
import React from "react"
import { ErrorBoundary } from "react-error-boundary"

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
  const [titleToSearch, setTitleToSearch] = useState("")

  function handleSubmit(newMovieTitle) {
    setTitleToSearch(newMovieTitle)
  }

  function handleReset() {
    setTitleToSearch("")
  }

  return (
    <main className="p-10 flex flex-col items-center gap-4">
      <SearchMovieForm titleToSearch={titleToSearch} onSubmit={handleSubmit} />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={handleReset}
        resetKeys={[titleToSearch]}
      >
        <MovieInfo titleToSearch={titleToSearch} />
      </ErrorBoundary>
    </main>
  )
}

function SearchMovieForm({ titleToSearch, onSubmit }) {
  const [inputValue, setInputValue] = useState(titleToSearch ?? "")

  useEffect(() => {
    setInputValue(titleToSearch)
  }, [titleToSearch])

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(inputValue)
  }

  function handleSelect(newMovieTitle) {
    setInputValue(newMovieTitle)
    onSubmit(newMovieTitle)
  }

  return (
    <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit}>
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
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

function MovieInfo({ titleToSearch }) {
  const [getMovie, { loading, error, data }] = useLazyQuery(movieQuery)

  useEffect(() => {
    if (!titleToSearch) return
    getMovie({ variables: { title: titleToSearch } })
  }, [titleToSearch])

  if (loading) return <div className="info-box card">Loading...</div>
  if (error) throw error
  if (data) {
    const movie = data.movie[0]
    if (movie) {
      return (
        <div className="max-w-[350px]">
          <MovieCard movie={movie} />
        </div>
      )
    } else {
      // if you want to throw an error, you can do somthing like this:
      //throw new Error("No movie found with this title.")
      return (
        <div className="info-box card">No movie found with this title.</div>
      )
    }
  } else {
    return <div className="info-box card">Submit the title of a movie</div>
  }
}

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="info-box card error">
      There was an error:{" "}
      <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
      <button className="btn mt-4" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  )
}
