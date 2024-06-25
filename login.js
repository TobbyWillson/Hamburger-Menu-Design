const labels = document.querySelectorAll("label");

labels.forEach((label) => {
  label.innerHTML = label.textContent
    .split("")
    .map((letter, index) => `<span style="transition-delay: ${index * 50}ms"> ${letter} </span> `)
    .join("");
});

const inputs = document.querySelectorAll("form .section input");

/////////
const reg = document.querySelector(".click-reg");
const log = document.querySelector(".click-log");
const loginSect = document.querySelector(".login-sect");
const regSect = document.querySelector(".register-sect");
const thanks = document.querySelector(".thanks");
const passwords = document.querySelectorAll("#password");

function showEye() {
  passwords.forEach((pass) => {
    const parent = pass.parentElement;
    const eye = parent.querySelector("i");
    pass.addEventListener("input", () => {
      if (pass.value) {
        eye.classList.add("show");
      } else {
        eye.classList.remove("show");
      }
    });
  });
}
showEye();

function showPass() {
  const eyes = document.querySelectorAll(".section i");
  // console.log(eye);
  eyes.forEach((eye) => {
    const parent = eye.parentElement;
    const inputField = parent.querySelector(".section input");

    eye.addEventListener("click", () => {
      if (inputField.type === "password") {
        inputField.type = "text";
        eye.classList.remove("fa-eye");
        eye.style.color = "rgba(255, 255, 255, 1)";
        eye.classList.add("fa-eye-slash");
      } else {
        inputField.type = "password";
        eye.classList.remove("fa-eye-slash");
        eye.style.color = "rgba(255, 255, 255, 0.623)";
        eye.classList.add("fa-eye");
      }
    });
  });
}

showPass();

function regpage() {
  loginSect.classList.add("hide");

  regSect.classList.add("show");

  setTimeout(() => {
    thanks.classList.add("show");
  }, 500);

  setTimeout(() => {
    thanks.classList.remove("show");
  }, 10000);
}

reg.addEventListener("click", regpage);

///

////
////
////
const form = document.querySelector("form");

function submit(e) {
  e.preventDefault();
  const formData = new FormData(form);

  const email = formData.get("email");
  const password = formData.get("password");
  console.log(`Email: ${email}, Password: ${password}`);
}

form.addEventListener("submit", submit);

//////
const form2 = document.querySelector("#form2");
const passcheck = document.querySelector(".passcheck");
const created = document.querySelector(".acc-created");

function submit2(ev) {
  ev.preventDefault();
  const formData2 = new FormData(form2);

  const email = formData2.get("email");
  const username = formData2.get("username");
  const password = formData2.get("password");
  const password2 = formData2.get("password2");

  if (password2 !== password) {
    // return alert("Passwords doesn't match, check the passwords");

    passcheck.classList.add("show");

    setTimeout(() => {
      passcheck.classList.remove("show");
    }, 6000);
    return;
  } else {
    setTimeout(() => {
      created.classList.add("show");
    }, 100);

    setTimeout(() => {
      created.classList.remove("show");
    }, 8000);
  }

  console.log(`Email: ${email}, Username: ${username}, Password: ${password}, Confirmed Passowrd: ${password2}`);

  form2.reset();
}

form2.addEventListener("submit", submit2);
