import { events } from "@/lib/events"

export default async function EventDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const event = events.find(
    (event) => event.slug === slug
  )

  if (!event) {
    return (
      <main className="min-h-screen pt-32 px-6 bg-[#F4F1EA]">
        <h1 className="text-4xl font-bold text-[#344E41]">
          Kegiatan tidak ditemukan
        </h1>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-[#F4F1EA]">

      <article className="max-w-5xl mx-auto">

        {/* Hero Image */}
        <div className="overflow-hidden rounded-[32px] shadow-2xl">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Header */}
        <div className="mt-10">

          <p className="uppercase tracking-[0.25em] text-sm text-[#5F6F52] mb-4">
            {event.date}
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-[#344E41] leading-tight">
            {event.title}
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            📍 {event.location}
          </p>

        </div>

        {/* Description */}
        <div className="mt-10 text-lg text-gray-700 leading-relaxed whitespace-pre-line">
          {event.description}
        </div>

        {/* Gallery */}
        <div className="mt-16">

          <h2 className="text-3xl font-bold text-[#344E41] mb-8">
            Dokumentasi Kegiatan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {event.gallery.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[28px] shadow-lg"
              >
                <img
                  src={image}
                  alt={`${event.title} ${index + 1}`}
                  className="w-full h-[350px] object-cover hover:scale-105 transition duration-700"
                />
              </div>
            ))}

          </div>

        </div>

      </article>

    </main>
  )
}