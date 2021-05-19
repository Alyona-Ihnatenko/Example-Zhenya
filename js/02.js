// Даны картинки. Привяжите к каждой картинке событие, 
// //чтобы по клику на картинку выводился ее alt or src

const imageEl=document.querySelectorAll('.img');

imageEl.forEach(imgEl=>{
    imgEl.addEventListener('click',()=>{
        console.log(imgEl.src);
        console.log(imgEl.alt);
    })
})


