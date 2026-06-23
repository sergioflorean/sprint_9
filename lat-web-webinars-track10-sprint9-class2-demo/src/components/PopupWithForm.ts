import { Popup } from "./Popup.js";

interface FormValues {
  [key: string]: string;
}

export class PopupWithForm extends Popup {
  private formElement: HTMLFormElement;
  private inputList: NodeListOf<HTMLInputElement>;
  private handleFormSubmit: (inputValues: FormValues) => void;

  constructor(
    popupSelector: string,
    handleFormSubmit: (inputValues: FormValues) => void,
  ) {
    super(popupSelector);
    this.handleFormSubmit = handleFormSubmit;
    this.formElement = this.popupElement.querySelector(
      ".popup__form",
    ) as HTMLFormElement;
    this.inputList = this.formElement.querySelectorAll(".popup__input");
  }

  private getInputValues(): FormValues {
    const formValues: FormValues = {};
    this.inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this.formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this.handleFormSubmit(this.getInputValues());
    });
  }

  close() {
    super.close();
    this.formElement.reset();
  }
}
