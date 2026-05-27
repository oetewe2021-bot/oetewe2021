"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {

  const pathname = usePathname()

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (

    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#344E41]/90 backdrop-blur-xl shadow-lg border-b border-white/10"
          : "bg-black/20 backdrop-blur-md"
      }`}
    >

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">

          <Image
            src="/images/logo.png"
            alt="Logo"
            width={60}
            height={60}
            style={{
              width: "auto",
              height: "auto",
            }}
          />

        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">

          <li>
            <Link
              href="/artikel"
              className={`transition-all duration-300 ${
  pathname === "/artikel"
    ? "text-[#DAD7CD] drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]"
    : "text-white hover:text-[#DAD7CD] hover:-translate-y-0.5"
}`}
            >
              Artikel
            </Link>
          </li>

          <li>
            <Link
              href="/kegiatan"
              className={`transition-all duration-300 ${
  pathname === "/kegiatan"
    ? "text-[#DAD7CD] drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]"
    : "text-white hover:text-[#DAD7CD] hover:-translate-y-0.5"
}`}
            >
              Kegiatan
            </Link>
          </li>

          <li>
            <Link
              href="/galeri"
              className={`transition-all duration-300 ${
  pathname === "/galeri"
    ? "text-[#DAD7CD] drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]"
    : "text-white hover:text-[#DAD7CD] hover:-translate-y-0.5"
}`}
            >
              Galeri
            </Link>
          </li>

          <li>
            <Link
              href="/tentang"
              className={`transition-all duration-300 ${
  pathname === "/tentang"
    ? "text-[#DAD7CD] drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]"
    : "text-white hover:text-[#DAD7CD] hover:-translate-y-0.5"
}`}
            >
              Tentang
            </Link>
          </li>

        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">

          <button className="bg-[#5F6F52] text-white px-10 py-4 rounded-full tracking-[0.12em] text-sm font-semibold whitespace-nowrap hover:bg-[#4F5D44] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">

            JOIN COMMUNITY

          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#344E41]/95 backdrop-blur-lg px-6 py-8"
          >

            <ul className="flex flex-col gap-6 text-white text-lg font-medium">

              <li>
                <Link
                  href="/artikel"
                  onClick={() => setMenuOpen(false)}
                >
                  Artikel
                </Link>
              </li>

              <li>
                <Link
                  href="/kegiatan"
                  onClick={() => setMenuOpen(false)}
                >
                  Kegiatan
                </Link>
              </li>

              <li>
                <Link
                  href="/galeri"
                  onClick={() => setMenuOpen(false)}
                >
                  Galeri
                </Link>
              </li>

              <li>
                <Link
                  href="/tentang"
                  onClick={() => setMenuOpen(false)}
                >
                  Tentang
                </Link>
              </li>

            </ul>

            <div className="border-t border-white/10 pt-8 mt-12">

  <Link
    href="/join"
    className="block w-full text-center bg-[#5F6F52] text-white py-4 rounded-full tracking-[0.15em] text-sm font-semibold hover:bg-[#4F5D44] transition-all duration-300 shadow-lg"
  >

    JOIN COMMUNITY

  </Link>

</div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  )
}