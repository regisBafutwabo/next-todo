import { ReactNode } from "react";

import { DialogProps } from "@mui/material";

export type DialogComponentProps = {
  title: string;
  open: boolean;
  onClose?: () => void;
  children: ReactNode;
  disableBackdropClick?: boolean;
  height?: number;
  width?: number;
};

export interface ContainerType extends DialogProps {
  width?: number;
  height?: number;
}
