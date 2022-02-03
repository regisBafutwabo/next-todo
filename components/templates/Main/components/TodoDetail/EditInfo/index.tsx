import { Input } from "components/_common/Form";
import { Select } from "components/_common/Form/Select";

import { MenuItem } from "@mui/material";

import { EditInfoProps } from "./EditInfo.interface";
import { ContainerForm } from "./styles";

export const EditInfo = ({ todo, control, formState }: EditInfoProps) => (
    <ContainerForm>
      <Input
        name="title"
        control={control}
        defaultValue={todo?.title || ""}
        sx={{ marginBottom: 1 }}
        color="secondary"
        state={formState}
        placeholder="Todo title"
      />
      <Input
        name="description"
        control={control}
        defaultValue={todo?.description || ""}
        multiline
        sx={{ marginBottom: 1 }}
        color="secondary"
        placeholder="Write a description"
        minRows={3}
      />
      <Select
        control={control}
        name="completed"
        color="secondary"
        label="Status"
        defaultValue={todo?.completed ? 1 : 0 || 0}
      >
        <MenuItem value={1}>Completed</MenuItem>
        <MenuItem value={0}>Not Completed</MenuItem>
      </Select>
    </ContainerForm>
  );
