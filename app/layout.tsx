/* eslint-disable @next/next/no-page-custom-font */
import Layout from '@/src/components/Layout'
import { ReactNode } from 'react'
import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Questrial&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
