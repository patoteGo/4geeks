const btn1 = document.querySelector('.iconos.op1')
const btn2 = document.querySelector('.iconos.op2')
const posts = document.querySelectorAll('.post')
const title = document.querySelectorAll('.post .title')
const text = document.querySelectorAll('.post .text')

btn2.addEventListener('click', ()=>{
 posts.forEach((post, index) => {
     post.classList.remove('col-4')
     post.classList.add('col-12')
     title[index].classList.add('active')
     text[index].classList.add('active')
 })
})

btn1.addEventListener('click', ()=>{
    posts.forEach((post, index) => {
    post.classList.add('col-4')
     post.classList.remove('col-12')
     title[index].classList.remove('active')
     text[index].classList.remove('active')
     
    })
})