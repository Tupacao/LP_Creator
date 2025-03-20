import { createTheme } from "@mui/material";
import palette from "./Palette";
import typography from "./Typography";
import breakpoints from "./Breakpoints";

const theme = createTheme({
    palette,
    typography,
    breakpoints
})

export default theme;