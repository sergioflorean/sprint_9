export class Popup {
  protected popupElement: HTMLElement;

  constructor(popupSelector: string) {
    this.popupElement = document.querySelector(popupSelector) as HTMLElement;
  }

  open() {
    this.popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this.handleEscClose);
  }

  close() {
    this.popupElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", this.handleEscClose);
  }

  private handleEscClose = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    this.popupElement.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      if (
        target.classList.contains("popup") ||
        target.classList.contains("popup__close")
      ) {
        this.close();
      }
    });
  }
}
