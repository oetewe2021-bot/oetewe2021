import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-[#344E41] text-white py-16 px-6">
<div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-400"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

        {/* Left */}
        <div className="text-center md:text-left">

          <h2 className="text-3xl font-bold mb-4">
            Oetewe Community
          </h2>

          <p className="text-gray-300 max-w-md leading-relaxed">
            Komunitas camping dan petualangan alam
            untuk berbagi cerita, pengalaman,
            dan perjalanan bersama.
          </p>

        </div>

        {/* Right */}
        <div className="flex flex-col items-center md:items-end">

          <h3 className="uppercase tracking-[0.2em] text-sm text-[#DAD7CD] mb-5">
            CONNECT WITH US
          </h3>

          <div className="flex items-center gap-5 text-2xl">

            {/* Instagram */}
            <a
              href="https://instagram.com/oetewe"
              target="_blank"
              className="hover:text-[#A3B18A] transition duration-300"
            >
              <FaInstagram />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/oetewe"
              target="_blank"
              className="hover:text-[#A3B18A] transition duration-300"
            >
              <FaFacebook />
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/"
              target="_blank"
              className="hover:text-[#A3B18A] transition duration-300"
            >
              <FaYoutube />
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@oetewe"
              target="_blank"
              className="hover:text-[#A3B18A] transition duration-300"
            >
              <FaTiktok />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-400">

        © 2026 Oetewe Community. All rights reserved.

      </div>

    </footer>
  )
}