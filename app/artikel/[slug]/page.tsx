import { articles } from "@/lib/articles"

export default async function ArticleDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const article = articles.find(
    (article) => article.slug === slug
  )

  if (!article) {
    return (
      <main className="min-h-screen pt-32 px-6">
        <h1 className="text-4xl font-bold text-[#344E41]">
          Artikel tidak ditemukan
        </h1>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-32 px-6 pb-20 bg-[#F4F1EA]">

      <article className="max-w-4xl mx-auto">

        {/* Gambar utama */}
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-[500px] object-cover rounded-[30px] shadow-xl"
        />

        {/* Judul */}
        <div className="mt-10">

          <p className="text-[#5F6F52] tracking-wide mb-4">
            {article.date}
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-[#344E41] leading-tight">
            {article.title}
          </h1>

        </div>

        {/* Isi artikel */}
        <div className="mt-10 text-lg text-gray-700 leading-relaxed whitespace-pre-line">
          {article.content}
        </div>

      </article>

    </main>
  )
}