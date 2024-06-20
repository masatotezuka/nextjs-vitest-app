import { useToastAction } from "./hooks"
import { expect, test } from "vitest"
import { fireEvent, getByRole, render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ToastProvider, ToastState } from "."

const TestComponent = ({ message }: { message: string }) => {
  const { showToast, hideToast } = useToastAction()
  return (
    <>
      <button onClick={() => showToast({ message })}>Show Toast</button>
      <button onClick={() => hideToast()}>Hide Toast</button>
    </>
  )
}

test("Show Toast", async () => {
  const user = userEvent.setup()
  const message = "Hello, World!"
  const { getByRole, getByText } = render(
    <ToastProvider>
      <TestComponent message={message} />
    </ToastProvider>
  )

  await user.click(getByText("Show Toast"))
  expect(getByRole("alert")).toHaveTextContent(message)
})

test("Hide Toast", async () => {
  const user = userEvent.setup()
  const message = "Hello, World!"
  const { getByRole, getByText, queryByRole } = render(
    <ToastProvider>
      <TestComponent message={message} />
    </ToastProvider>
  )

  await user.click(getByText("Show Toast"))
  expect(getByRole("alert")).toHaveTextContent(message)

  await user.click(getByText("Hide Toast"))
  await waitFor(() => {
    expect(queryByRole("alert")).toBeNull()
  })
})

// 初期値を注入して、表示確認をする
test("Succeed", () => {
  const state: ToastState = {
    isShown: true,
    message: "Hello, World!",
    style: "succeed",
  }
  const { getByRole } = render(
    <ToastProvider defaultState={state}>{null}</ToastProvider>
  )
  expect(getByRole("alert")).toHaveTextContent(state.message)
})

test("Failed", () => {
  const state: ToastState = {
    isShown: true,
    message: "Hello, World!",
    style: "failed",
  }
  const { getByRole } = render(
    <ToastProvider defaultState={state}>{null}</ToastProvider>
  )
  expect(getByRole("alert")).toHaveTextContent(state.message)
})
