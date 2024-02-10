const form = document.querySelector('#form');
const resultado = document.querySelector('.resultado');

function recebeEventoForm(evento) {
  evento.preventDefault();

  const numerosInteiros = [1,4,3,5,7];
   
  const numero = parseInt(form.querySelector('#numero').value); 

  let numeroEncontrado = false;
  for (let i = 0; i < numerosInteiros.length; i++) {
    if (numero === numerosInteiros[i]) {
      numeroEncontrado = true;
      break;
    }
  }

  if (numeroEncontrado) {
    resultado.innerHTML = `<p>O número ${numero} está presente no array.</p>`;
  } else {
    resultado.innerHTML = `<p>O número ${numero} não está presente no array.</p>`;
  }
}

form.addEventListener('submit', recebeEventoForm);
