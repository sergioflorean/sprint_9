interface SectionConfig<T> {
  renderer: (item: T) => void;
}

export class Section<T> {
  private renderer: (item: T) => void;
  private container: Element;

  constructor({ renderer }: SectionConfig<T>, containerSelector: string) {
    this.renderer = renderer;
    this.container = document.querySelector(containerSelector) as HTMLElement;
  }

  renderItems(items: T[]): void {
    items.forEach((item) => {
      this.renderer(item);
    });
  }

  addItem(element: HTMLElement): void {
    this.container.prepend(element);
  }
}
