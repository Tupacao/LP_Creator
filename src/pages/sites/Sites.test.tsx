import { render } from "@testing-library/react";
import Sites from "./Sites";
import {BrowserRouter} from "react-router-dom";

describe("Sites Component", () => {
    it("should render", () => {
        render(
            <BrowserRouter>
                <Sites />
            </BrowserRouter>
        );
    });
});