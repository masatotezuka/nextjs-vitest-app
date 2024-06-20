import { vi, test, expect, afterEach, beforeEach } from "vitest"
import { getPostTitle } from "./index"
import { describe } from "node:test"
import * as Fetchers from "../fetcher/getPostFetcher"
import { httpError } from "../fetcher/getPostFetcher/fixtures"
// 各テスト実行後にモックをリセットする
beforeEach(() => {
  vi.resetModules()
})
// fetchersモジュールをモックする=API通信が発生しないようにする
vi.mock("./fetchers")

describe("getPostTitle", () => {
  test("データが取得できた場合：タイトルがあるとき", async () => {
    // spyOnを使ってgetPostFetcherが指定したオブジェクトのメソッドをモックする
    vi.spyOn(Fetchers, "getPostFetcher").mockResolvedValue({
      id: "1",
      userId: "1",
      title: "test title",
      body: "test body",
    })
    const title = await getPostTitle("1")
    expect(title).toBe("This post title is test title")
  })

  test("データが取得できた場合：タイトルがあるとき(id:1,2を指定)", async () => {
    // mockResolvedValueOnceを使えば、複数回の呼び出しに対して異なる値を返すことができる
    vi.spyOn(Fetchers, "getPostFetcher")
      .mockResolvedValueOnce({
        id: "1",
        userId: "1",
        title: "test title1",
        body: "test body",
      })
      .mockResolvedValueOnce({
        id: "2",
        userId: "2",
        title: "test title2",
        body: "test body",
      })

    const title1 = await getPostTitle("1")
    const title2 = await getPostTitle("2")
    expect(title1).toBe("This post title is test title1")
    expect(title2).toBe("This post title is test title2")
  })

  test("データが取得できた場合：タイトルがないとき", async () => {
    vi.spyOn(Fetchers, "getPostFetcher").mockResolvedValue({
      id: "1",
      userId: "1",
      body: "test body",
    })
    const title = await getPostTitle("1")
    expect(title).toBe("No Post Title")
  })

  test("データ取得失敗時", async () => {
    // mockRejectedValueで値を指定することで、API通信が失敗した場合の挙動を再現できる
    vi.spyOn(Fetchers, "getPostFetcher").mockRejectedValue(httpError)
    await expect(getPostTitle("1")).rejects.toMatchObject(httpError)
  })

  test("データ取得失敗時、エラー相当のデータが例外としてスローされる", async () => {
    vi.spyOn(Fetchers, "getPostFetcher").mockRejectedValue(httpError)
    try {
      await getPostTitle("1")
    } catch (err) {
      expect(err).toMatchObject(httpError)
    }
  })
})
