import type { Articles } from "./types"

async function handleResponse(res: Response) {
  const data = await res.json()
  if (!res.ok) {
    throw data
  }
  return data
}

const host = (path: string) => `https://myapi.testing.com${path}`

export function getMyArticles(): Promise<Articles> {
  return fetch(host("/my/articles")).then(handleResponse)
}
