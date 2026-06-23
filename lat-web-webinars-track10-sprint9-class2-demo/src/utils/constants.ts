import type { PostData, ValidationConfig } from "../types/types.js";

// Variables globales
export const initialPosts: PostData[] = [
  {
    title: "Bienvenidos a mi nuevo blog",
    body: "Este es el primer post de mi blog personal.",
  },
  {
    title: "TypeScript es increíble",
    body: "La tipación estática nos ayuda a evitar errores antes de ejecutar el código.",
  },
];

export const defaultFormConfig: ValidationConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
