setInterval(() => {
    d=new Date();
    livehour=d.getHours();
    liveminute=d.getMinutes();
    livesecond=d.getSeconds();

     thour = (30*livehour+liveminute/2);
     tminute = 6*liveminute;
     tsecond = 6*livesecond;

    hour.style.transform = `rotate(${thour}deg)`;
    minute.style.transform = `rotate(${tminute}deg)`;
    second.style.transform = `rotate(${tsecond}deg)`;
    
},1000);

// document.getElementById("demo").innerHTML = "My First JavaScript";
// document.getElementById("demo").innerHTML = "My First JavaScript";