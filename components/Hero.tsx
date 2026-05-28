"use client"

import { useState } from "react"
import { motion } from "framer-motion"

import JoinModal from "@/components/JoinModal"

export default function Hero() {

  const [joinOpen, setJoinOpen] = useState(false)

  return (

    <>
    
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/bg1.jpg')",
          animation: "zoomHero 20s ease-in-out infinite alternate",
        }}
      >

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
          }}
          className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto"
        >

          {/* Small Label */}
          <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-[#DAD7CD] mb-5">

            CAMPING COMMUNITY

          </p>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">

            Oetewe <br />

            <span className="block text-2xl sm:text-3xl md:text-5xl text-[#DAD7CD] mt-2">

              Outdoor Exploration Trekkers We

            </span>

          </h1>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">

            Kami penggiat jelajah alam terbuka

          </p>

          {/* CTA */}
          <div className="mt-10">

            <button
              onClick={() => setJoinOpen(true)}
              className="
                bg-[#5F6F52]
                text-white
                px-8
                py-4
                rounded-full
                tracking-[0.15em]
                text-sm
                font-semibold
                hover:bg-[#4F5D44]
                hover:scale-105
                transition-all
                duration-300
                shadow-lg
                hover:shadow-2xl
              "
            >

              JOIN COMMUNITY

            </button>

          </div>

        </motion.div>

      </motion.section>

      {/* MODAL */}
      <JoinModal
        isOpen={joinOpen}
        onClose={() => setJoinOpen(false)}
      />

    </>

  )
}