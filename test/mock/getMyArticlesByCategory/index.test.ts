import { describe, expect, test, vi } from "vitest"
import * as Fetchers from "../fetcher/getMyArticles"
import { myArticlesData } from "../fetcher/getMyArticles/fixtures"
import { httpError } from "../fetcher/base"
import { getMyArticlesByCategory } from "."

//フェッチャーのレスポンスを切り替えるモック生成関数を作成する
function mockGetMyArticles(status = 200) {
  if (status > 299) {
    return vi.spyOn(Fetchers, "getMyArticles").mockRejectedValue(httpError)
  }
  return vi.spyOn(Fetchers, "getMyArticles").mockResolvedValue(myArticlesData)
}

describe("getMyArticlesByCategory", () => {
  test("指定したカテゴリーの記事が存在する場合", async () => {
    mockGetMyArticles()

    const data = await getMyArticlesByCategory("nextjs")
    expect(data).toMatchObject([
      {
        id: "nextjs-link-component",
        title: "Next.js の Link コンポーネント",
        link: "/articles/nextjs-link-component",
      },
    ])
  })

  test("指定したカテゴリーの記事が存在しない場合", async () => {
    mockGetMyArticles()

    const data = await getMyArticlesByCategory("TypeScript")
    expect(data).toBeNull()
  })

  test("データ取得に失敗した場合", async () => {
    mockGetMyArticles(500)

    await expect(getMyArticlesByCategory("TypeScript")).rejects.toMatchObject(
      httpError
    )
  })
})
