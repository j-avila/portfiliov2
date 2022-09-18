import { IForm } from "../hooks/types";


export const fetchOptions = (form: IForm) => ({
  method: "POST",
  body: JSON.stringify(form),
  headers: {
    "Content-Type": "application/json",
  },
})