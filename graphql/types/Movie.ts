import { builder } from "../builder"

builder.prismaObject("Movie", {
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
  t.prismaConnection({
    type: "Movie",
    cursor: "id",
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.movie.findMany({ ...query }),
  })
)

builder.queryField("movie", (t) =>
  t.prismaField({
    type: ["Movie"],
    args: {
      title: t.arg.string({ required: true }),
    },
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.movie.findMany({
        ...query,
        where: { title: _args.title },
      }),
  })
)
