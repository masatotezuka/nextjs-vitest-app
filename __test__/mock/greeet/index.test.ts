import { expect, test } from "vitest"
import { greet } from "./index"

test("挨拶を返す", () => {
  expect(greet()).toBe("Hello, world!")
})
