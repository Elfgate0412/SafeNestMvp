// styles/mui-theme.ts
import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    primary: { main: "#43B929", light: "#87E752" },  // brand green
    secondary:{ main: "#FF37A6" },                   // accent pink
    success:  { main: "#5CF64A" },
    divider:  "#F1DEDE",
    background: { default:"#ffffff", paper:"#F7FAF8" }
  },
  shape: { borderRadius: 12 }
});
