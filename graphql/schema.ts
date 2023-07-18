import { builder } from "./builder"
import "./types/Movie"
import "./types/User"

export const schema = builder.toSchema()
