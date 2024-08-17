type Post = {
  id: string
  userId: string
  title?: string
  body: string
}

export function getPostFetcher(id: string): Promise<Post> {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
    async (res) => {
      const data = await res.json()
      if (!res.ok) {
        throw data
      }
      return data
    }
  )
}
