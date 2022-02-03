import {
  TodoDetailsQuery$data,
} from "config/relay/__generated__/TodoDetailsQuery.graphql";
import {
  Control,
  FormState,
} from "react-hook-form";
import { EditFormInput } from "typings/form";
import yup from "yup";

export type EditInfoProps = {
  todo: TodoDetailsQuery$data["node"];
  control: Control<EditFormInput, object>;
  formState: FormState<EditFormInput>;
};

export const EditFormSchema = yup.object({
  title: yup
    .string()
    .min(2, "The title must be longer than 2 characters.")
    .max(60, "The title cannot be longer than 80 characters.")
    .required("The Title is required."),
  description: yup.string(),
});
