const openModalBtn = document.querySelector('#open-modal');
const closeModalBtn = document.querySelector('#close-modal');

const modalSpace = document.querySelector('#modal-space');
const dadSpace = document.querySelector('#dad-space');

const blocks = document.querySelectorAll('.draggable-block');


//обработчик события для клика мышки
dadSpace.addEventListener('mousedown', e=> {
    if(e.target.classList.contains('draggable-block')) {
        //active - добавление собственного поля оъекту для отслеживания состояния передвижения 
        //объекта
        e.target.active = true;
    }
} );

dadSpace.addEventListener('mousemove',  e => {
    blocks.forEach(block => {
        if(block.active) {
            block.style.left = e.pageY - dadSpace.offsetLeft + 'px';
            block.style.top = e.pageY - dadSpace.offsetTop + 'px';
        }
    })
});

document.body.addEventListener('mouseup', () =>{
    blocks.forEach(block =>{
        block.active = false;
    })
});


//цикл foreach - метод который передается в цикл
blocks.forEach(block => {

    const parentWidth = executePixels(getStyle(dadSpace, 'width'));
    const parentHeight = executePixels(getStyle(dadSpace, 'height'));
    const blockWidth = executePixels(getStyle(block, 'width'));
    const blockHeight = executePixels(getStyle(block, 'height'));
    block.style.left = getRandIt(0, parentWidth - blockWidth - 6) + 'px';
    block.style.top = getRandIt(0, parentHeight - blockHeight - 6) + 'px';
});

//получаем случайное число
function getRandIt(left, right) {
    return Math.floor(Math.random() * (right - left) + left);
}


//функция возвращает число ( значение )
function executePixels(value) {
    return +value.substring(0, value.indexOf('px'));
}

//массив всех свойств элемента
function getStyle(element, style) {
    return getComputedStyle(element)[style];
};