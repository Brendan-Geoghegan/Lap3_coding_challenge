/**
 * @jest-environment jsdom
 */
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BackButton from "./index";

describe("BackButton", () => {
	test("appears in the page", () => {
		render(<BackButton />, { wrapper: MemoryRouter });
		const btn = screen.getByRole("button");
		expect(btn).toBeInTheDocument();
	});
});
