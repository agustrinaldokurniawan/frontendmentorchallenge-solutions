const inputContainerEl = document.getElementsByClassName('input')[0]
const inputEl = inputContainerEl.children[0]

inputEl.addEventListener('input', () => {
  inputEl.classList.remove('input-error')

  if (inputContainerEl.lastChild.nodeName === 'P') {
    inputContainerEl.removeChild(inputContainerEl.lastChild)
  }
})

inputEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    onSubmit()
  }
})

const onSubmit = () => {
  const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(inputEl.value)

  if (!emailValid) {
    const errorTextEl = document.createElement('p')
    errorTextEl.innerText = "Please provide a valid email address"
    errorTextEl.classList.add('text-danger')

    inputEl.classList.add('input-error')

    inputContainerEl.appendChild(errorTextEl)
  }
}