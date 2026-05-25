"use client"

import { motion } from "framer-motion"

import { useState } from "react"

import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa"

const images = [
  "/images/gallery1.png",
  "/images/gallery2.jpeg",
  "/images/gallery3.jpeg",
  "/images/gallery4.jpeg",
  "/images/gallery5.jpeg",
  "/images/gallery6.jpeg",
]

export default function Gallery() {

  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    if (current < images.length - 3) {
      setCurrent(current + 1)
    }
  }

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1)
    }
  }

  return (
    <motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="py-28 bg-[#F4F1EA] px-6"
>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-sm text-[#5F6F52] mb-4">
            Adventure Moments
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#344E41]">
            Gallery Perjalanan
          </h2>

        </div>

        {/* Slider */}
        <div className="relative">

          {/* Images */}
          <div
            className="flex gap-6 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 34}%)`,
            }}
          >

            {images.map((image, index) => (

              <div
                key={index}
                className="min-w-full md:min-w-[31%]"
              >

                <div className="relative overflow-hidden rounded-[28px] h-[260px] md:h-[380px] shadow-xl group">

                  <img
                    src={image}
                    alt="Gallery"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition duration-500" />

                </div>

              </div>

            ))}

          </div>

          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md transition duration-300"
          >

            <FaChevronLeft />

          </button>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md transition duration-300"
          >

            <FaChevronRight />

          </button>

        </div>

      </div>

    </motion.section>
  )
}