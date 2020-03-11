let who = ['the dog','my granma','his turtle','my bird']
let what = ['eat','pissed','crushed','broked']
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying']


const randomWho = who[Math.floor(Math.random() * who.length)]
const randomWhat = what[Math.floor(Math.random() * what.length)]
const randomWhen = when[Math.floor(Math.random() * when.length)]

let excuse = document.querySelector('#excuse')

excuse.innerHTML = randomWho + ' ' + randomWhat + ' ' + randomWhen
