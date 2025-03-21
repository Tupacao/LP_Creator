import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./Login";

describe('Login', () => {
    
    test('Should render the Login page', () => {
        render(<Login />);
        expect(screen.getByText('BEM VINDO')).toBeInTheDocument();
    });
})