"use client"
import "./globals.css"
import { Inter } from "next/font/google"
import { ApolloProvider } from "@apollo/client"
import apolloClient from "../../lib/apollo"
import { UserProvider } from "@auth0/nextjs-auth0/client"
import Header from "@/components/Layout/Header"

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
        <UserProvider>
          <ApolloProvider client={apolloClient}>
            <Header />
            {children}
          </ApolloProvider>
        </UserProvider>
      </body>
    </html>
  )
}
