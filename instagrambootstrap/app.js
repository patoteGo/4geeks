const btn1 = document.querySelector('.iconos.op1')
const btn2 = document.querySelector('.iconos.op2')
const posts = document.querySelectorAll('.post')

btn2.addEventListener('click', ()=>{
 posts.forEach(post => {
     post.classList.remove('col-4')
     post.classList.add('col-12')
 })
})

btn1.addEventListener('click', ()=>{
    posts.forEach(post => {
    post.classList.add('col-4')
     post.classList.remove('col-12')
    })
})