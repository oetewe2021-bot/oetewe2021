import Image from "next/image"

const events = [
  {
    slug: "oetewe-peduli",
    title: "Oetewe Peduli",
    date: "18 JUL",
    location: "Kabupaten Batu Bara",
    image: "/images/gallery1.png",
    description:
      "Kegiatan sosial komunitas Oetewe untuk membantu masyarakat sekitar dan menjaga lingkungan.",
  },
  {
    slug: "forest-camp-survival-training",
    title: "Forest Camp & Survival Training",
    date: "15 AUG",
    location: "Bukit Lawang",
    image: "/images/gallery2.jpeg",
    description:
      "Pelatihan survival di hutan untuk meningkatkan kemampuan bertahan hidup dan kerja sama tim.",
  },
]

type Params = {
  slug: string
}

export default async function EventDetail({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params

  const event = events.find((e) => e.slug === slug)

  if (!event) {
    return (
      <div className="pt-32 text-center text-gray-600">
        Event tidak ditemukan
      </div>
    )
  }

  return (
    <main className="bg-[#F4F1EA] min-h-screen pt-32 px-6">
      <div className="max-w-5xl mx-auto">
        <Image
          src={event.image}
          alt={event.title}
          width={1200}
          height={700}
          className="rounded-3xl shadow-xl object-cover"
        />

        <h1 className="text-4xl font-bold mt-8 text-[#344E41]">
          {event.title}
        </h1>

        <p className="text-gray-600 mt-2">
          {event.date} • {event.location}
        </p>

        <p className="mt-6 text-gray-700 leading-relaxed">
          {event.description}
        </p>
      </div>
    </main>
  )
}