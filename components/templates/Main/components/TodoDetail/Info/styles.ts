import {
  Box,
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

export const CompletedContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

export const CompletedLabel = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: 15,
}));
