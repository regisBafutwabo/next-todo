import {
  Box,
  Dialog,
  IconButton,
  styled,
} from "@mui/material";

export const Container = styled(Dialog)(({ theme: { breakpoints } }) => ({
  // minWidth:500
  "& .MuiPaper-root": {
    minWidth: 700,
    minHeight: 500,
    [breakpoints.down("sm")]: {
      minWidth: "100%",
      minHeight: "100%",
    },
  },
}));

export const TitleContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}));

export const CloseButton = styled(IconButton)(() => ({
  position: "absolute",
}));
