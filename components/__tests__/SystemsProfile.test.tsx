import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { SystemsProfile } from "../SystemsProfile";

describe("SystemsProfile", () => {
  it("renders the section heading", () => {
    render(<SystemsProfile />);
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /Credentials & Engineering Atlas/i,
      })
    ).toBeInTheDocument();
  });

  it("renders the HomeCertifi featured project title", () => {
    render(<SystemsProfile />);
    expect(
      screen.getByText(/HomeCertifi — Multi-Tenant AI Property Inspection Platform/i)
    ).toBeInTheDocument();
  });

  it("renders external links for certifications with credential URLs", () => {
    render(<SystemsProfile />);
    const links = screen.getAllByRole("link", { name: /View .* certificate/i });
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  it("marks certifications without a URL as unavailable", () => {
    render(<SystemsProfile />);
    expect(screen.getAllByText(/Certificate link unavailable/i).length).toBeGreaterThan(0);
  });

  it("does not expose an email contact field", () => {
    const { container } = render(<SystemsProfile />);
    expect(container.querySelector('a[href^="mailto:"]')).toBeNull();
  });

  it("uses a semantic ordered list for the employment timeline", () => {
    render(<SystemsProfile />);
    const list = screen.getByRole("list", { name: /employment timeline/i });
    expect(list.tagName).toBe("OL");
  });
});
