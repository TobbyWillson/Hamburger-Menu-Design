const btn = document.querySelector(".btn");
const menu = document.querySelector(".menu");
const loading = document.querySelector(".line");
const img = document.querySelector("img");

function open() {
  // setTimeout(() => menu.classList.toggle("show"), 3000);
  menu.classList.toggle("show");

  loading.classList.toggle("show");

  if (menu.classList.contains("show")) {
    img.src = "Images/X-icon.png";
  } else {
    img.src = "Images/Hamburger-Line.png";
  }
}

btn.addEventListener("click", open);

//////////
