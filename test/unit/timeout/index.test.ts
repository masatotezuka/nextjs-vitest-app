import { describe, expect, test } from "vitest"
import { timeout } from "."
describe("timeout", () => {
  test("指定時間待つと、経過時間をもって reject される", () => {
    return timeout(50).catch((duration) => {
      expect(duration).toBe(50)
    })
  })

  test("指定時間待つと、経過時間をもって reject される", () => {
    return expect(timeout(50)).rejects.toBe(50)
  })

  test("指定時間待つと、経過時間をもって reject される", async () => {
    await expect(timeout(50)).rejects.toBe(50)
  })

  test("指定時間待つと、経過時間をもって reject される", async () => {
    expect.assertions(1)
    try {
      await timeout(50)
    } catch (duration) {
      expect(duration).toBe(50)
    }
  })
})
