import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "../reducers/userReducer";

const TestProviders = ({ initState }) => {
	initState ||= {
		userResults: {
			login: "",
			rep_count: 0,
			avatar_url: "",
			url: "",
			followers: 0,
			following: 0,
		},
		allRepoResults: [{
			name: "",
			url: "",
			html_url: "",
			forks: 0
		}],
		individualRepoResult: {
			name: "",
			html_url: "",
			description: "",
			created_at: "",
			language: "",
			forks: 0,
			open_issues: 0,
			topics: [],
			watchers: 0,
			subscribers_count: 0
		},
		loadingUser: false,
		loadingRepo: false,
		error: false
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
