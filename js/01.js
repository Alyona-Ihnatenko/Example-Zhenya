
// Дан ul, в нем несколько li. По нажатию на кнопку
// в конец ul будет добавляться новый li с текстом ''.
//Сделайте так, чтобы при клике на каждый li, ему в конец добавлялся '!'.
//Это должно работать и для вновь добавленных li.Задачу решите с помощью 
//делегирования(то есть событие должно быть навешано на ul) Показывал, попробывать вспомнить
const button=document.querySelector('.btn');
const list=document.querySelector('.list');

button.addEventListener('click',addItem);

function addItem(){

const addItem=document.createElement('li');
addItem.textContent='Женя'; 
list.appendChild(addItem);

}

list.addEventListener('click',addSign)

function addSign(event){
event.target.textContent= event.target.textContent
+'!';
}