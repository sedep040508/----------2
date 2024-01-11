(function(){

    let counter = document.querySelectorAll('.counter');
    let limit = 0; // Переменная, чтобы останавливать функцию, когда всё запустится.
    window.addEventListener('scroll', function(){  
      if( limit == counter.length ){ return; }
      
      for(let i = 0; i < counter.length; i++){
        let pos = counter[i].getBoundingClientRect().top; //Позиция блока, считая сверху окна
        let win = window.innerHeight - 40; // На 40 пикселей меньше, чем высота окна
        if( pos < win && counter[i].dataset.stop === "0" ){
          counter[i].dataset.stop = 1; // Останавливаем перезапуск счета в этом блоке
          let x = 0;
          limit++; // Счетчик будет запущен, увеличиваем переменную на 1
          let int = setInterval(function(){
            // Раз в 60 миллисекунд будет прибавляться 50-я часть нужного числа
            x = x + Math.ceil( counter[i].dataset.to / 50 ); 
            counter[i].innerText = x;
            if( x > counter[i].dataset.to ){
              //Как только досчитали - стираем интервал.
              counter[i].innerText = counter[i].dataset.to;
              clearInterval(int);
            }
          }, 60);
        }
      }
    });
    
    })();



    (function(){

      let counter = document.querySelectorAll('.counter_look');
      let limit = 0; // Переменная, чтобы останавливать функцию, когда всё запустится.
      window.addEventListener('scroll', function(){  
        if( limit == counter.length ){ return; }
        
        for(let i = 0; i < counter.length; i++){
          let pos = counter[i].getBoundingClientRect().top; //Позиция блока, считая сверху окна
          let win = window.innerHeight - 40; // На 40 пикселей меньше, чем высота окна
          if( pos < win && counter[i].dataset.stop === "0" ){
            counter[i].dataset.stop = 1; // Останавливаем перезапуск счета в этом блоке
            let x = 0;
            limit++; // Счетчик будет запущен, увеличиваем переменную на 1
            let int = setInterval(function(){
              // Раз в 60 миллисекунд будет прибавляться 50-я часть нужного числа
              x = x + Math.ceil( counter[i].dataset.to / 50 ); 
              counter[i].innerText = x;
              if( x > counter[i].dataset.to ){
                //Как только досчитали - стираем интервал.
                counter[i].innerText = counter[i].dataset.to;
                clearInterval(int);
              }
            }, 60);
          }
        }
      });
      
      })();



 const play = document.querySelector('.about__play')     
 const video = document.querySelector('.about_video video')

 play.addEventListener('click', () => {
  video.play();
  video.setAttribute('controls','controls')
  play.classList.add('about__play--hidden');
 })


const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}