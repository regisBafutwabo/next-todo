import { ReactNode } from "react";

import {
  Control,
  FormState,
} from "react-hook-form";

export type InputProps = {
  control: Control<any, object>;
  name: string;
  defaultValue?: string | number;
  required?: boolean;
  children?: ReactNode;
  maxLength?: number;
  minLength?: number;
  state?: FormState<any>;
};
