let ms = 0
let s = 0
let min = 0
let h = 0

function cronometro() {
	if (ms > 99) {
		s++
		ms -= 100
	}
	if (s > 59) {
		min++
		s -= 60
	}
	if (min > 59) {
		h++
		min -= 60
	}

	document.querySelector(".num").innerText = `${("0" + h).slice(-2)} : ${("0" + min).slice(
		-2
	)} : ${("0" + s).slice(-2)} : ${("0" + ms).slice(-2)}`

	ms++
}

function start() {
	if (typeof control != "undefined") {
		clearInterval(control)
	}
	control = setInterval(cronometro, 10)
}

function stop() {
	if (typeof control != "undefined") {
		clearInterval(control)
	}
}

function reset() {
	if (typeof control != "undefined") {
		clearInterval(control)
	}
	document.querySelector(".num").innerText = `00 : 00 : 00 : 00`
	ms = 0
	s = 0
	min = 0
	h = 0
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

