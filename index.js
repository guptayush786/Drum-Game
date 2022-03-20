var htmlButton = document.querySelectorAll("button");

for(var i=0; i<htmlButton.length; i++){
    htmlButton[i].addEventListener("click" , function(){
        var clickButton = this.innerHTML;

        playSound(clickButton);
        clickAnimation(clickButton);
          
    });

}

document.addEventListener("keypress" , function(event){
    playSound(event.key);
    clickAnimation(event.key);
});

function playSound(key){

    switch(key){
        case "w":
                  var audio = new Audio("sounds/crash.mp3");
            audio.play();

            break;
        case "a":
               var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();

                break;  
         case "s":
                 var audio = new Audio("sounds/snare.mp3");
                    audio.play();
    
                    break;      
                
        case "d":
                 var audio = new Audio("sounds/tom-1.mp3");
                        audio.play();
        
                        break;
        case "j":
                 var audio = new Audio("sounds/tom-2.mp3");
                            audio.play();
            
                            break;
        case "k":
                 var audio = new Audio("sounds/tom-3.mp3");
                                audio.play();
                
                                break;
        case "l":
                 var audio = new Audio("sounds/tom-4.mp3");
                                    audio.play();
                    
                                    break;

                                    default:


    } 

}

function clickAnimation(keyPressed){
    document.querySelector("." + keyPressed).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + keyPressed).classList.remove("pressed");
    } , 100);
}


 