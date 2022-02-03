// eslint-disable @typescript-eslint/no-unsafe-member-access
// eslint-disable no-unsafe-member-access

import { useController } from "react-hook-form";

import {
  FormHelperText,
  TextField,
  TextFieldProps,
  useTheme,
} from "@mui/material";

import { InputProps } from "./Input.interface";

export const Input = (props: TextFieldProps & InputProps) => {
  const { control, name, defaultValue, required, state, maxLength, minLength } =
    props;

  const { palette } = useTheme();

  const {
    field: { onChange, onBlur, ref },
  } = useController({
    name,
    control,
    rules: { required, maxLength, minLength },
    defaultValue,
  });

  return (
    <>
      <TextField
        onChange={onChange} // send value to hook form
        onBlur={onBlur} // notify when input is touched/blur
        inputRef={ref} // send input ref, so we can focus on input when error appear
        error={!!state?.errors[name]?.message}
        {...props}
      />
      {state ? (
        <FormHelperText sx={{ color: palette.error.main }}>
          {state.errors[name]?.message && state.errors[name]?.message}
        </FormHelperText>
      ) : undefined}
    </>
  );
};
