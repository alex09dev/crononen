let s = 0
let min = 0
let h = 0

function increment(tipo) {
	if (tipo === "s" && s <= 59) s++
	if (tipo === "min" && min <= 59) min++
	if (tipo === "h") h++

	if (tipo === "s" && s > 59) s -= 60
	if (tipo === "min" && min > 59) min -= 60

	showNum()
}
//poner lo de arriba a la inversa(solo restar si es mayor a 0)
function decrement(tipo) {
	if (tipo === "s" && s >= 0) s--
	if (tipo === "min" && min >= 0) min--
	if (tipo === "h" && h > 0) h--

	if (tipo === "s" && s < 0) s += 60
	if (tipo === "min" && min < 0) min += 60

	showNum()
}

function showNum() {
	document.querySelector(".num").innerText = `${("0" + h).slice(-2)} : ${("0" + min).slice(
		-2
	)} : ${("0" + s).slice(-2)}`
}

function time() {
	if (s > 0) s--
	if (s <= 0 && min > 0) {
		s += 59
		min--
	}

	if (min <= 0 && h > 0 && s <= 0) {
		min += 59
		h--
		if (s === 0) s += 59
	}

	showNum()
}

showNum()

function start() {
	if (typeof control != "undefined") {
		clearInterval(control)
	}

	if (s === 0 && min === 0 && h === 0) return

	document
		.querySelector(".mas")
		.querySelectorAll("button")
		.forEach(function (btn) {
			btn.classList.toggle("invisible")
			btn.disabled = !btn.disabled
		})

	document
		.querySelector(".menos")
		.querySelectorAll("button")
		.forEach(function (btn) {
			btn.classList.toggle("invisible")
			btn.disabled = !btn.disabled
		})

	document.querySelector(".num").classList.add("scale")

	control = setInterval(time, 1000)
}

function stop() {
	if (typeof control != "undefined") {
		clearInterval(control)

		document
			.querySelector(".mas")
			.querySelectorAll("button")
			.forEach(function (btn) {
				btn.classList.toggle("invisible")
				btn.disabled = !btn.disabled
			})

		document
			.querySelector(".menos")
			.querySelectorAll("button")
			.forEach(function (btn) {
				btn.classList.toggle("invisible")
				btn.disabled = !btn.disabled
			})

		document.querySelector(".num").classList.remove("scale")
	}
}

function reset() {
	if (typeof control != "undefined") {
		clearInterval(control)
		control = undefined
	}
	document.querySelector(".num").innerText = `00 : 00 : 00`
	s = 0
	min = 0
	h = 0
	showButton()
}

function showButton() {
	document
		.querySelector(".mas")
		.querySelectorAll("button")
		.forEach(function (btn) {
			btn.classList.remove("invisible")
			btn.disabled = false
		})

	document
		.querySelector(".menos")
		.querySelectorAll("button")
		.forEach(function (btn) {
			btn.classList.remove("invisible")
			btn.disabled = false
		})

	document.querySelector(".num").classList.remove("scale")
}

//estrellas
const STARS_NUM = 100

function createStar() {
	const star = document.createElement("div")
	const dimension = Math.random() * (2 - 1) + 1

	star.className = "star"
	star.style.width = `${dimension}px`
	star.style.height = `${dimension}px`

	star.style.top = `${Math.random() * window.innerHeight}px`
	star.style.left = `${Math.random() * window.innerWidth}px`

	document.querySelector(".stars")?.append(star)
}

Array.from({ length: STARS_NUM }, () => {
	createStar()
})
