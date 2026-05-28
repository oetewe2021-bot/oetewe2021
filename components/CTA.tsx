"use client"

import { useState } from "react"

import JoinModal from "@/components/JoinModal"

export default function CTA() {

  const [joinOpen, setJoinOpen] = useState(false)

  return (

    <>
    
      <section className="relative py-32 px-6 bg-[#344E41] text-white overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0 opacity-20">

          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#A3B18A]/20 rounded-full blur-3xl" />

        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[0.35em] text-sm text-[#DAD7CD] mb-5">

            Join The Adventure

          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">

            Ready For The Next Journey?

          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">

            Mari bergabung bersama komunitas kami
            untuk menjelajah alam dan menciptakan
            petualangan baru bersama.

          </p>

          {/* BUTTON */}
          <div className="mt-10">

            <button
  onClick={() => setJoinOpen(true)}
  className="
    bg-[#5F6F52]
    text-white
    px-8
    py-4
    rounded-full
    text-sm
    tracking-[0.15em]
    font-semibold
    hover:bg-[#4F5D44]
    hover:scale-105
    transition-all
    duration-300
    shadow-xl
  "
>

              JOIN COMMUNITY

            </button>

          </div>

        </div>

      </section>

      {/* MODAL */}
      <JoinModal
        isOpen={joinOpen}
        onClose={() => setJoinOpen(false)}
      />

    </>

  )
}