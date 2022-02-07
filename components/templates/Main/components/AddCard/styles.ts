import {
  Button,
  DialogActions,
  DialogContent,
  styled,
} from "@mui/material";

export const Content = styled(DialogContent)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

export const ButtonsContainer = styled(DialogActions)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
}));

export const AddButton = styled(Button)(
  ({ theme: { palette, breakpoints } }) => ({
    backgroundColor: palette.secondary.main,
    color: palette.secondary.contrastText,
    border: `1px solid transparent`,
    [breakpoints.down("sm")]: {
      width: "100%",
    },
    ":hover": {
      backgroundColor: "transparent",
      color: palette.secondary.main,
      border: `1px solid ${palette.secondary.main}`,
    },
  })
);
