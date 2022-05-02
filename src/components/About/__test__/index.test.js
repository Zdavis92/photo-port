import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import About from "..";

afterEach(cleanup);

describe('About components', () => {
    // First test
    // used 'it' function. The first argument, a string declares what is being tested. The second argument, a callback function, runs the test.
    it('renders', () => {
        render(<About />);
    });

    // Second test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
});