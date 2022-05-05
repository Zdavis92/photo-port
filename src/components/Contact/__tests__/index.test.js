import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

const formState = {
    name: 'john',
    email: 'email@email.com',
    message: 'some message here'
};

const { name, email, message } = formState;
const mockErrorMessage = jest.fn();
describe('Contact component', () => {
    it('renders', () => {
        render(<Contact
            />);
    })
})