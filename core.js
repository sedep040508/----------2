const time = 90000; // ms
const step = 1;

function outNum(num, elem){
    let i = document.querySelector('.num');
    n = 0;
    let t = Math.round(time/(time/step));
    let interval = setInterval(()=>{
        n = n + step;
        if (n == num){
            clearInterval(interval);
        }
        i.innerHTML = n;
    },t);
    
}

outNum(200, '.num');
