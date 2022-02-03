import { useController } from "react-hook-form";

import {
  TextField,
  TextFieldProps,
} from "@mui/material";

import { SelectProps } from "./Select.interface";

export const Select = (props: TextFieldProps & SelectProps) => {
  const { control, name, defaultValue, required } = props;
  const {
    field: { onBlur, ref, onChange },
  } = useController({
    name,
    control,
    rules: { required },
    defaultValue,
  });

  return (
    <TextField
      select
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      {...props}
    />
  );
};
