var buttoncolors = ["red","blue","green","yellow"];
var gamepattern = [];
var userClickedPattern = [];
var started = false ;
var level = 0;


// 

$(document).on("keypress",function(){
    if(!started){
        $("#level-title").text("Level "+level);
        nextSequence(); 
       started = true ;
    }

});

// 

$(".btn").on("click",function(){
    var userchosencolour = this.id;
    userClickedPattern.push(userchosencolour);
    playSound(userchosencolour);
    animatePress(userchosencolour);
    checkgpnucp(userClickedPattern.length-1);
});


// 

function nextSequence(){
    userClickedPattern=[];

    level++;
    $("#level-title").text("Level "+level);

    var randomNumber = Math.floor(Math.random()*4);
var randomchosencolor = buttoncolors[randomNumber];
gamepattern.push(randomchosencolor);
// $(document).ready(()=>{
//     setInterval(()=>{
        $("#"+ randomchosencolor).fadeIn(100);
        $("#"+ randomchosencolor).fadeOut(100);
        $("#"+ randomchosencolor).fadeIn(100);
//     }, 100);
// });
playSound(randomchosencolor);
}

// 

function playSound(name){
var soundbutton = new Audio("./sounds/"+name+".mp3");
soundbutton.play();
}


// 

function animatePress(currentColour){
 $("."+currentColour).addClass("pressed");
 setTimeout(function(){$("."+currentColour).removeClass("pressed");},100);
}


function checkgpnucp(currentLevel){

   if (userClickedPattern[currentLevel] === gamepattern[currentLevel]){
    // console.log("success");

      if(userClickedPattern.length === gamepattern.length){

    setTimeout(function(){nextSequence();},1000);

//   for(var i=userClickedPattern.length-1 ; i<userClickedPattern.length ; i--){
//     userClickedPattern.pop[i];
//   }
  
  }
 
   } 
  else{
    // console.log("wrong");
    var wrongsound = new Audio("sounds/wrong.mp3");
    wrongsound.play();
    $("body").addClass("game-over");
    setTimeout(function(){$("body").removeClass("game-over");},200);
    $("#level-title").text("Game Over,Press Any Key to Restart")
    StartOver();
  }
  
} 

function StartOver() {
      level = 0;
      gamepattern = [];
      started = false;
}












// for(var ne=0 ; ne < gamepattern.length ; ne++){
    //       for(var i=0 ; i<gamepattern.length ; i++){
    //     for(var j=0 ; j < gamepattern.length ; j++){
    //          if(gamepattern[i] == userClickedPattern[j])
    //          {
    //              console.log("correct");
                 
    //             }
    //         }  
    //     }
    //     nextSequence(); 
    // }