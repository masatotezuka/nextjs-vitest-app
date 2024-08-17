import { describe, expect, test } from "vitest"
import { wait } from "."

describe("wait", () => {
  // Promiseをリターン
  test("指定時間を待つと、経過時間をもってresolveされる", () => {
    return wait(3).then((duration) => {
      expect(duration).toBe(3)
    })
  })

  //resolvesを使用
  test("指定時間を待つと、経過時間をもってresolveされる", () => {
    return expect(wait(3)).resolves.toBe(3)
  })

  //async/awaitを使用
  test("指定時間を待つと、経過時間をもってresolveされる", async () => {
    await expect(wait(3)).resolves.toBe(3)
  })

  test("指定時間を待つと、経過時間をもってresolveされる", async () => {
    expect(await wait(3)).toBe(3)
  })
})
