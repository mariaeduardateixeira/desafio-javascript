const form = document.querySelector('#form');

form.addEventListener('submit', function(event){
  event.preventDefault();

  const inputPeso = event.target.querySelector('#peso');
  const inputAltura = event.target.querySelector('#altura');

  const peso=Number(inputPeso.value);
  const altura=Number(inputAltura.value);

  if(!peso){
    setResultado('Peso inválido', false);
    return;
  }

  if(!altura){
    setResultado('Altura inválida',false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc=getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc})`;

  setResultado(msg, true);
});

function getImc(peso, altura){
  const imc = peso/altura ** 2;
  return imc.toFixed(2);
}

function getNivelImc(imc){
  
  if(imc<18.5){
    return 'Abaixo do peso';
  }
  
  if (imc >= 18.5 && imc <= 24.9){
    return 'Normal';
  }
  
  if (imc >= 25.1 && imc <= 29.9){
    return 'Acima do peso';
  }
  
  if(imc >= 30){
    return 'Obesidade';
  } 
  
}

function criaParagrafo(){
  const p = document.createElement('p');
  return p;
}

function setResultado(msg, isValid){
  const resultado = document.querySelector('.resultado');
 
  resultado.innerHTML = '';

  const p = criaParagrafo();

  if(isValid){
    p.classList.add('paragrafo-resultado');
  }else{
    p.classList.add('bad');
  }
  p.innerHTML=msg;
  resultado.appendChild(p);
}
