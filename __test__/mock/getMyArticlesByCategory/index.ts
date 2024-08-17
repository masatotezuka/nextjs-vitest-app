import { getMyArticles } from "../fetcher/getMyArticles"

export async function getMyArticlesByCategory(category: string) {
  const data = await getMyArticles()

  const articles = data.articles.filter((article) =>
    article.tags.includes(category)
  )
  if (articles.length === 0) {
    return null
  }

  return articles.map((article) => ({
    id: article.id,
    title: article.title,
    link: `/articles/${article.id}`,
  }))
}
