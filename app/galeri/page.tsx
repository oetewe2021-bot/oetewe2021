"use client"

import {
  motion,
  AnimatePresence,
  Variants,
} from "framer-motion"

import { useState } from "react"

const images = [
  {
    src: "/images/gallery1.png",
    title: "Camping Under The Stars",
    location: "Sibolga",
    size: "tall",
  },

  {
    src: "/images/gallery2.jpeg",
    title: "Cool Water",
    location: "Landak River",
    size: "large",
  },

  {
    src: "/images/gallery3.jpeg",
    title: "Forest Exploration",
    location: "Pinus di Barus",
    size: "small",
  },

  {
    src: "/images/gallery4.jpeg",
    title: "Morning Adventure",
    location: "Danau Toba",
    size: "large",
  },

  {
    src: "/images/gallery5.jpeg",
    title: "Nature Escape",
    location: "Trip ke 22",
    size: "tall",
  },

  {
    src: "/images/gallery6.jpeg",
    title: "Wild Camping",
    location: "Sumatera Utara",
    size: "large",
  },

  {
    src: "/images/gbr1.JPG",
    title: "Sunrise Hiking",
    location: "Dolok Tinggi Raja",
    size: "small",
  },

  {
    src: "/images/gbr2.JPG",
    title: "Adventure Camp",
    location: "Barus",
    size: "large",
  },

  {
    src: "/images/gbr3.JPG",
    title: "Forest Trail",
    location: "Sunrise di Barus",
    size: "small",
  },

  {
    src: "/images/gbr4.JPG",
    title: "Hidden Paradise",
    location: "Laut Batu Bara",
    size: "tall",
  },

  {
    src: "/images/gbr5.JPG",
    title: "Nature Journey",
    location: "Pulau Salah Nama",
    size: "large",
  },

  {
    src: "/images/gbr6.JPG",
    title: "sea of tranquility",
    location: "Pulau Pandang",
    size: "large",
  },

  {
    src: "/images/gbr7.JPG",
    title: "Outdoor Experience",
    location: "Pesona Pulau Pandang",
    size: "small",
  },

  {
    src: "/images/gbr8.JPG",
    title: "Wild Escape",
    location: "Fishing Moment",
    size: "tall",
  },

  {
    src: "/images/gbr9.JPG",
    title: "Explore Nature",
    location: "North Sumatra",
    size: "tall",
  },
]

const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.7,
    },
  },
}

export default function GalleryPage() {

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const currentIndex = images.findIndex(
    (image) => image.src === selectedImage
  )

  const nextImage = () => {

    const next = (currentIndex + 1) % images.length
    setSelectedImage(images[next].src)

  }

  const prevImage = () => {

    const prev = (currentIndex - 1 + images.length) % images.length
    setSelectedImage(images[prev].src)

  }

  return (

    <main className="bg-[#F4F1EA] min-h-screen pt-32 pb-24 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[0.3em] text-sm text-[#5F6F52] mb-4">

            Adventure Gallery

          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-[#344E41] mb-6">

            Momen Perjalanan

          </h1>

          <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">

            Dokumentasi perjalanan, camping, dan eksplorasi alam
            bersama Oetewe Community.

          </p>

        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6"
        >

          {images.map((image, index) => (

            <motion.div
              key={index}
              variants={cardVariants}
              onClick={() => setSelectedImage(image.src)}
              className="group relative mb-6 cursor-pointer overflow-hidden rounded-[30px] shadow-xl break-inside-avoid"
            >

              {/* Image */}
              <img
                src={image.src}
                alt={image.title}
                loading="lazy"
                className={`w-full object-cover transition duration-700 group-hover:scale-110 ${
                  image.size === "tall"
                    ? "h-[520px]"
                    : image.size === "large"
                    ? "h-[460px]"
                    : "h-[380px]"
                }`}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">

                <div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">

                  <h3 className="text-white text-2xl font-semibold mb-2">

                    {image.title}

                  </h3>

                  <p className="text-white/80 text-sm tracking-[0.2em] uppercase">

                    {image.location}

                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>

        {selectedImage && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-md flex items-center justify-center"
          >

            {/* Close */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white text-5xl z-50 hover:scale-110 transition duration-300"
            >

              ×

            </button>

            {/* Left */}
            <button
              onClick={prevImage}
              className="absolute left-4 md:left-10 text-white text-4xl z-50 hover:scale-110 transition duration-300"
            >

              ←

            </button>

            {/* Preview */}
            <div className="relative">

              <motion.img
                key={selectedImage}
                initial={{
                  scale: 0.9,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 0.9,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.35,
                }}
                src={selectedImage}
                alt="Preview"
                className="max-w-[92vw] max-h-[82vh] rounded-[28px] shadow-2xl object-cover"
              />

              {/* Caption */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                }}
                className="absolute bottom-0 left-0 w-full p-6 rounded-b-[28px] bg-gradient-to-t from-black/80 to-transparent"
              >

                <h3 className="text-white text-2xl font-semibold mb-2">

                  {images[currentIndex].title}

                </h3>

                <p className="text-white/70 uppercase tracking-[0.2em] text-sm">

                  {images[currentIndex].location}

                </p>

              </motion.div>

            </div>

            {/* Right */}
            <button
              onClick={nextImage}
              className="absolute right-4 md:right-10 text-white text-4xl z-50 hover:scale-110 transition duration-300"
            >

              →

            </button>

          </motion.div>

        )}

      </AnimatePresence>

    </main>

  )
}