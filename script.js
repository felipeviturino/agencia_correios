const botaoenviar = document.getElementById('btn')
const res = document.getElementById('res')

botaoenviar.addEventListener('click', processar)
botaoenviar.addEventListener('mouseenter', entrou)
botaoenviar.addEventListener('mouseout', saiu)

function entrou() {
    botaoenviar.style.background = 'yellow'
    botaoenviar.style.color = 'black'
}

function saiu() {
    botaoenviar.style.background = 'green'
    botaoenviar.style.color = 'white'
}

function processar() {
    const txtn = document.getElementById('txtnome')
    const txti = document.getElementById('txtidade')


let nome = txtn.value
let idade = Number(txti.value)

if(nome == '' || txti.value == '')
 res.innerHTML = '[ERRO] Obrigatório preencher os dados!'
return 
}

let agora = new Date()
let hora = agora.getHours()
let diaSem = agora.getDay()

let saudacao = ''
if (hora < 12) {
    saudacao = 'Bom dia'
} else if (hora <=18) {
    saudacao = 'Boa tarde'
} else {
    saudacao = 'Boa noite'
}

let classe = ''
let classCSS = ''
if (idade < 16) {
    classe = 'Atendimento Recusado (Menor de idade desacompanhando'
    classCSS = 'recusado'
} else if (idade < 60) {
    classe = 'Fila comum'
    classCSS = 'aceito'
} else if (idade < 80) {
    classe = 'Fila prioritária'
    classCSS = 'prioritaria'
} else {
    classe = 'Fila Prioridade Especial (+80)'
    classCSS = 'especial'
}
