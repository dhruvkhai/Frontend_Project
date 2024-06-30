const monthEl = document.querySelector(".month")
const dayEl = document.querySelector(".day")
const dateEl = document.querySelector(".date")
const yearEl = document.querySelector(".year")

const date = new Date()

const month = date.getMonth()
const day = date.getDay()

monthEl.innerText = date.tolocalestring("en",{month : "long"});

dayEl.innerText = date.toLocaleString("en",{day: "long"});

dateEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();