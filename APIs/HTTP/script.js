// crea el marcado del post
function createPostMarkup(post) {
    return `
    <div class="post">
      <p class="post__title">${post.title}</p>
      <p class="post__text">${post.body}</p>
    </div>
  `;
}
// inserta el marcado en el DOM
function addPostToDOM(container, markup) {
    container.insertAdjacentHTML("afterbegin", markup);
}
async function createPost(newPost) {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                title: newPost.title,
                body: newPost.body,
            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        });
        const data = await res.json();
        addPostToDOM(document.querySelector(".container"), createPostMarkup(data));
    }
    catch (err) {
        console.log("Error:", err);
    }
}
// controlador de eventos de envío de formularios
const form = document.querySelector(".form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const form = event.currentTarget;
    const { title, text } = form.elements;
    createPost({
        title: title.value,
        body: text.value,
    });
});
export {};
