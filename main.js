let value = 0

const counter = document.getElementById('counter')
counter.innerHTML = value

function increment() {
  counter.innerHTML = ++value
}

function decrement() {
  counter.innerHTML = --value
}

const reset = () => {
  counter.innerHTML = 0
  value = 0
}
