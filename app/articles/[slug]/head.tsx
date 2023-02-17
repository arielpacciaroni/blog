import { getArticle } from '@/src/utils/articles'

interface ArticleProps {
  params: {
    slug: string
  }
}

export default async function Head({ params }: ArticleProps) {
  const { slug } = params
  const article = await getArticle(slug)

  const message =
    article !== null ? `Pauconu: ${article.data.title}` : 'Pauconu'

  const description =
    article !== null ? article.data.description : 'Article not found'

  return (
    <>
      <title>{message}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
