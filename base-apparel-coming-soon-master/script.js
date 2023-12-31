const emailInputContainerEl = document.getElementsByClassName("input-wrapper")[0];
const emailInputEl = document.getElementsByClassName('input')[0].children[0];

emailInputEl.addEventListener("input", (e) => {
  if (emailInputContainerEl.lastChild.nodeName === "P") {
    emailInputContainerEl.removeChild(emailInputContainerEl.lastChild);
    emailInputEl.removeAttribute("status");
    emailInputEl.parentNode.removeChild(emailInputEl.nextSibling);
  }
});

const onSubmit = () => {
  const valid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(
    String(emailInputEl.value)
  );
  if (!valid) {
    emailInputEl.setAttribute("status", "invalid");
    const errorEl = document.createElement("p");
    errorEl.innerText = "Please provide a valid email";
    emailInputContainerEl.appendChild(errorEl);

    const errorIcon = document.createElement("img");
    errorIcon.src = "images/icon-error.svg";
    errorIcon.classList.add('error-icon')
    emailInputEl.parentNode.insertBefore(errorIcon, emailInputEl.nextSibling);
  }
};
