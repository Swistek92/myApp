import { render, screen } from "@testing-library/react";
import Header from "./Header";
it("Asdasd", () => {
  render(<Header />);

  const header = screen.getByText(/header/i);

  expect(header).toBeInTheDocument();
});
