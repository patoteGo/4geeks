const end = 5600
const contador = document.querySelector('.num')
let num = 1
setInterval(() => {
    contador.innerHTML = num   
    num++
}, 50)

