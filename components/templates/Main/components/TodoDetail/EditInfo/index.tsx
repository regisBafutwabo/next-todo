import {
  Controller,
  SubmitHandler,
  useForm,
} from "react-hook-form";

import {
  MenuItem,
  TextField,
} from "@mui/material";

import {
  EditInfoProps,
  IFormInput,
} from "./EditInfo.interface";
import { ContainerForm } from "./styles";

export const EditInfo = ({ todo }: EditInfoProps) => {
  const { control, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <ContainerForm onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        defaultValue={todo?.title || ""}
        render={({ field }) => (
          <TextField
            label="Title"
            color="secondary"
            sx={{ marginBottom: 1 }}
            variant="outlined"
            {...field}
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        defaultValue={todo?.description || ""}
        render={({ field }) => (
          <TextField
            multiline
            color="secondary"
            sx={{ marginBottom: 1 }}
            label="Description"
            placeholder="Write a description"
            minRows={3}
            {...field}
          />
        )}
      />
      <Controller
        name="completedAt"
        control={control}
        render={({ field }) => (
          <TextField
            select
            color="secondary"
            {...field}
            label="Status"
            InputLabelProps={{ style: { fontSize: 15 } }}
            value={todo?.completed ? 1 : 0}
          >
            <MenuItem value={1}>Completed</MenuItem>
            <MenuItem value={0}>Not Completed</MenuItem>
          </TextField>
        )}
      />
    </ContainerForm>
  );
};
