import {
  ListItem,
  styled,
} from "@mui/material";

export const Container = styled(ListItem)(
  ({ theme: { palette, spacing, breakpoints } }) => ({
    display: "flex",
    flexDirection: "row",
    width: 500,
    borderRadius: 4,
    border: `1px solid ${palette.secondary.main}`,
    margin: spacing(1, 0),
    [breakpoints.down("md")]: {
      width: 300,
    },
  })
);
