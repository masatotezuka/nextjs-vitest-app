import { expect, test, vi } from "vitest"
import { greet } from "./index"

// mockを使ってテストを実行すると、greet関数がundefinedを返すようになる
vi.mock("./index")

test("挨拶を返す", () => {
  expect(greet()).toBe(undefined)
})
