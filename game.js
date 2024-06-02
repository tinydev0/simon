// $("document").on("keypress",function () {
//    $("h1").text= ("level 1");
// //    nextSequence();
// });

// let randomColor = ["blue","red","yellow","green"];
// let gamePattern = [];
// let userClickedPattern = [];  

// // step1:  create new pattern
//         function nextSequence(){
//         let randomNumber = Math.floor((Math.random()*4));
//         let randomChoosenColor = randomColor[randomNumber];
//         gamePattern.push(randomChoosenColor);
//         playSound(randomChoosenColor);
//         }



//         // step 2: show sequence to the user with animation and sound
// // function nextSequence(){
// // let randomNumber = Math.floor((Math.random()*4));
// // let randomChoosenColor = randomColor[randomNumber];
// // gamePattern.push(randomChoosenColor);
// // let audio = Audio("./sound/"+randomChoosenColor+".mp3");
// // audio.play();
// // }

// // step 3: check which button/color is pressed
// $("btn").click(function(){
//     var userChosenColour = $(this).attr("#");
//     userClickedPattern.push(userChosenColour);
//     playSound(userChosenColour);
//     animatePress(userChosenColour)
// })

// // step 4: add sounds to button clicks
// function playSound(name){
//     let audio = Audio("./sound/"+name+".mp3");
//     audio.play();
// }

// // step 5: add animations to user clicks
// function animatePress(currentColor){
//     $(".btn").click(function(){
//         $(".btn").addClass("pressed");
//         setTimeout(() => {
//             $(".btn").removeClass("pressed");
//         }, 100);
//     })
// }

// // step 6:start the game





// // step 7: check the user answer against the original sequence.










// // step 8: game over 





















// step 9:restart the game.



let randomColor = ["blue","red","yellow","green"];
let gamePattern = [];
let userClickedPattern = [];  

//entry point.
$(document).on("keypress",function(){
    $("h1").text("Level 1");
    let randomGeneratedSequence = nextSequence();
    console.log(randomGeneratedSequence);
    for (let j = 0; j < randomGeneratedSequence.length; j++) {
            (function (j) {
              setTimeout(function () {
                pressButton(randomGeneratedSequence[j]);
                playSound(randomGeneratedSequence[j]);
              }, 1000 * j);
            })(j);
        }
        // for(var j = 0;j<randomGeneratedSequence.length;j++){
            //     setTimeout( function () {
                //         playSound(randomGeneratedSequence[j]);}, 3000);
                // }   
                startGame();
            });
            
    
    function nextSequence(){
        for(let i = 0;i<4;i++){
            let randomNumber = Math.floor((Math.random()*4));
        let randomChoosenColor = randomColor[randomNumber];
        gamePattern.push(randomChoosenColor);
        // playSound(randomChoosenColor);
        // console.log(gamePattern);
    }
    return gamePattern;
}

// press button amimation.
function pressButton(buttonColor) {
    $("."+buttonColor).addClass("pressed");
    setTimeout(function (){
        $("."+buttonColor).removeClass("pressed");}, 200);
}

// play sound.
        function playSound(name){
                let audio = new Audio("./sounds/"+name+".mp3");
                audio.play();
            }
            

// $("."+gamePattern[randomChoosenColor]).on("",function(){
//     var blueAudio = new Audio('./sounds/blue.mp3');
//         blueAudio.play();   
        
// })












let userClickedPatternIndex = 0;

function startGame() {
    $(".blue").on("click", function() {
        userClickedPattern.push("blue");
        checkUserInput();
    });

    $(".green").on("click", function() {
        userClickedPattern.push("green");
        checkUserInput();
    });

    $(".red").on("click", function() {
        userClickedPattern.push("red");
        checkUserInput();
    });

    $(".yellow").on("click", function() {
        userClickedPattern.push("yellow");
        checkUserInput();
    });
}

function checkUserInput() {
    if (userClickedPattern[userClickedPatternIndex] === gamePattern[userClickedPatternIndex]) {
        playSound(userClickedPattern[userClickedPatternIndex]);
        pressButton(userClickedPattern[userClickedPatternIndex]);
        userClickedPatternIndex++;

        if (userClickedPatternIndex === gamePattern.length) {
            // The user has successfully completed the current level.
            // can add logic here to update the level and generate a new pattern.
            userClickedPatternIndex = 0;
            userClickedPattern = [];
        }
    } else {
        playSound("wrong");
        pressButton(userClickedPattern[userClickedPatternIndex]);
        changeBg();

        // The user has entered an incorrect input.
        //  add logic here to reset the game or allow the user to try again.
        userClickedPatternIndex = 0;
        userClickedPattern = [];
    }
}














// function startGame() {
//     $(".blue").on("click",function(){
//         userClickedPattern.push("blue");
//         if (userClickedPattern[0] === gamePattern[0]) {
//             playSound(blue);
//             pressButton(blue);
//         }
//         else{
//             playSound("wrong");
//             pressButton(blue);
//        changeBg();
//         }
//     });
//         $(".green").on("click",function(){
//             userClickedPattern.push("green");
//             if (userClickedPattern[0] === gamePattern[0]) {
//                 playSound(green);
//                 pressButton(green);
//             }
//             else{
//                 playSound("wrong");
//                 pressButton(green);
//                 changeBg();
//             }
//     });
//         $(".red").on("click",function(){
//             userClickedPattern.push("red");
//             if (userClickedPattern[0] === gamePattern[0]) {
//                 playSound(red);
//                 pressButton(red);
//             }
//             else{
//                 playSound("wrong");
//                 pressButton(red);
//               changeBg();
//             }
//         });
//         $(".yellow").on("click",function(){
//             userClickedPattern.push("yellow");
//             if (userClickedPattern[0] === gamePattern[0]) {
//                 playSound(yellow);
//                 pressButton(yellow);
//             }
//             else{
//                 playSound("wrong");
//                 pressButton(yellow);
//              changeBg();
//             }
//           }
//         );
    
// }

// function changeBg() {
//     $("body").addClass("game-over");
//     setTimeout(function (){
//         $("body").removeClass("game-over");}, 200);
// }
























// $("button").on("click",function(){
    //     const buttonId = $(this).attr("id");
//    userClickedPattern.push(buttonId);
//    if (userClickedPattern[0] === gamePattern[0]) {
//     playSound(buttonId);
//     pressButton(buttonId);
//    }
//    else{
//     playSound(wrong);
//     pressButton(buttonId);
//     function changeBg() {
//         $("body").addClass("game-over");
//         setTimeout(function (){
//             $("body").removeClass("game-over");}, 200);
//     }
//    }
// }); 
