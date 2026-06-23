import type { PostData } from "../types/types.js";

export class Post {
  private title: string;
  private body: string;
  private templateSelector: string;
  private element: HTMLElement | null = null;

  constructor(data: PostData, templateSelector: string) {
    this.title = data.title;
    this.body = data.body;
    this.templateSelector = templateSelector;
  }

  private _getTemplate(): HTMLElement {
    const postElement = (
      document.querySelector(this.templateSelector) as HTMLTemplateElement
    ).content
      .querySelector(".post")!
      .cloneNode(true) as HTMLElement;

    return postElement;
  }

  generatePost(): HTMLElement {
    this.element = this._getTemplate();

    const titleElement = this.element.querySelector(
      ".post__title",
    ) as HTMLElement;
    const bodyElement = this.element.querySelector(
      ".post__body",
    ) as HTMLElement;

    titleElement.textContent = this.title;
    bodyElement.textContent = this.body;

    return this.element;
  }
}
