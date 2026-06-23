import { type ValidationConfig } from "../types/types.js";

export class FormValidator {
  private config: ValidationConfig;
  private formElement: HTMLFormElement;
  private inputList: HTMLInputElement[];
  private buttonElement: HTMLButtonElement;

  constructor(config: ValidationConfig, formElement: HTMLFormElement) {
    this.config = config;
    this.formElement = formElement;

    this.inputList = Array.from(
      this.formElement.querySelectorAll(this.config.inputSelector),
    );
    this.buttonElement = this.formElement.querySelector(
      this.config.submitButtonSelector,
    ) as HTMLButtonElement;
  }

  private showInputError(
    inputElement: HTMLInputElement,
    errorMessage: string,
  ): void {
    const errorElement = this.formElement.querySelector(
      `#${inputElement.id}-error`,
    ) as HTMLElement;

    inputElement.classList.add(this.config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this.config.errorClass);
  }

  private hideInputError(inputElement: HTMLInputElement): void {
    const errorElement = this.formElement.querySelector(
      `#${inputElement.id}-error`,
    ) as HTMLElement;

    inputElement.classList.remove(this.config.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this.config.errorClass);
  }

  private checkInputValidity(inputElement: HTMLInputElement): void {
    if (!inputElement.validity.valid) {
      this.showInputError(inputElement, inputElement.validationMessage);
    } else {
      this.hideInputError(inputElement);
    }
  }

  private hasInvalidInput(): boolean {
    return this.inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  private disableSubmitButton(): void {
    this.buttonElement.classList.add(this.config.inactiveButtonClass);
    this.buttonElement.disabled = true;
  }

  private enableSubmitButton(): void {
    this.buttonElement.classList.remove(this.config.inactiveButtonClass);
    this.buttonElement.disabled = false;
  }

  private toggleButtonState(): void {
    if (this.hasInvalidInput()) {
      this.disableSubmitButton();
    } else {
      this.enableSubmitButton();
    }
  }

  private setEventListeners(): void {
    this.toggleButtonState();

    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this.checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  }

  public resetValidation(): void {
    this.toggleButtonState();
    this.inputList.forEach((input) => {
      this.hideInputError(input);
    });
  }

  public enableValidation(): void {
    this.formElement.addEventListener("submit", (evt: SubmitEvent) => {
      evt.preventDefault();
    });

    this.setEventListeners();
  }
}
