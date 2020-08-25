document.onkeydown = function(e) {
    console.log("Key code is: ",e.keyCode)
    if(e.keyCode==38) {
        dino=document.querySelector('.dino');
        dino.classList.add('animateDino')
        setTimeout(() =>{
            dino.classList.remove('animateDino')
        },2000);
    if(e.keyCode==39) {
        dino=document.querySelector('.dino');
        dix=parseInt(windox.getComputedStyle(dino, null).getPropertyValue('left'));
        
    }
}
setInterval(() => {
   dino=document.querySelector('.dino');
   obstacle=document.querySelector('.obstacle');
   gameOver=document.querySelector('.gameOver');
   
   dx=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
   dy=parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
   ox=parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
   oy=parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
   offsetX=Math.abs(dx-ox);
   offsetY=Math.abs(dy-oy);
   if(offsetX<240 && offsetY<52) {
       gameOver.style.visibility= 'visible';
       obstacle.classList.remove('obstacleAni');
   }
}, 100);