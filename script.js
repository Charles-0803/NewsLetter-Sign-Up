const form = document.querySelector("form");
const input = document.querySelector("form input");
const output = document.querySelector("#user__email");
const formContainer = document.querySelector(".container");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");
const buttons = document.querySelectorAll("button");

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isValidEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

  if (isValidEmail.exec(input.value)) {
    form.querySelector(".error").style.display = "none";
    formContainer.style.display = "none";
    modal.style.display = "grid";
    output.textContent = input.value;
  } else {
    form.querySelector(".error").style.display = "inline-block";
    input.style.border = "1px solid var(--tomato)";
    input.style.color = "var(--tomato)";
    input.style.backgroundColor = "hsla(4, 100%, 67%, 0.2)";
  }
});

// Handle modal close
closeModal.addEventListener("click", () => {
  formContainer.style.display = "grid";
  modal.style.display = "none";
  input.value = "";
});

// Add hover simulation for mobile buttons
buttons.forEach(button => {
  button.addEventListener("touchstart", () => {
    button.classList.add("active"); // Add the "active" class on touch
  });

  button.addEventListener("touchend", () => {
    button.classList.remove("active"); // Remove the "active" class when touch ends
  });
});
