import { vi } from "vitest"
import * as Hooks from "../hooks"

export function mockUseToastAction() {
  const showToast = vi.fn()
  const hideToast = vi.fn()
  vi.spyOn(Hooks, "useToastAction").mockImplementationOnce(() => ({
    showToast,
    hideToast,
  }))
  return { showToast, hideToast }
}
