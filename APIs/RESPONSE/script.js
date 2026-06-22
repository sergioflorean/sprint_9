const form = document.querySelector(".form_type_search");
const content = document.querySelector(".content");
const result = document.querySelector(".content__result");
const error = document.querySelector(".content__error");
const spinner = document.querySelector(".spinner");
async function search(entity, entityId) {
    return await fetch(`https://swapi.info/api/${entity}/${entityId}/`);
}
function renderResult(text) {
    if (result && error) {
        result.textContent = text;
        error.textContent = "";
    }
}
function renderError(err) {
    if (result && error) {
        error.textContent = err;
        result.textContent = "";
    }
}
function renderLoading(isLoading) {
    if (spinner && content) {
        if (isLoading) {
            spinner.classList.add("spinner_visible");
            content.classList.add("content_hidden");
        }
        else {
            spinner.classList.remove("spinner_visible");
            content.classList.remove("content_hidden");
        }
    }
}
form.addEventListener("submit", async function submit(event) {
    event.preventDefault();
    const entity = document.querySelector(".form__select_type_entity");
    const entityId = document.querySelector(".form__input_type_entity-id");
    try {
        renderLoading(true);
        const res = await search(entity.value, entityId.value);
        if (res.ok) {
            const data = await res.json();
            renderResult(data.name);
            console.log(data);
        }
        else {
            throw new Error(res.status.toString());
        }
    }
    catch (err) {
        renderError(`Error: ${err}`);
        console.error(`Error: ${err}`);
    }
    finally {
        renderLoading(false);
    }
});
export {};
