type Post = {
  title: string;
  body: string;
};

// crea el marcado del post
function createPostMarkup(post: Post): string {
  return `
    <div class="post">
      <p class="post__title">${post.title}</p>
      <p class="post__text">${post.body}</p>
    </div>
  `;
}

// inserta el marcado en el DOM
function addPostToDOM(container: Element, markup: string): void {
  container.insertAdjacentHTML("afterbegin", markup);
}

async function createPost(newPost: Post): Promise<void> {
  try {
    const res: Response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        body: JSON.stringify({
          title: newPost.title,
          body: newPost.body,
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      },
    );

    const data: Post = await res.json();

    addPostToDOM(
      document.querySelector(".container") as HTMLElement,
      createPostMarkup(data),
    );
  } catch (err: unknown) {
    console.log("Error:", err);
  }
}

// controlador de eventos de envío de formularios
const form = document.querySelector(".form") as HTMLFormElement;
form.addEventListener("submit", function (event: SubmitEvent) {
  event.preventDefault();

  const form = event.currentTarget as HTMLFormElement;
  const { title, text } = form.elements as typeof form.elements & {
    title: HTMLInputElement;
    text: HTMLInputElement;
  };

  createPost({
    title: title.value,
    body: text.value,
  });
});
