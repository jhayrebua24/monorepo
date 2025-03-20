import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App component", async () => {
  it("Renders", async () => {
    render(<App />);

    const testComponent = await screen.findByRole("main", {
      name: "Test component",
    });

    expect(testComponent).toHaveTextContent("Hello John");
  });
});
