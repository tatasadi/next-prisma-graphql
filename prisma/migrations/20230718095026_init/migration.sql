-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "Movies" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "plot" TEXT,
    "genres" TEXT[],
    "poster" TEXT,
    "runtime" INTEGER,
    "cast" TEXT[],
    "fullplot" TEXT,
    "languages" TEXT[],
    "released" TIMESTAMP(3),
    "directors" TEXT[],
    "writers" TEXT[],
    "rated" TEXT,
    "lastupdated" TEXT,
    "year" INTEGER,
    "countries" TEXT[],
    "type" TEXT,

    CONSTRAINT "Movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT,
    "image" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MoviesToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_MoviesToUser_AB_unique" ON "_MoviesToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_MoviesToUser_B_index" ON "_MoviesToUser"("B");

-- AddForeignKey
ALTER TABLE "_MoviesToUser" ADD CONSTRAINT "_MoviesToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MoviesToUser" ADD CONSTRAINT "_MoviesToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
