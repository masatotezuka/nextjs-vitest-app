import { getPostFetcher } from "../fetcher/getPostFetcher"

export async function getPostTitle(id: string) {
  const data = await getPostFetcher(id)
  if (!data.title) {
    return "No Post Title"
  }
  return `This post title is ${data.title}`
}
