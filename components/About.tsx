"use client"

import { motion } from "framer-motion"
export default function About() {
  return (
    <motion.section
    id="tentang"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="scroll-mt-32 py-28 bg-[#F4F1EA] px-6"
>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div className="relative overflow-hidden rounded-[32px] shadow-2xl">

          <img
            src="/images/gallery1.png"
            alt="About Community"
            className="w-full h-[500px] object-cover"
          />

        </div>

        {/* Content */}
        <div>

          <p className="uppercase tracking-[0.3em] text-sm text-[#5F6F52] mb-5">

            About Community

          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#344E41] leading-tight mb-8">

            Menjelajah Alam,
            Membangun Persaudaraan.

          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">

            Oetewe Community adalah komunitas camping
            dan petualangan alam yang hadir untuk
            mempertemukan orang-orang dengan semangat
            eksplorasi, kebersamaan, dan pengalaman
            di alam terbuka.

          </p>

          <button className="bg-[#5F6F52] text-white px-8 py-4 rounded-full tracking-[0.15em] text-sm font-semibold hover:bg-[#4F5D44] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">

            EXPLORE MORE

          </button>

        </div>

      </div>

    </motion.section>
  )
}