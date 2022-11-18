import { render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Page />);

    const heading = screen.getByRole("heading", {
      name: /Hello, Next.js!/i,
    });

    expect(heading).toBeInTheDocument();
    expect(heading).not.toBeNull();
  });
});
