const vagas = document.querySelector('.in1')
const alunos = document.querySelector('.in2')


setInterval(() => {
    let num = Math.round(Math.random() * 3)
    vagas.innerHTML = Number(vagas.innerHTML) - num

    
    alunos.innerHTML = Number(alunos.innerHTML) + num
}, 1000 * 10);