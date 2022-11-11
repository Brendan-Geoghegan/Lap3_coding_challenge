/**
 * @jest-environment jsdom
 */

import { default as Profile } from '.';
import { screen } from '@testing-library/react';

describe('Profile', () => {

    let initState = {
        userResults: {
            login: "Brendan-Geoghegan",
            rep_count: 22,
            avatar_url: "https://avatars.githubusercontent.com/u/97668707?v=4",
            url: "https://api.github.com/users/Brendan-Geoghegan",
            followers: 5,
            following: 8
        },
        allRepoResults: [
            {
                name: "actions_js",
                url: "https://api.github.com/repos/Brendan-Geoghegan/actions_js",
                html_url: "https://api.github.com/repos/Brendan-Geoghegan/actions_js",
                forks: 1
            },
            {
                name: "API_design",
                url: "https://api.github.com/repos/Brendan-Geoghegan/API_design",
                html_url: "https://api.github.com/repos/Brendan-Geoghegan/API_design",
                forks: 0
            }
        ],
        individualRepoResult: {
            name: "actions_js",
            html_url: "https://github.com/Brendan-Geoghegan/actions_js",
            description: null,
            created_at: "2022-09-20T10:33:01Z",
            language: "JavaScript",
            forks: 1,
            open_issues: 0,
            topics: [],
            watchers: 0,
            subscribers_count: 1
        },
        loadingUser: false,
        loadingRepo: false,
        error: false
    };

    test('it renders the content', () => {
        
        renderWithReduxProvider(<Profile />, { initState });
        let content = screen.getByRole("main")
        expect(content).toBeInTheDocument();
    });

    test('it renders the div username', () => {
        renderWithReduxProvider(<Profile />, { initState });
        let heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe("Brendan-Geoghegan");
    });

    test('it renders the user image', () => {
        renderWithReduxProvider(<Profile />, { initState });
        let img = screen.getByRole("img")
        expect(img).toBeInTheDocument();
        expect(img.src).toBe("https://avatars.githubusercontent.com/u/97668707?v=4");
    });
    test('it renders the div username', () => {
        renderWithReduxProvider(<Profile />, { initState });
        let section = screen.getByRole("section")
        expect(section).toBeInTheDocument();
        expect(section.textContent).toBe("5 followers • 8 following");
    });
});
