//Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли свое содержимое на правильное количество символов. Сколько символов должно быть в инпуте, указывается в атрибуте data-length. Если вбито правильное количество, то граница инпута становится зеленой, если неправильное - красной


const inputEl=document.querySelectorAll('input');

inputEl.forEach(element=>{
        element.addEventListener('blur',onChangeColor);});


function onChangeColor(event){
   const textLength=this.dataset.length;
   if(event.currentTarget.value.length<=textLength){
       event.target.style.borderColor='green';
   }else {
       event.target.style.borderColor='red';
   }
 
}