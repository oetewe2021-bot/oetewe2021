import "./globals.css"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import PageTransition from "@/components/PageTransition"

export const metadata = {
  title: "Oetewe",
  description: "Komunitas camping dan petualangan outdoor",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="bg-[#F4EDE4]">

        <Navbar />

        <PageTransition>

        {children}

        </PageTransition>

        <Footer />

      </body>
    </html>
  )
}

