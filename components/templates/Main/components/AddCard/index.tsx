import { useState } from "react";

import { DialogComponent } from "components/_common/Dialog";
import { Input } from "components/_common/Form";
import { useSnackbar } from "notistack";
import {
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { TodoService } from "services";
import { AddFormInput } from "typings/form";

import { yupResolver } from "@hookform/resolvers/yup";
import { CircularProgress } from "@mui/material";

import {
  AddCardProps,
  FormSchema,
} from "./AddCard.interface";
import {
  AddButton,
  ButtonsContainer,
  Content,
} from "./styles";

export const AddCard = ({ onClose, connectionId }: AddCardProps) => {
  const { enqueueSnackbar } = useSnackbar();

  const { control, handleSubmit, formState } = useForm<AddFormInput>({
    resolver: yupResolver(FormSchema),
  });

  const [adding, setAdding] = useState(false);

  const add: SubmitHandler<AddFormInput> = (data) => {
    setAdding(true);
    const createdAt = new Date().toISOString();

    TodoService.createTodo({
      variables: {
        object: {
          title: data.title,
          completed: false,
          created_at: createdAt,
          updated_at: createdAt,
          description: data.description,
        },
      },
      onCompleted: () => {
        setAdding(false);
        enqueueSnackbar("Todo successfully added!", { variant: "success" });
        onClose();
      },
      onError: (err) => {
        setAdding(false);
        enqueueSnackbar(err.message, { variant: "error" });
      },
      connectionId,
    });
  };

  return (
    <DialogComponent
      open
      onClose={onClose}
      title="Add Todo"
      disableBackdropClick
      height={300}
    >
      <Content>
        <Input
          name="title"
          control={control}
          defaultValue=""
          color="secondary"
          required
          placeholder="Todo title"
          state={formState}
        />

        <Input
          name="description"
          control={control}
          defaultValue=""
          multiline
          sx={{ marginTop: 1 }}
          color="secondary"
          placeholder="Write a description"
          minRows={3}
        />
      </Content>
      <ButtonsContainer>
        <AddButton onClick={handleSubmit(add)} disabled={adding}>
          {adding ? <CircularProgress color="inherit" size={20} /> : "Add"}
        </AddButton>
      </ButtonsContainer>
    </DialogComponent>
  );
};
