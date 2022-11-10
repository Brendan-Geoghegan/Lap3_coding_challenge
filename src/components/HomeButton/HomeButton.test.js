/**
 * @jest-environment jsdom
 */
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomeButton from "./index";

describe("HomeButton component", () => {
    test("appears in the page", () => {
        render(<HomeButton />, { wrapper: MemoryRouter });
        const btn = screen.getByRole("button");
        expect(btn).toBeInTheDocument();
    });
});
