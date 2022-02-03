import { ReactNode } from "react";

import { Control } from "react-hook-form";

export type SelectProps = {
  control: Control<any, object>;
  name: string;
  defaultValue?: string | number;
  required?: boolean;
  children?: ReactNode;
};
