import { PaletteMode } from "@mui/material";

export const getDesignPalettes = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#556cd6",
          },
          secondary: {
            main: "#19857b",
            contrastText: "#ffffff",
          },
          background: {
            default: "#ffffff",
          },
          text: {
            primary: "#000000",
            secondary: "#19857b",
          },
        }
      : {
          primary: {
            main: "#556cd6",
          },
          secondary: {
            main: "#19857b",
            contrastText: "#ffffff",
          },
          background: {
            default: "#000000",
          },
          text: {
            primary: "#ffffff",
            secondary: "#19857b",
          },
        }),
  },
});
