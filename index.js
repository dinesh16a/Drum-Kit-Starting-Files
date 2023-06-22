

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
  var butt=this.innerHTML;
    switch(butt){
        case "w":
            var audiow =new Audio("sounds/crash.mp3");
            audiow.play();
            break;
        
        case "a":
            var audioa =new Audio("sounds/kick-bass.mp3");
            audioa.play();
            break;
        
        case "s":
            var audio =new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
                var audio =new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
      
        default:console.log.apply("error");        
    }
        
});
}