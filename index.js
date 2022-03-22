const a01 = document.querySelector("#a01")

a01.addEventListener("click", function (event) {
  event.target.classList.add("b01")
  event.target.addEventListener('animationend', function () {
    event.target.classList.remove('b01')
  }, { once: true })
})