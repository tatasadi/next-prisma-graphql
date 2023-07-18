import { createYoga } from "graphql-yoga"
import { NextApiRequest, NextApiResponse } from "next"
import { schema } from "../../../../graphql/schema"

const { handleRequest } = createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  schema: schema,
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Response },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export { handleRequest as GET, handleRequest as POST }
