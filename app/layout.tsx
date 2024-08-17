import { Header } from "./components/Header"
import { Providers } from "./provider"

export const metadata = {
  title: "App Router",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <Header />
          {children}
        </body>
      </html>
    </Providers>
  )
}
