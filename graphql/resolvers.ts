import prisma from "../lib/prisma"

export const resolvers = {
  Query: {
    movies: () => {
      return prisma.movies.findMany({
        take: 10,
      })
    },
  },
}
