import { type MDXRemoteSerializeResult } from 'next-mdx-remote'
import { promises as fs } from 'fs'
import { serialize } from 'next-mdx-remote/serialize'

export type Article = {
  title: string
  date: string
  id: string
  slug: string
  description: string
  imagecover: string
}

export type Post<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult
  data: TFrontmatter
}

export async function getArticle(slug: string): Promise<Post<Article> | null> {
  try {
    const rawFile = await fs.readFile(`content/${slug}.mdx`, 'utf-8')

    const serialized = await serialize(rawFile, {
      parseFrontmatter: true,
    })

    const data = serialized.frontmatter as Article

    return {
      data,
      serialized,
    }
  } catch (err) {
    return null
  }
}

export async function getAllArticles(): Promise<Array<Post<Article>>> {
  const files = await fs.readdir('content')

  const articles = await Promise.all(
    files.map(async file => {
      const slug = file.replace(/\.mdx$/, '')
      return getArticle(slug)
    })
  )

  return articles.filter(article => article !== null) as Array<Post<Article>>
}
