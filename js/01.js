
// Дан ul, в нем несколько li. По нажатию на кнопку
// в конец ul будет добавляться новый li с текстом ''.
//Сделайте так, чтобы при клике на каждый li, ему в конец добавлялся '!'.
//Это должно работать и для вновь добавленных li.Задачу решите с помощью 
//делегирования(то есть событие должно быть навешано на ul) Показывал, попробывать вспомнить
const list=document.querySelector('.list');
const item=document.querySelector('.item');

list.addEventListener('click',addItem)

function addItem(event){
event.currentTarget.createElement('li');


}