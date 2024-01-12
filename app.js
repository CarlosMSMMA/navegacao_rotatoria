const container = document.querySelector('.container')
const abrir = document.querySelector('#fechado')
const fechar = document.querySelector('#aberto')

abrir.addEventListener('click', () =>{
    container.classList.add('mostrar-nav')
    abrir.style.display = 'none'
    fechar.style.display = 'block'
})

fechar.addEventListener('click', () =>{
    container.classList.remove('mostrar-nav')
    abrir.style.display = 'block'
    fechar.style.display = 'none'
})