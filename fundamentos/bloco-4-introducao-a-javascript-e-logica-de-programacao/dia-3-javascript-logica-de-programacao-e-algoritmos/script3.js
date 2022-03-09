let array = ['java', 'javascript', 'python', 'html', 'css'];

let retorno = array.reduce(function (atual, proximo) {
  return atual.length > proximo.length ? atual : proximo;
});
console.log(retorno);