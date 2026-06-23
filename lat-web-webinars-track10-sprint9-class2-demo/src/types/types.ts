export interface ValidationConfig {
  inputSelector: string;
  submitButtonSelector: string;
  inactiveButtonClass: string;
  inputErrorClass: string;
  errorClass: string;
}

export interface PostData {
  title: string;
  body: string;
}

export interface UserData {
  name: string;
  username: string;
  email: string;
}
