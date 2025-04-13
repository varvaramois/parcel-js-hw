export function Content() {
  alert("Привіт! Вітаю вас на моєму потужному сайті");

  const text = document.createElement("h1");
  text.classList.add("title");
  text.textContent = "Породи котів";
  document.body.appendChild(text);

  const container = document.createElement("div");
  container.classList.add("container");

  for (let i = 0; i < 3; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
  }

  document.body.appendChild(container);
}
