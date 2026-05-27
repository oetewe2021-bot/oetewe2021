"use client"

import CTA from "@/components/CTA"
import { motion } from "framer-motion"

const stats = [
  {
    number: "50+",
    label: "Perjalanan Alam",
  },
  {
    number: "100+",
    label: "Member Komunitas",
  },
  {
    number: "20+",
    label: "Destinasi",
  },
  {
    number: "2021",
    label: "Komunitas Berdiri",
  },
]

const values = [
  {
    title: "Respect Nature",
    description:
      "Menjaga alam dan menghormati setiap tempat yang kami kunjungi.",
  },
  {
    title: "Brotherhood",
    description:
      "Membangun solidaritas dan persahabatan dalam setiap perjalanan.",
  },
  {
    title: "Adventure",
    description:
      "Mencari pengalaman baru dan menjelajahi keindahan alam Indonesia.",
  },
  {
    title: "Safety First",
    description:
      "Mengutamakan keamanan dan kenyamanan seluruh anggota komunitas.",
  },
]

export default function TentangPage() {
  return (
    <main className="bg-[#F4F1EA] overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center">

        {/* Background Image */}
        <div className="absolute inset-0">

          <img
            src="/images/gallery1.png"
            alt="Oetewe Community"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center px-6"
        >

          <p className="uppercase tracking-[0.4em] text-sm text-white/80 mb-6">

            Oetewe Community

          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">

            Explore Nature <br />
            Together

          </h1>

          <p className="max-w-2xl mx-auto text-white/80 text-lg leading-relaxed">

            Komunitas petualang alam dari Sumatera Utara yang hadir
            untuk menjelajahi keindahan alam, membangun solidaritas,
            dan menciptakan pengalaman perjalanan yang tak terlupakan.

          </p>

        </motion.div>

      </section>

      {/* STORY SECTION */}
      <section className="py-28 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >

            <img
              src="/images/gbr4.JPG"
              alt="Community Journey"
              className="w-full h-[650px] object-cover rounded-[36px] shadow-2xl"
            />

          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[0.3em] text-sm text-[#5F6F52] mb-5">

              Tentang Kami

            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-[#344E41] leading-tight mb-8">

              Berawal Dari
              Kecintaan Pada Alam

            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">

              Oetewe Community lahir dari sekumpulan anak muda yang
              memiliki kecintaan terhadap alam, perjalanan, dan eksplorasi.
              Dari perjalanan kecil hingga camping bersama,
              komunitas ini terus berkembang menjadi tempat berbagi pengalaman,
              cerita, dan persahabatan.

            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-10">

              Kami percaya bahwa alam bukan hanya tempat untuk dikunjungi,
              tetapi juga untuk dijaga dan dihormati. Setiap perjalanan
              membawa pengalaman baru, mempererat hubungan antar anggota,
              dan membuka sudut pandang yang lebih luas tentang kehidupan.

            </p>

            <button className="bg-[#5F6F52] text-white px-8 py-4 rounded-full tracking-[0.15em] text-sm font-semibold hover:bg-[#4F5D44] hover:scale-105 transition-all duration-300 shadow-xl">

              JOIN COMMUNITY

            </button>

          </motion.div>

        </div>

      </section>

      {/* STATS */}
      <section className="py-24 px-6 bg-[#EAE4D5]">

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="text-center"
            >

              <h3 className="text-5xl md:text-6xl font-bold text-[#344E41] mb-4">

                {item.number}

              </h3>

              <p className="uppercase tracking-[0.2em] text-sm text-gray-600">

                {item.label}

              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* VALUES */}
      <section className="py-28 px-6">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >

            <p className="uppercase tracking-[0.3em] text-sm text-[#5F6F52] mb-5">

              Core Values

            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-[#344E41] mb-6">

              Nilai Yang Kami Pegang

            </h2>

            <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">

              Perjalanan bukan hanya tentang destinasi,
              tetapi juga tentang bagaimana kami menjalaninya bersama.

            </p>

          </motion.div>

          {/* Cards */}
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

  {values.map((value, index) => (

    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-[32px] bg-white/80 backdrop-blur-xl border border-white/40 p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500"
    >

      {/* Top Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#5F6F52] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {/* Small Label */}
      <p className="uppercase tracking-[0.25em] text-xs text-[#5F6F52] mb-5">

        {index === 0
          ? "Philosophy"
          : index === 1
          ? "Community"
          : index === 2
          ? "Journey"
          : "Protection"}

      </p>

      {/* Title */}
      <h3 className="text-3xl font-bold text-[#344E41] mb-5 leading-tight">

        {value.title}

      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed text-lg">

        {value.description}

      </p>

    </motion.div>

  ))}

</div>
        </div>

      </section>

      <CTA />

    </main>
  )
}