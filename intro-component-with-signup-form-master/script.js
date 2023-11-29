const form = document.forms['form']
const modalEl = document.getElementsByClassName('modal')[0]


const lottiePlayer = modalEl.children[0].children[0]
const formChildren = [].slice.call(form)

document.addEventListener('input', (e) => {
  if (e.target.className === 'error') {
    e.target.parentNode.removeChild(e.target.parentNode.children[0])
    e.target.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.lastChild)
  }
  e.target.classList.remove('error')
  e.target.style.color = '#000'
})
const regexMailAddress = /^\S+@\S+\.\S+$/

function validateField(type, value) {
  if (type === 'email') {
    return regexMailAddress.test(value)
  }
  return true
}

const removeErrorInputEl = (e) => {
  if (e.parentNode.children[0].nodeName === 'IMG') {
    e.parentNode.removeChild(e.parentNode.children[0])
  }

  if (e.parentNode.parentNode.lastChild.nodeName === '#text' || e.parentNode.parentNode.lastChild.nodeName === 'P') {
    e.parentNode.parentNode.removeChild(e.parentNode.parentNode.lastChild)
  }
}

const createInputErrorIconEl = () => {
  const inputErrorIconEl = document.createElement('img')
  inputErrorIconEl.src = 'images/icon-error.svg'
  inputErrorIconEl.classList.add('input-error-icon')
  inputErrorIconEl.alt = "Invalid"

  return inputErrorIconEl
}

const insertErrorInputEl = (e, inputErrorIconEl, inputErrorTextEl) => {
  e.classList.add('error')
  e.parentNode.insertBefore(inputErrorIconEl, e)

  e.parentNode.parentNode.append(inputErrorTextEl)
}

lottiePlayer.addEventListener('complete', () => {
  setTimeout(() => {
    modalEl.style.display = 'none'
  }, 100);
})

function onSubmit() {
  formChildren.forEach(e => {
    if (e.name) {
      if (!e.value) {
        removeErrorInputEl(e)
        const inputErrorTextEl = document.createElement('p')
        inputErrorTextEl.innerText = `${e.name.split('-').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ')} cannot be empty`
        inputErrorTextEl.classList.add('input-error-text')

        const inputErrorIconEl = createInputErrorIconEl()
        insertErrorInputEl(e, inputErrorIconEl, inputErrorTextEl)

      }
      if (e.value && !validateField(e.name, e.value)) {
        removeErrorInputEl(e)
        e.style.color = 'hsl(0, 100%, 74%)'
        const inputErrorTextEl = document.createElement('p')
        inputErrorTextEl.innerText = 'Looks like this is not an email'
        inputErrorTextEl.classList.add('input-error-text')

        const inputErrorIconEl = createInputErrorIconEl()

        insertErrorInputEl(e, inputErrorIconEl, inputErrorTextEl)
      }
    }
  });

  if (formChildren.filter(e => e.name).every(e => e.value && validateField(e.name, e.value))) {
    modalEl.style.display = 'flex'
    lottiePlayer.load("https://lottie.host/0fc70d8e-81ff-45de-aa4b-bb926f66ed21/ao3fTCyRRU.json")
    lottiePlayer.play()

    formChildren.map(e => {
      e.value = '';
      e.blur()
    })
  }
}