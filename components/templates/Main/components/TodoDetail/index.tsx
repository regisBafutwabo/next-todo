import { useState } from "react";

import { DialogComponent } from "components/_common/Dialog";
import {
  TodoDetailsQuery,
} from "config/relay/__generated__/TodoDetailsQuery.graphql";
import { useRouter } from "next/router";
import { useLazyLoadQuery } from "react-relay";

import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import SaveIcon from "@mui/icons-material/Save";

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

export const TodoDetail = () => {
  const { replace, query } = useRouter();

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(!!query.id);

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

  const onSave = () => {
    setIsEdit(false);
  };

  const handleSubmit = () => {};

  return (
    <DialogComponent open={open} onClose={onClose} title="Todo">
      <Content dividers>
        {isEdit ? (
          <EditInfo todo={todoData.node} handleSubmit={handleSubmit} />
        ) : (
          <Info todoData={todoData} />
        )}
      </Content>
      <ButtonsContainer>
        <DeleteButton startIcon={<DeleteIcon />}>Delete</DeleteButton>
        {isEdit ? (
          <SaveButton startIcon={<SaveIcon />} onClick={onSave}>
            Save
          </SaveButton>
        ) : (
          <EditButton
            disableElevation
            startIcon={<ModeEditIcon />}
            onClick={onEdit}
          >
            Edit
          </EditButton>
        )}
      </ButtonsContainer>
    </DialogComponent>
  );
};
