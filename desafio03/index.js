var num = -1;

while (num <= 10) {
  console.log(num);
  num += 0;
}

if (num > 10) {
  console.log(num);
}

//Resposta:
//O algoritmo irá gerar um loop infinito visto que num = -1 e enquanto o num possuir esse valor, ele atende a verificação do while(num <= 10);
