"use client"
import "./globals.css"
import { Inter } from "next/font/google"
import { ApolloProvider } from "@apollo/client"
import apolloClient from "../../lib/apollo"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Awesome Movies</title>
      </head>
      <body className={inter.className}>
        <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
      </body>
    </html>
  )
}
