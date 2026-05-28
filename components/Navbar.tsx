"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"

import JoinModal from "@/components/JoinModal"

export default function Navbar() {

  const pathname = usePathname()

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const [joinOpen, setJoinOpen] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (

    <>

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
            loading="eager"
            priority
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
                    : "text-white hover:text-[#DAD7CD]"
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
                    : "text-white hover:text-[#DAD7CD]"
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
                    : "text-white hover:text-[#DAD7CD]"
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
                    : "text-white hover:text-[#DAD7CD]"
                }`}
              >
                Tentang
              </Link>
            </li>

          </ul>

          {/* Desktop Button */}
          <div className="hidden md:block">

            <button
              onClick={() => setJoinOpen(true)}
              className="
                bg-[#5F6F52]
                text-white
                px-6
                py-3
                rounded-full
                text-sm
                tracking-[0.15em]
                font-semibold
                hover:bg-[#4F5D44]
                transition-all
                duration-300
              "
            >

              JOIN COMMUNITY

            </button>

          </div>

          {/* Mobile Button */}
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
                  <Link href="/artikel" onClick={() => setMenuOpen(false)}>
                    Artikel
                  </Link>
                </li>

                <li>
                  <Link href="/kegiatan" onClick={() => setMenuOpen(false)}>
                    Kegiatan
                  </Link>
                </li>

                <li>
                  <Link href="/galeri" onClick={() => setMenuOpen(false)}>
                    Galeri
                  </Link>
                </li>

                <li>
                  <Link href="/tentang" onClick={() => setMenuOpen(false)}>
                    Tentang
                  </Link>
                </li>

              </ul>

              <div className="border-t border-white/10 pt-8 mt-12">

                <button
                  onClick={() => {
                    setJoinOpen(true)
                    setMenuOpen(false)
                  }}
                  className="
                    w-full
                    bg-[#5F6F52]
                    text-white
                    px-6
                    py-3
                    rounded-full
                    text-sm
                    tracking-[0.15em]
                    font-semibold
                    hover:bg-[#4F5D44]
                    transition-all
                    duration-300
                  "
                >

                  JOIN COMMUNITY

                </button>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </nav>

      <JoinModal
        isOpen={joinOpen}
        onClose={() => setJoinOpen(false)}
      />

    </>

  )
}