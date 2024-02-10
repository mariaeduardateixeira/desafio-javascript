const form=document.querySelector('#form');
const resultado = document.querySelector('.resultado')
const inputNome = form.querySelector('#nome');
const adicionarBtn = form.querySelector('#adicionar');
const removerBtn = form.querySelector('#remover');
const mostrarArrayBtn = form.querySelector('#mostrarArray');


const nomes=[];

function adicionar(evento){
  evento.preventDefault();

    nomes.push({
      nome: inputNome.value
    })
    console.log(nomes);
    atualizarResultado();

  }

function remover(){
  nomes.pop();
  console.log(nomes);
  atualizarResultado();
}

function atualizarResultado() {
  resultado.innerHTML = '';
  nomes.forEach(item => {
    resultado.innerHTML += `<p>${item.nome}</p>`;
  });
}

function mostrarArray(){
  atualizarResultado();
}

form.addEventListener('submit', adicionar);
removerBtn.addEventListener('click', function(){
  remover();
  mostrarArray();
});
