const clock= document.getElementById('clock');
const date=document.getElementById('date')
setInterval( function (){
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000);

setInterval(function(){
    let get_date=new Date();
    date.innerHTML=get_date.toLocaleDateString();
});

