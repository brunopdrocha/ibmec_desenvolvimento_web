var primeira = 12;
let segunda = "casa ";
const terceira = ["casa", "banana", 2];
var quarta;


console.log("primeira " + primeira);
console.log("segunda " + segunda);

segunda += "amarela";
console.log("Segunda " + segunda);

console.log("terceira " + terceira);


console.log("quarta " + quarta);
 

const vetor =[1,2,3];
console.log(vetor);

vetor.push(4);
console.log(vetor);

vetor.pop();
console.log(vetor);

console.log(vetor.length);

quarta = {
            primeira : 1,
            segunda : 'tudo'
            };
console.log("quarta" + quarta);
console.log("quarta primeira " + quarta.primeira);

function funcao(entrada){
  return entrada +2;
}

console.log(funcao(2));
console.log(funcao("3"));

const funcao2=function(entrada){
  return entrada +3;
}

console.log(funcao2(2));
console.log(funcao2("3"));

const seta =(entrada) =>{
  return entrada + 4;
}
console.log(seta(2));
console.log(seta("3"));

const outra_seta =(entrada) =>  entrada + 5; 
console.log(outra_seta(2));
console.log(outra_seta("3"));