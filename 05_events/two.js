const sayDate = function(str){
    console.log(str, Date.now());
}

 const intervalID = setInterval(sayDate ,1000,"Hi")

 clearInterval(intervalID)