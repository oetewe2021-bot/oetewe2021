"use client"

import CTA from "@/components/CTA"
import { motion } from "framer-motion"

const activities = [
  {
    title: "Mountain Camping",
    image: "/images/gallery2.jpeg",
    location: "Gunung Sibayak",
    description:
      "Camping bersama dengan suasana pegunungan dan udara dingin yang menenangkan.",
  },

  {
    title: "Island Exploration",
    image: "/images/pulau.JPG",
    location: "Pulau Pandang",
    description:
      "Menjelajahi pulau tersembunyi dengan panorama laut yang memukau.",
  },

  {
    title: "Forest Adventure",
    image: "/images/g3.jpg",
    location: "Tangkahan",
    description:
      "Perjalanan menyusuri hutan dan menikmati suasana alam yang masih alami.",
  },
]

const timeline = [
  {
    year: "2021",
    title: "Komunitas Dibentuk",
    text: "Oetewe Community lahir dari sekumpulan pecinta alam dan perjalanan.",
  },

  {
    year: "2022",
    title: "Perjalanan Pertama",
    text: "Mulai menjelajahi gunung, pantai, dan hutan di Sumatera Utara.",
  },

  {
    year: "2023",
    title: "Komunitas Berkembang",
    text: "Semakin banyak anggota yang bergabung dan ikut dalam kegiatan outdoor.",
  },

  {
    year: "2024",
    title: "Ekspansi Destinasi",
    text: "Perjalanan mulai menjangkau lebih banyak tempat eksotis di Indonesia.",
  },
]

export default function KegiatanPage() {
  return (
    <main className="bg-[#F4F1EA] overflow-hidden">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center">

        {/* Background */}
        <div className="absolute inset-0">

          <img
            src="/images/g8.jpg"
            alt="Kegiatan Oetewe"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center px-6"
        >

          <p className="uppercase tracking-[0.4em] text-sm text-white/80 mb-6">

            Oetewe Activities

          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">

            Every Journey <br />
            Creates Stories

          </h1>

          <p className="max-w-2xl mx-auto text-white/80 text-lg leading-relaxed">

            Kegiatan komunitas kami bukan hanya tentang perjalanan,
            tetapi tentang pengalaman, persahabatan,
            dan kenangan yang tercipta di setiap langkah.

          </p>

        </motion.div>

      </section>

      {/* FEATURED ACTIVITIES */}
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

              Featured Activities

            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-[#344E41] mb-6">

              Perjalanan Pilihan

            </h2>

            <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">

              Setiap perjalanan memiliki cerita,
              pengalaman, dan suasana yang berbeda.

            </p>

          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">

            {activities.map((activity, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-[32px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-3 transition-all duration-500"
              >

                {/* Image */}
                <div className="relative overflow-hidden">

                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-6">

                    <p className="uppercase tracking-[0.2em] text-sm text-white/70 mb-3">

                      {activity.location}

                    </p>

                    <h3 className="text-3xl font-bold text-white">

                      {activity.title}

                    </h3>

                  </div>

                </div>

                {/* Content */}
                <div className="p-8">

                  <p className="text-gray-600 leading-relaxed text-lg">

                    {activity.description}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* TIMELINE */}
      <section className="py-28 px-6 bg-[#EAE4D5]">

        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >

            <p className="uppercase tracking-[0.3em] text-sm text-[#5F6F52] mb-5">

              Journey Timeline

            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-[#344E41]">

              Perjalanan Komunitas

            </h2>

          </motion.div>

          {/* Timeline */}
          <div className="relative border-l border-[#5F6F52]/20 ml-4">

            {timeline.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="mb-20 ml-10 relative"
              >

                {/* Dot */}
                <div className="absolute -left-[52px] top-1 w-6 h-6 rounded-full bg-[#5F6F52]" />

                <p className="text-[#5F6F52] uppercase tracking-[0.2em] text-sm mb-4">

                  {item.year}

                </p>

                <h3 className="text-3xl font-bold text-[#344E41] mb-5">

                  {item.title}

                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">

                  {item.text}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* LARGE IMAGE SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center">

        <img
          src="/images/gallery1.png"
          alt="Adventure"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-20 text-center px-6"
        >

          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">

            Adventure <br />
            Never Ends

          </h2>

          <p className="max-w-2xl mx-auto text-white/80 text-lg leading-relaxed">

            Setiap perjalanan membuka pengalaman baru,
            mempertemukan orang-orang baru,
            dan menciptakan cerita yang tidak terlupakan.

          </p>

        </motion.div>

      </section>

      <CTA />

    </main>
  )
}