let clava = document.getElementById('btn')
let res = document.getElementById('res')

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const operat = ['(', ')', '+', '-', '*', '/', '.' ]

function run() {
    let bro;
    let sp;

    if(eval(res.textContent) === Number.isFinite(Infinity)) {
        res.innerHTML = '0'
    } else{
        for (let i = 0; i < res.textContent.length; i++) {
            let calc = eval(res.textContent)
            console.log('calc', calc)
            res.innerHTML = calc
        }
    }
}

for (let i = 0; i < nums.length; i++) {
    clava.innerHTML += `<br><button onclick="get(this)" class="btn">${nums[i]}</button>`
}

for (let j = 0; j < operat.length; j++) {
    clava.innerHTML += `<br><button onclick="get(this)" class="btn">${operat[j]}</button>`
}

clava.innerHTML += `<button class="btn" id="back">Back</button>`
clava.innerHTML += `<button onclick="run()" class="btn-res">Вычислить</button>`


function get(e) {
    if(res.textContent === "0") {
        res.textContent = ''
    }
    else {
        res.textContent += e.textContent
    }
}

document.addEventListener('keydown',  function (event) {
    for (let i = 0; i < 10; i++) {
        if(event.key == `${i}` ) {
            res.textContent += i
        }
    }

    for (let j = 0; j < operat.length; j++) {
        if(event.key === operat[j]) {
            res.textContent += operat[j]
        }
    }

    if (event.key == 'Enter') {
        run()
    }

    if (event.key == 'Backspace') {
        del()
    }

    if (event.key == ':') {
        res.textContent += '/'
    }
})

function del() {
    if(res.textContent === "0") {
        res.textContent = ''
    }
    else {
        let numbs = res.textContent
        res.innerHTML = numbs.slice(0, -1)
    }
}

let back = document.getElementById('back')
back.addEventListener('click', del)
