import { createYoga } from "graphql-yoga"
import { NextApiRequest, NextApiResponse } from "next"
import { schema } from "../../../../graphql/schema"
import { createContext } from "../../../../graphql/context"

const { handleRequest } = createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  schema: schema,
  context: createContext,
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Response },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export { handleRequest as GET, handleRequest as POST }
