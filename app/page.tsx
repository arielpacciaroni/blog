import ArticleList from '@/src/components/ArticleList'
import { getAllArticles } from '@/src/utils/articles'

export default async function Home() {
  const allArticles = await getAllArticles()
  const articlesContent = allArticles.map(article => article.data)

  return <ArticleList articles={articlesContent ?? []} />
}
