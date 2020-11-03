/** comentário
 *  multi-linha */
//comentário de uma linha
/*
Declarando variáveis
var nome = "Giovane Reis";
var n1 = 38;
var n2 = 10;
var frase = "Japão é o melhor time do mundo";

//alert("Bem vindo " + nome + "anos");
//alert(idade + idade2);
console.log(nome);
console.log( n1 * n2);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());
*/

//Arrays
/*
var lista = ["maçã", "pera","uva"];
alert(lista[1]);
lista.push("abacate");
lista.pop("uva");
alert(lista[0]);
*/

//dicionários
/*
var frutas = [
    {nome:"maçã", cor:"vermelha"},
    {nome:"uva", cor:"roxa"}
];
console.log(frutas);
alert(frutas[1].nome);
*/

//condicionais
/*
var idade = prompt("Qual a sua idade?");
if( idade >= 18){
    alert("Maior de idade!");
}else{
    alert("Menor de idade!");
}
*/
//laços de repetição
//var count = 0;
/*
while( count <= 5){
    console.log(count);
    count++;
}*/
/*
for( count = 0 ; count <= 5 ; count++ ){
    console.log(count);
}*/
/*
var d = new Date();
console.log( d.getHours() + 
    ":" + d.getMinutes() +
    ":" + d.getSeconds() );
    console.log(d.getDate() + "/" +
     (d.getMonth()+1));
     */

     //trabalhando com funções

/*
     function soma(n1 , n2){
        return n1 + n2;
     }

     alert( soma(5,5) );
     */
/*

     function validarIdade(idade){
        if( idade >= 18 ){
            return "Maior de idade";
        }else if( idade > 0 ){
            return "Menor de idade";
        }else{
            return "Estado embrionário!";
        }
     }


     alert( 
         validarIdade( 
             prompt("Digite sua idade: ")
          )
     
     );

*/


function processar(){
    document.getElementById("agradecimento")
    .innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar(){
   // window.open("https://digitalinnovation.one/"); //em aba adicional
    window.location.href = "https://digitalinnovation.one/" //na mesma aba
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Trocou o texto!";
    elemento.innerHTML = "Trocou o texto!";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse para mudar o texto.";
    elemento.innerHTML = "Passe o mouse para mudar o texto.";
}

function load(){
    alert("Página carregada!");
}

function change(elemento){
    alert(elemento.value);
}