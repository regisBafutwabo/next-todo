import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  styled,
  Typography,
} from "@mui/material";

export const Title = styled(Typography)(() => ({}));

export const DescriptionLabel = styled(Typography)(() => ({}));

export const Description = styled(Typography)(({ theme: { spacing } }) => ({
  marginTop: spacing(1),
}));

export const TitleContainer = styled(Box)(() => ({}));

export const DescriptionContainer = styled(Box)(({ theme: { spacing } }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: spacing(2),
}));

export const DateContainer = styled(Box)(({ theme: { spacing } }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: spacing(4),
}));

export const Content = styled(DialogContent)(() => ({}));

export const ButtonsContainer = styled(DialogActions)(
  ({ theme: { breakpoints } }) => ({
    display: "flex",
    flexDirection: "row",
    [breakpoints.down("sm")]: {
      justifyContent: "space-between",
    },
  })
);

export const CreatedAtContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
}));

export const CreatedAtLabel = styled(Typography)(
  ({ theme: { spacing, palette } }) => ({
    paddingRight: spacing(1),
    fontWeight: 600,
    color: palette.grey[700],
  })
);

export const UpdatedAtLabel = styled(CreatedAtLabel)(() => ({}));

export const UpdatedAtContainer = styled(CreatedAtContainer)(() => ({}));

export const EditButton = styled(Button)(({ theme: { palette } }) => ({
  backgroundColor: palette.error.main,
  color: palette.secondary.contrastText,
  border: `1px solid transparent`,
  ":hover": {
    backgroundColor: "transparent",
    color: palette.error.main,
    border: `1px solid ${palette.error.main}`,
  },
}));

export const DeleteButton = styled(Button)(({ theme: { palette } }) => ({
  backgroundColor: palette.secondary.main,
  color: palette.secondary.contrastText,
  border: `1px solid transparent`,
  ":hover": {
    backgroundColor: "transparent",
    color: palette.secondary.main,
    border: `1px solid ${palette.secondary.main}`,
  },
}));

export const SaveButton = styled(Button)(({ theme: { palette } }) => ({
  backgroundColor: palette.info.main,
  color: palette.secondary.contrastText,
  border: `1px solid transparent`,
  ":hover": {
    backgroundColor: "transparent",
    color: palette.info.main,
    border: `1px solid ${palette.info.main}`,
  },
}));
