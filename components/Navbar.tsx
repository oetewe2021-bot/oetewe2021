"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">

          <Image
          src="/images/logo.png"
          alt="Logo"
          width={70}
          height={70}
          style={{
          width: "auto",
          height: "auto",
         }}
        />

        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">

          <li>
            <Link href="/artikel" className="hover:text-[#A3B18A] transition">
              Artikel
            </Link>
          </li>

          <li>
            <Link href="/kegiatan" className="hover:text-[#A3B18A] transition">
              Kegiatan
            </Link>
          </li>

          <li>
            <Link href="/galeri" className="hover:text-[#A3B18A] transition">
              Galeri
            </Link>
          </li>

          <li>
            <Link href="/tentang" className="hover:text-[#A3B18A] transition">
              Tentang
            </Link>
          </li>

        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">

          <button className="bg-[#5F6F52] text-white px-8 py-4 rounded-full tracking-[0.15em] text-sm font-semibold hover:bg-[#4F5D44] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
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
      {menuOpen && (

        <div className="md:hidden bg-[#344E41]/95 backdrop-blur-lg px-6 py-8">

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

          <button className="bg-[#5F6F52] text-white px-8 py-4 rounded-full tracking-[0.15em] text-sm font-semibold hover:bg-[#4F5D44] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">

            JOIN COMMUNITY

          </button>

        </div>

      )}

    </nav>
  )
}