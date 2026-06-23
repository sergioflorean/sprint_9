import type { UserData } from "../types/types.js";

interface UserInfoSelectors {
  nameSelector: string;
  usernameSelector: string;
  emailSelector: string;
}

export class UserInfo {
  private nameElement: HTMLElement;
  private usernameElement: HTMLElement;
  private emailElement: HTMLElement;

  constructor({
    nameSelector,
    usernameSelector,
    emailSelector,
  }: UserInfoSelectors) {
    this.nameElement = document.querySelector(nameSelector) as HTMLElement;
    this.usernameElement = document.querySelector(
      usernameSelector,
    ) as HTMLElement;
    this.emailElement = document.querySelector(emailSelector) as HTMLElement;
  }

  getUserInfo(): UserData {
    return {
      name: this.nameElement.textContent || "",
      username: this.usernameElement.textContent || "",
      email: this.emailElement.textContent || "",
    };
  }

  setUserInfo({ name, username, email }: UserData): void {
    this.nameElement.textContent = name;
    this.usernameElement.textContent = username;
    this.emailElement.textContent = email;
  }
}
