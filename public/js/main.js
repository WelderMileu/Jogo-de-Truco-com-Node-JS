'use strict';

const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const temp1 = document.getElementById("temp1").value;
const temp2 = document.getElementById("temp2").value;
const pontos = document.getElementById("pontos");
const pontos2 = document.getElementById("pontos2");
const queda2 = document.getElementById("queda2");

let points = 0;
let queda11 = 0;
let points2 = 0;
let queda12 = 0;

const p2 = () => {
	points +=2;
	pontos.innerHTML = points;
	if (points >= 10) {
		alert("Passou o limit");
		queda11 ++;
		queda1.innerHTML = queda11;
		points = 0;
		pontos.innerHTML = 0;
	}
}

const p4 = () => {
	points +=4;
	pontos.innerHTML = points;
	if (points >= 10) {
		alert("Passou o limit");
		queda11 ++;
		queda1.innerHTML = queda11;
		points = 0;
		pontos.innerHTML = 0;
	}
}

const p2n = () => {
	points -=2;
	pontos.innerHTML = points;
}

const p4n = () => {
	points -=4;
	pontos.innerHTML = points;
}
// Usuarios 2
const p12 = () => {
	points2 +=2;
	pontos2.innerHTML = points2;
	if (points2 >= 10) {
		alert("Passou o limit");
		queda12 ++;
		queda2.innerHTML = queda12;
		points2 = 0;
		pontos2.innerHTML = 0;
	}
}

const p14 = () => {
	points2 +=4;
	pontos2.innerHTML = points2;
	if (points2 >= 10) {
		alert("Passou o limit");
		queda12 ++;
		queda2.innerHTML = queda12;
		points2 = 0;
		pontos2.innerHTML = 0;
	}
}

const p12n = () => {
	points2 -=2;
	pontos2.innerHTML = points2;
}

const p14n = () => {
	points2 -=4;
	pontos2.innerHTML = points2;
}
	
const users = (e) => {
	event.preventDefault(e);
	op1.innerHTML = temp1;
	op1.style.color = "rgba(127,127,127)";
	op2.innerHTML = temp2;
	op2.style.color = "rgba(127,127,127)";
}