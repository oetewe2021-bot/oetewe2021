"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface JoinModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function JoinModal({
  isOpen,
  onClose,
}: JoinModalProps) {

  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    whatsapp: "",
    alasan: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

  }

  const handleSubmit = () => {

    const message = `Halo Admin Oetewe Community

Saya ingin bergabung ke komunitas.

━━━━━━━━━━

Nama:
${formData.nama}

Alamat:
${formData.alamat}

WhatsApp:
${formData.whatsapp}

━━━━━━━━━━

Alasan Bergabung:
${formData.alasan}

━━━━━━━━━━`

    const whatsappUrl =
      `https://wa.me/6282272197795?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")
    onClose()

  }

  return (

    <AnimatePresence>

      {isOpen && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed
            inset-0
            z-[999999]
            bg-black/80
            backdrop-blur-md

            flex
            items-center
            justify-center

            px-5
            py-8
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              relative
              w-full
              max-w-xl
              bg-white
              rounded-[28px]
              p-6
              md:p-7
              shadow-[0_25px_80px_rgba(0,0,0,0.35)]
            "
          >

            {/* CLOSE */}
            <button
              onClick={onClose}
              className="
                absolute
                top-4
                right-5
                text-3xl
                text-gray-500
                hover:text-black
                transition
              "
            >

              ×

            </button>

            {/* HEADER */}
            <div className="mb-6">

              <p className="uppercase tracking-[0.3em] text-xs text-[#5F6F52] mb-3">

                Join Oetewe

              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-[#344E41] mb-3 leading-tight">

                Gabung Bersama Kami

              </h2>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base">

                Isi data diri terlebih dahulu sebelum bergabung
                dengan komunitas Oetewe Community.

              </p>

            </div>

            {/* FORM */}
            <div className="space-y-4">

              <input
                type="text"
                name="nama"
                placeholder="Nama Lengkap"
                onChange={handleChange}
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-2xl
                  px-5
                  py-3
                  outline-none
                  focus:border-[#5F6F52]
                "
              />

              <input
                type="text"
                name="alamat"
                placeholder="Alamat"
                onChange={handleChange}
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-2xl
                  px-5
                  py-3
                  outline-none
                  focus:border-[#5F6F52]
                "
              />

              <input
                type="text"
                name="whatsapp"
                placeholder="Nomor WhatsApp"
                onChange={handleChange}
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-2xl
                  px-5
                  py-3
                  outline-none
                  focus:border-[#5F6F52]
                "
              />

              <textarea
                name="alasan"
                rows={4}
                placeholder="Alasan ingin bergabung..."
                onChange={handleChange}
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-2xl
                  px-5
                  py-3
                  outline-none
                  resize-none
                  focus:border-[#5F6F52]
                "
              />

              <button
                onClick={handleSubmit}
                className="
                  w-full
                  bg-[#5F6F52]
                  text-white
                  py-3.5
                  rounded-2xl
                  font-semibold
                  tracking-[0.15em]
                  hover:bg-[#4F5D44]
                  transition
                  duration-300
                "
              >

                KIRIM KE ADMIN

              </button>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  )
}