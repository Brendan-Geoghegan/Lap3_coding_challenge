import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "../reducers/userReducer";

const TestProviders = ({ initState }) => {
	initState ||= {
		location: "",
		result: { sunrise: "", sunset: "" },
		loading: false,
	};
	let testReducer = () => userReducer(initState, { type: "@@INIT" });
	const testStore = createStore(testReducer, applyMiddleware(thunk));

	return ({ children }) => <Provider store={testStore}>{children}</Provider>;
};

const renderWithReduxProvider = (ui, options = {}) => {
	let TestWrapper = TestProviders(options);
	render(ui, { wrapper: TestWrapper, ...options });
};

import axios from "axios";
jest.mock("axios");
axios.get.mockResolvedValue({ data: [{ latlng: [123, 456] }] });

global.renderWithReduxProvider = renderWithReduxProvider;
global.React = React;
