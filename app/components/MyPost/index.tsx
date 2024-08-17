import Link from "next/link"
import { ContentHeader } from "../ContentHeader"

import styles from "./styles.module.css"

type Props = {
  post: {
    id: number
    title: string
    description: string
    body: string
    imageUrl: string
    published: boolean
    authorId: number
  }
}

export const MyPost = ({ post }: Props) => {
  return (
    <>
      <p
        className={styles.image}
        style={{ backgroundImage: `url(${post.imageUrl})` }}
      />
      <div className={styles.module}>
        <div className={styles.headGroup}>
          <ContentHeader
            title={post.title}
            description={post.description}
            className={styles.header}
          />
          <Link href={`/my/posts/${post.id}/edit`}>編集する</Link>
        </div>
        <p>{post.body!} </p>
      </div>
    </>
  )
}
