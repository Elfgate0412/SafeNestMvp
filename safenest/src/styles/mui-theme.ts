"use client";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#111827" },   // gray-900-ish
    secondary: { main: "#2563eb" }, // blue-600-ish
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: [
      "Inter",
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "Segoe UI",
      "Roboto",
      "Noto Sans",
      "Ubuntu",
      "Cantarell",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});
