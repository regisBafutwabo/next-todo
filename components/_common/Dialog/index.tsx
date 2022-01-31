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
  const { breakpoints, palette } = useTheme();
  const mobile = useMediaQuery(breakpoints.down("sm"));

  const { onClose, open, title, children } = props;

  return (
    <Container onClose={onClose} open={open} fullScreen={mobile}>
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
