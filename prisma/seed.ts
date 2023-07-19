import { PrismaClient } from "@prisma/client"
import movies from "../data/movies"

const prisma = new PrismaClient()

async function main() {
  await prisma.movie.createMany({
    data: movies,
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
