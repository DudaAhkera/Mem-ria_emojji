const emojis = [
    "🥰",
    "🥰",
    "😘",
    "😘",
    "😁",
    "😁",
    "🤔",
    "🤔",
    "😤",
    "😤",
    "🥸",
    "🥸",
    "🤭",
    "🤭",
    "🥳",
    "🥳"
];
let openCards = [];

let shuffleEmojis = emojis.sort(()=>(
    Math.random() 
    > 0.5 ? 2 : -1));

for(let i = 0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}
//abrir somente duas posicões
function handleClick () {
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
        }
    if (openCards.length === 2 ){
        setTimeout(checkMatch, 500)
    }
}
//comparar os vetores das cartas
function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    //resetar cartas salvas na memória
    openCards = []; 

    //reiniciar jogo depois de virar todas as cartas
    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Você venceu!")
    }
}
//disparar som (certo ou errado) ao clicar nas cartas
let certo = getElementById("somCerto");
let errado = getElementById("somErrado");

function virarCarta() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
      certo.play();
      // Lógica para virar a carta correta
    } else {
      errado.play();
      // Lógica para virar a carta errada
    }
  }

