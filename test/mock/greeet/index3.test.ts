import { expect, test, vi } from "vitest"
import { sayGoodBye } from "./index"

// モジュールの一部（sayGoodBye）をスタブに置き換える（＝返り値を固定する）
// https://vitest.dev/api/vi.html#vi-mock
vi.mock("./index", async (importOriginal) => {
  const mod = await importOriginal<typeof import("./index")>()
  return {
    ...mod,
    sayGoodBye: (name: string) => `Goodbye, ${name}!`,
  }
})

test("挨拶を返す", () => {
  expect(sayGoodBye("Taro")).toBe("Goodbye, Taro!")
})
