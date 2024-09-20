const textsTop = [
  "Hola buenas tardes!",
  "Carlos Sainz abandona ferrari!",
  "Recuerda sonreír y disfrutar del presente."
];

const textsBottom = [
  "Bienvenido al mundo del motor y la velocidad",
  "El hispano va a williams en la temporada 2026",
  "Que tengas una noche tranquila y reparadora."
];

let indexTop = 0;
let indexBottom = 0;

function changeText() {
  indexTop = (indexTop + 1) % textsTop.length;
  indexBottom = (indexBottom + 1) % textsBottom.length;
  document.querySelector('.celestebox').textContent = textsTop[indexTop];
  document.querySelector('.whitebox').textContent = textsBottom[indexBottom];
}

setInterval(changeText, 5000); // Cambia el texto cada 5 segundos