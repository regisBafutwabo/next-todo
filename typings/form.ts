import * as yup from "yup";

export type AddFormInput = {
  title: string;
  description: string;
};

export type EditFormInput = AddFormInput & {
  completed: number;
};

export const FormSchema = yup.object({
  title: yup
    .string()
    .min(2, "The title must be longer than 2 characters.")
    .max(60, "The title cannot be longer than 80 characters.")
    .required("The Title is required."),
  description: yup.string(),
});
