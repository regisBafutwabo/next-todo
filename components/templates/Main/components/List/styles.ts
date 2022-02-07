import {
  Box,
  Button,
  LinearProgress,
  List,
  styled,
  Typography,
} from "@mui/material";

export const Container = styled(List)(() => ({}));

export const ButtonContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
}));

export const LoadMoreButton = styled(Button)(({ theme: { palette } }) => ({
  backgroundColor: palette.secondary.main,
  color: palette.secondary.contrastText,
  textTransform: "capitalize",

  ":hover": {
    border: `1px solid ${palette.secondary.main}`,
    color: palette.secondary.main,
  },
}));

export const ProgressContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const ProgressDetail = styled(Typography)(() => ({
  fontSize: 14,
}));

export const Progress = styled(LinearProgress)(() => ({
  height: 15,
  borderRadius: 25,
}));
