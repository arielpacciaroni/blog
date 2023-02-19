import { notFound } from 'next/navigation'
import MdxContent from '@/src/components/MdxContent'
import { getArticle } from '@/src/utils/articles'
import getRelativeTime from '@/src/utils/dateFormatter'

interface ArticleProps {
  params: {
    slug: string
  }
}

export default async function Article({ params }: ArticleProps) {
  const { slug } = params
  const article = await getArticle(slug)

  if (!article) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-white text-3xl">{article.data.title}</h1>
      <p className="text-xs text-gray-400" title={article.data.date}>
        {getRelativeTime(new Date(article.data.date))}
      </p>
      <hr className="my-4 border border-gray-800" />
      <MdxContent source={article.serialized} />
    </div>
  )
}
