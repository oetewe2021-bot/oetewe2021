"use client"

import { motion } from "framer-motion"
export default function About() {
  return (
    <motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="py-28 bg-[#F4F1EA] px-6"
>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div className="relative overflow-hidden rounded-[32px] shadow-2xl">

          <img
            src="/images/pulau.JPG"
            alt="About Community"
            className="w-full h-[500px] object-cover"
          />

        </div>

        {/* Content */}
        <div>

          <p className="uppercase tracking-[0.3em] text-sm text-[#5F6F52] mb-5">

            Trip ke pulau pandang

          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#344E41] leading-tight mb-8">

            Pulau Pandang: 
            Surga Tersembunyi di Kabupaten Batu Bara

          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">

            Di tengah birunya perairan Selat Malaka, 
            terdapat sebuah pulau kecil yang menyimpan pesona luar biasa, 
            yaitu Pulau Pandang. Pulau yang berada di Kabupaten Batu Bara, 
            Sumatera Utara ini dikenal sebagai salah satu destinasi wisata 
            alam yang masih asri dan belum terlalu ramai oleh wisatawan.

          </p>

          <button className="bg-[#5F6F52] text-white px-8 py-4 rounded-full tracking-[0.15em] text-sm font-semibold hover:bg-[#4F5D44] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">

            EXPLORE MORE

          </button>

        </div>

      </div>

    </motion.section>
  )
}