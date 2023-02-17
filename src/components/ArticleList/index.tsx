import { Article } from '@/src/utils/articles'
import ArticleCard from '../ArticleCard'

interface ArticleListProps {
  articles: Article[]
}

export default function ArticleList(props: ArticleListProps) {
  const { articles } = props

  return (
    <section className="grid grid-cols-1 gap-4">
      <h2 className="text-xl text-gray-200">2023</h2>
      {articles.map(article => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </section>
  )
}
