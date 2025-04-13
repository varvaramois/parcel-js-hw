import { Content } from "./modules/content";
Content();
import { Message } from "./modules/message";

const btn = document.createElement("button");
btn.classList.add("btn");
btn.textContent = "Більше котів";
document.body.appendChild(btn);

btn.addEventListener("click", Message);
