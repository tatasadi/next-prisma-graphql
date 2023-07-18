export const typeDefs = `
  type Movie {
    id: ID
    title: String
    plot: String
    genres: [String]
    poster: String
    runtime: Int
    cast: [String]
    fullplot: String
    languages: [String]
    released: String
    directors: [String]
    writers: [String]
    rated: String
    lastupdated: String
    year: Int
    countries: [String]
    type: String
    users: [String]
  }

  type Query {
    movies: [Movie]!
  }
`
