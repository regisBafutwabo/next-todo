import {
  Box,
  Dialog,
  IconButton,
  styled,
} from "@mui/material";

import { ContainerType } from "./Dialog.interface";

export const Container = styled(Dialog, {
  shouldForwardProp: (prop: string) => prop !== "width" && prop !== "height",
})<ContainerType>(({ theme: { breakpoints }, width, height }) => ({
  "& .MuiPaper-root": {
    minWidth: width || 700,
    minHeight: height || 500,
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
