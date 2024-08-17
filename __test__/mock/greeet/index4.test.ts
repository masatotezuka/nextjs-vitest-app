import { describe, expect, test, vi } from "vitest"

describe("モック関数を使ったスパイのテスト", () => {
  test("モック関数が実行された", () => {
    const mockFn = vi.fn()
    mockFn()
    expect(mockFn).toHaveBeenCalled()
  })

  test("モック関数が2回実行された", () => {
    const mockFn = vi.fn()
    mockFn()
    mockFn()
    expect(mockFn).toHaveBeenCalledTimes(2)
  })

  test("モック関数が指定の引数で実行された", () => {
    const mockFn = vi.fn()
    mockFn("foo")
    expect(mockFn).toHaveBeenCalledWith("foo")
  })
})
