"use client"

import { motion } from "framer-motion"
const events = [
  {
    date: "12 JUN",
    title: "Camping Bersama Danau Toba",
    location: "Sumatera Utara",
  },
  {
    date: "24 JUL",
    title: "Pendakian Gunung Sibayak",
    location: "Berastagi",
  },
  {
    date: "15 AUG",
    title: "Forest Camp & Survival Training",
    location: "Bukit Lawang",
  },
]

export default function Events() {
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

            Upcoming Journey

          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#344E41]">

            Kegiatan Komunitas

          </h2>

        </div>

        {/* Event Cards */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">

          {events.map((event, index) => (

            <div
             key={index}
             className="min-w-[85%] md:min-w-0 bg-[#E9EDDC] rounded-[30px] p-8 shadow-lg hover:-translate-y-2 transition duration-500 flex flex-col snap-center"
            >

              {/* Date */}
              <div className="w-20 h-20 rounded-2xl bg-[#5F6F52] text-white flex flex-col items-center justify-center mb-8 shadow-md">

                <span className="text-2xl font-bold">
                  {event.date.split(" ")[0]}
                </span>

                <span className="text-sm tracking-widest">
                  {event.date.split(" ")[1]}
                </span>

              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-[#344E41] leading-snug mb-4">

                {event.title}

              </h3>

              <p className="text-gray-600 mb-8 flex-grow">

                {event.location}

              </p>

              {/* Button */}
              <button className="bg-[#5F6F52] text-white px-8 py-4 rounded-full tracking-[0.15em] text-sm font-semibold hover:bg-[#4F5D44] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">

                DETAIL EVENT

              </button>

            </div>

          ))}

        </div>

      </div>

    </motion.section>
  )
}