
const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

console.log(randomColor());

const start = document.getElementById('start');
const stop = document.getElementById('stop');

const displayBg = function(){
    let color = randomColor();
    document.body.style.backgroundColor = color
}

let intervalId;
start.addEventListener('click', (e) => {
    intervalId = setInterval(displayBg, 1000);
})

stop.addEventListener('click', (e) => {
    clearInterval(intervalId);
}
)
