import { useState } from "react";

import { DialogComponent } from "components/_common/Dialog";
import {
  TodoDetailsQuery,
} from "config/relay/__generated__/TodoDetailsQuery.graphql";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import {
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useLazyLoadQuery } from "react-relay";
import { TodoService } from "services";
import {
  EditFormInput,
  FormSchema,
} from "typings/form";
import { validateUUID } from "utils/validateUUID";

import { yupResolver } from "@hookform/resolvers/yup";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import SaveIcon from "@mui/icons-material/Save";
import { CircularProgress } from "@mui/material";

import { TodoDetails } from "../../graphql/queries/TodoDetails.query";
import { EditInfo } from "./EditInfo";
import { Info } from "./Info";
import {
  ButtonsContainer,
  Content,
  DeleteButton,
  EditButton,
  SaveButton,
} from "./styles";
import { TodoDetailProps } from "./TodoDetail.interface";

export const TodoDetail = ({ connectionId, onUpdate }: TodoDetailProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const { replace, query } = useRouter();
  const { control, handleSubmit, formState } = useForm<EditFormInput>({
    resolver: yupResolver(FormSchema),
  });

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(!!query.id);
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const todoData = useLazyLoadQuery<TodoDetailsQuery>(TodoDetails, {
    id: query.id as string,
  });

  const onClose = async () => {
    setOpen(false);
    await replace("/");
  };

  const onEdit = () => {
    setIsEdit(true);
  };

  const onDelete = () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this todo?"
    );

    if (confirmation) {
      setDeleting(true);

      TodoService.deleteTodo({
        variables: {
          id: validateUUID(todoData.node?.id),
          set: {
            deleted_at: new Date().toISOString(),
          },
        },
        onCompleted: async () => {
          setIsEdit(false);
          setDeleting(false);
          onUpdate();
          await replace("/");
          enqueueSnackbar("this Todo was successfully deleted!", {
            variant: "success",
          });
        },
        onError: () => {
          setDeleting(false);
          enqueueSnackbar("Oops something went wrong, please try again!", {
            variant: "success",
            autoHideDuration: 7000,
          });
        },
        connectionId: connectionId || "",
        deletedId: todoData.node?.id || "",
      });
    } else {
      setIsEdit(false);
    }
  };

  const onSave: SubmitHandler<EditFormInput> = (data) => {
    const confirmation = window.confirm(
      "Are you sure you want to edit this todo?"
    );

    if (confirmation) {
      setUpdating(true);

      TodoService.updateTodo({
        variables: {
          id: validateUUID(todoData.node?.id),
          set: {
            title: data.title,
            completed: data.completed === 1,
            description: data.description,
            updated_at: new Date().toISOString(),
          },
        },
        onCompleted: () => {
          setIsEdit(false);
          setUpdating(false);
          onUpdate();
          enqueueSnackbar("Your changes were successfully updated!", {
            variant: "success",
          });
        },
        onError: () => {
          setUpdating(false);
          enqueueSnackbar("Oops something went wrong, please try again!", {
            variant: "success",
            autoHideDuration: 7000,
          });
        },
      });
    } else {
      setIsEdit(false);
    }
  };

  return (
    <DialogComponent
      open={open}
      onClose={onClose}
      title="Todo"
      disableBackdropClick
    >
      <Content dividers>
        {isEdit ? (
          <EditInfo
            todo={todoData.node}
            control={control}
            formState={formState}
          />
        ) : (
          <Info todoData={todoData} />
        )}
      </Content>
      <ButtonsContainer>
        <DeleteButton
          onClick={onDelete}
          startIcon={<DeleteIcon />}
          disabled={deleting}
        >
          {deleting ? <CircularProgress color="inherit" size={15} /> : "Delete"}
        </DeleteButton>
        {isEdit ? (
          <SaveButton
            onClick={handleSubmit(onSave)}
            startIcon={<SaveIcon />}
            disabled={updating}
          >
            {updating ? <CircularProgress color="inherit" size={15} /> : "Save"}
          </SaveButton>
        ) : (
          <EditButton startIcon={<ModeEditIcon />} onClick={onEdit}>
            Edit
          </EditButton>
        )}
      </ButtonsContainer>
    </DialogComponent>
  );
};
