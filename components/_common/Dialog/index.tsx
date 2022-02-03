import CloseIcon from "@mui/icons-material/Close";
import {
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { DialogComponentProps } from "./Dialog.interface";
import {
  CloseButton,
  Container,
  TitleContainer,
} from "./styles";

export const DialogComponent = (props: DialogComponentProps) => {
  const {
    onClose,
    open,
    title,
    children,
    disableBackdropClick,
    width,
    height,
  } = props;

  const { breakpoints, palette } = useTheme();
  const mobile = useMediaQuery(breakpoints.down("sm"));

  const handleClose = (_: any, reason: "backdropClick" | "escapeKeyDown") => {
    if (disableBackdropClick && reason === "backdropClick") {
      return false;
    }

    if (typeof onClose === "function") {
      onClose();
      return true;
    }
    return false;
  };

  return (
    <Container
      onClose={handleClose}
      open={open}
      fullScreen={mobile}
      width={width}
      height={height}
    >
      <DialogTitle>
        <TitleContainer>
          {title}
          {onClose ? (
            <CloseButton
              aria-label="close"
              onClick={onClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: palette.grey[500],
              }}
            >
              <CloseIcon />
            </CloseButton>
          ) : undefined}
        </TitleContainer>
      </DialogTitle>
      {children}
    </Container>
  );
};
