const form = document.querySelector(".form_type_search") as HTMLFormElement;
const content = document.querySelector(".content");
const result = document.querySelector(".content__result");
const error = document.querySelector(".content__error");
const spinner = document.querySelector(".spinner");

async function search(entity: string, entityId: string): Promise<Response> {
  return await fetch(`https://swapi.info/api/${entity}/${entityId}/`);
}

function renderResult(text: string): void {
  if (result && error) {
    result.textContent = text;
    error.textContent = "";
  }
}

function renderError(err: string): void {
  if (result && error) {
    error.textContent = err;
    result.textContent = "";
  }
}

function renderLoading(isLoading: boolean): void {
  if (spinner && content) {
    if (isLoading) {
      spinner.classList.add("spinner_visible");
      content.classList.add("content_hidden");
    } else {
      spinner.classList.remove("spinner_visible");
      content.classList.remove("content_hidden");
    }
  }
}

form.addEventListener("submit", async function submit(event: Event) {
  event.preventDefault();

  const entity = document.querySelector(
    ".form__select_type_entity",
  ) as HTMLSelectElement;

  const entityId = document.querySelector(
    ".form__input_type_entity-id",
  ) as HTMLInputElement;

  try {
    renderLoading(true);
    const res: Response = await search(entity.value, entityId.value);

    if (res.ok) {
      const data = await res.json();
      renderResult(data.name);
      console.log(data);
    } else {
      throw new Error(res.status.toString());
    }
  } catch (err: unknown) {
    renderError(`Error: ${err}`);
    console.error(`Error: ${err}`);
  }     finally {
    renderLoading(false);
  }
});
