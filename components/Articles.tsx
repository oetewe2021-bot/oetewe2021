"use client"

import { motion } from "framer-motion"
const articles = [
  {
    title: "Membangun Camp Nyaman di Alam Terbuka",
    image: "/images/article1.jpeg",
  },
  {
    title: "Tips Memilih Kuncen di Gunung",
    image: "/images/article2.jpeg",
  },
  {
    title: "Peralatan Camping Wajib untuk Pemula",
    image: "/images/article3.jpeg",
  },
]

export default function Articles() {
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

            Latest Stories

          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#344E41]">

            Cerita & Tips Perjalanan

          </h2>

        </div>

        {/* Cards */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">

          {articles.map((article, index) => (

            <div
             key={index}
             className="group min-w-[85%] md:min-w-0 bg-[#E9EDDC] rounded-[30px] overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 snap-center"
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-2xl font-semibold text-[#344E41] leading-snug">

                  {article.title}

                </h3>

                <button className="mt-6 text-[#5F6F52] font-semibold tracking-wide hover:opacity-70 transition">

                  Read More →

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </motion.section>
  )
}