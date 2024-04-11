import '../index.css'
import { Metadata } from 'next'
import Navbar from '../components/layouts/Navbar'

export const metadata: Metadata = {
  title: 'TMDB clone',
  description: 'My App is a clone of TMDB',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-slate-100">
        <div id="root">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
