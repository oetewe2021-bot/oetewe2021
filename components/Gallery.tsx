"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const images = [
  "/images/gallery1.png",
  "/images/gallery2.jpeg",
  "/images/gallery3.jpeg",
  "/images/gallery4.jpeg",
  "/images/gallery5.jpeg",
  "/images/gallery6.jpeg",
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (

  <>
    <AnimatePresence>

  {selectedImage && (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center px-6"
      onClick={() => setSelectedImage(null)}
    >

      {/* Image */}
      <motion.img
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.3 }}
        src={selectedImage}
        alt="Preview"
        className="max-w-full max-h-[90vh] rounded-[24px] shadow-2xl object-cover"
      />

      {/* Close Button */}
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-6 right-6 text-white text-5xl leading-none hover:scale-110 transition"
      >

        ×

      </button>

    </motion.div>

  )}

</AnimatePresence>
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

        {/* Horizontal Gallery */}
        <div
          className="
            flex gap-6 overflow-x-auto
            scroll-smooth snap-x snap-mandatory
            pb-4
          "
        >

          {images.map((image, index) => (

            <div
              key={index}
              className="
                min-w-[85%]
                md:min-w-[32%]
                snap-center
              "
            >

              <div
  onClick={() => setSelectedImage(image)}
  className="group relative overflow-hidden rounded-[28px] h-[260px] md:h-[380px] shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 cursor-pointer"
>

                {/* Image */}
                <img
                  src={image}
                  alt="Gallery"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition duration-500" />

              </div>

            </div>

          ))}

        </div>

      </div>
    </motion.section>
  </>
  )
}

