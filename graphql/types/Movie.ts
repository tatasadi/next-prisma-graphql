import { builder } from "../builder"

builder.prismaObject("Movies", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    plot: t.exposeString("plot", { nullable: true }),
    genres: t.exposeStringList("genres"),
    poster: t.exposeString("poster", { nullable: true }),
    runtime: t.exposeInt("runtime", { nullable: true }),
    cast: t.exposeStringList("cast"),
    fullplot: t.exposeString("fullplot", { nullable: true }),
    languages: t.exposeStringList("languages"),
    directors: t.exposeStringList("directors"),
    writers: t.exposeStringList("writers"),
    rated: t.exposeString("rated", { nullable: true }),
    lastupdated: t.exposeString("lastupdated", { nullable: true }),
    year: t.exposeInt("year", { nullable: true }),
    countries: t.exposeStringList("countries"),
    type: t.exposeString("type", { nullable: true }),
    users: t.relation("users"),
  }),
})

builder.queryField("movies", (t) =>
  t.prismaField({
    type: ["Movies"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.movies.findMany({ take: 10, ...query }),
  })
)
