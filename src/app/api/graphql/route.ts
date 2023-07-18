import { createSchema, createYoga } from "graphql-yoga"
import { NextApiRequest, NextApiResponse } from "next"
import { typeDefs } from "../../../../graphql/schema"
import { resolvers } from "../../../../graphql/resolvers"

const { handleRequest } = createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  schema: createSchema({ typeDefs, resolvers }),
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Response },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export { handleRequest as GET, handleRequest as POST }
