let imagem = document.querySelector('#image')
let button = document.querySelector('#forma')
let situacao = document.querySelector('#situation')
let index = 1 

const listaimagens = []
for (let i = 0; i < 6; i++) {
    listaimagens.push(`./assets/img/naruto${i}.png`)
}
const listamodos = ['Chakra da Kyuubi', 'Manto de 1 cauda','Manto de 4 caudas', 'Sennin', 'Kurama','Rikudou Sennin']

function mudar(){
    imagem.src = `${listaimagens[index]}`
    situacao.innerHTML = `Modo: ${listamodos[index]}` 
    index++ 
    if(index > 5){
        index = 0
    }
    
}

button.addEventListener('click', mudar)
