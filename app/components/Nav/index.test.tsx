import mockRouter from "next-router-mock"
import { Nav } from "./"
import { render, screen } from "@testing-library/react"
test.each([{ urL: "/my/post", name: "My Posts" }])(
  "My Postsリンクのテスト",
  ({ urL, name }) => {
    mockRouter.setCurrentUrl(urL)
    const mockFn = vi.fn()
    const { getByRole } = render(<Nav onCloseMenu={mockFn} />)
    // const link = getByRole("link", { name })
    // console.log(link)
    // expect(screen.getByText(name)).toBeInTheDocument()
  }
)
