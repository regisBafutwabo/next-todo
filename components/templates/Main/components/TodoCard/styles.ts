import {
  ListItem,
  styled,
} from "@mui/material";

import { ContainerType } from "./TodoCard.interface";

export const Container = styled(ListItem, {
  shouldForwardProp: (prop: string) => prop !== "completed",
})<ContainerType>(
  ({ theme: { palette, spacing, breakpoints }, completed }) => ({
    display: "flex",
    flexDirection: "row",
    width: 500,
    borderRadius: 4,
    border: `1px solid ${palette.secondary.main}`,
    margin: spacing(1, 0),
    textDecoration: completed ? "line-through" : "none",
    [breakpoints.down("md")]: {
      width: 300,
    },
  })
);
