import { Article } from '@/src/utils/articles'
import getRelativeTime from '@/src/utils/dateFormatter'
import Link from 'next/link'

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard(props: ArticleCardProps) {
  const { article } = props

  return (
    <div className="grid grid-cols-6 gap-4">
      <p className="text-xs text-gray-400" title={article.date}>
        {getRelativeTime(new Date(article.date))}
      </p>
      <div className="col-span-5">
        <h2 className="text-neutral-100 text-xl hover:text-white">
          <Link href={`/articles/${article.slug}`}>{article.title}</Link>
        </h2>
      </div>
    </div>
  )
}
