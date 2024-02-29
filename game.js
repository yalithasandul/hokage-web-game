//run sound
var runSound = new Audio("sounds/run.mp3");
runSound.loop = true;

//jump sound
var jumpSound = new Audio("sounds/jump.mp3");

//dead sound
var deadSound = new Audio("sounds/dead.mp3");

//bomb blast sound
var blastSound = new Audio("sounds/bombBlastSound.mp3");

//background music
var backgroundMusic = new Audio("sounds/NINJAMainMenuSong.mp3");

var newScore = 0;


var jumpFrameNo = 1;
var player = document.getElementById("player");
var jumpWorkerId = 0;
var playerMarginTop = 450;

function keyCheck(event) {
    backgroundMusic.play()
    //runKey(enter)
    if (event.which == 13) {
        if (runWorkerId == 0) {
            runWorkerId = setInterval(run, 100);
            runSound.play();
            if (moveBackgroundWorkerId == 0) {
                moveBackgroundWorkerId = setInterval(moveBackground, 150);
                moveGroundWorkerId = setInterval(moveGround, 150);
                moveBlockWorkerId = setInterval(moveBlock, 150);
                scoreWorkerId = setInterval(updateScore, 500);
                createBlockWorkerId = setInterval(createBlock, 100);
                if (newScore => 100){
                    winWorkerId = setInterval(win, 0);
                }

            }

        }
    }
    //jumpKey(space)
    if (event.which == 32) {
        if (jumpWorkerId == 0) {
            clearInterval(runWorkerId);
            runWorkerId = -1;
            runSound.pause();

            jumpWorkerId = setInterval(jump, 150);
            jumpSound.play();
            if (moveBackgroundWorkerId == 0) {
                moveBackgroundWorkerId = setInterval(moveBackground, 150);
                moveGroundWorkerId = setInterval(moveGround, 150);
                moveBlockWorkerId = setInterval(moveBlock, 150);
                scoreWorkerId = setInterval(updateScore, 500);
                createBlockWorkerId = setInterval(createBlock, 100);
                if (newScore => 100){
                    winWorkerId = setInterval(win, 0);
                }
            }
        }
    }
}

//run command
var runFrameNo = 1;
var runWorkerId = 0;

function run() {
    if (runFrameNo == 10) {
        runFrameNo = 1;
        player.src = "ninja/png/Run__00" + runFrameNo + ".png";
        runFrameNo++;
    }
    else {
        player.src = "ninja/png/Run__00" + runFrameNo + ".png";
        runFrameNo++;
    }
}

//jump command
function jump() {
    //jumpFrameNo++;

    //fly

    if (jumpFrameNo <= 5) { // images 2-7
        playerMarginTop = playerMarginTop - 50;
        player.style.marginTop = playerMarginTop + "px";
    }

    //land

    if (jumpFrameNo >= 6) { // images 8-1
        playerMarginTop = playerMarginTop + 41.9;
        player.style.marginTop = playerMarginTop + "px";
    }

    if (jumpFrameNo == 11) {
        jumpFrameNo = 1;
        player.src = "ninja/png/Jump_" + jumpFrameNo + ".png";
        clearInterval(jumpWorkerId);
        runWorkerId = setInterval(run, 100);
        runSound.play();
        jumpWorkerId = 0
    }
    else {
        player.src = "ninja/png/Jump_" + jumpFrameNo + ".png";
        jumpFrameNo++;
    }
}

//Move Background
var backgroundId = document.getElementById("background");
var backgroundX = 0;
var moveBackgroundWorkerId = 0;

function moveBackground() {
    backgroundX = backgroundX - 20;
    backgroundId.style.backgroundPositionX = backgroundX + "px";
}

//Move Ground
var groundId = document.getElementById("ground");
var groundX = 0;
var moveGroundWorkerId = 0;

function moveGround() {
    groundX = groundX - 20;
    groundId.style.backgroundPositionX = groundX + "px";
}

//Score

var scoreId = document.getElementById("score");
var scoreWorkerId = 0;

function updateScore() {

    newScore++;
    scoreId.innerHTML = newScore;

}

//Create Block
var blockMarginLeft = 500;
var createBlockWorkerId = 0;
var blockId = 1;

function createBlock() {
    var block = document.createElement("div");
    document.getElementById("background").appendChild(block);
    block.className = "block";
    block.id = "block" + blockId;

    blockId++;

    var gap = Math.random() * (1000 - 550) + 550;

    blockMarginLeft = blockMarginLeft + gap;
    block.style.marginLeft = blockMarginLeft + "px";
}


//move Block
var moveBlockWorkerId = 0;

function moveBlock() {
    for (var i = 1; i <= blockId; i++) {
        var currentBlock = document.getElementById("block" + i);
        var currentBlockMarginLeft = currentBlock.style.marginLeft;
        var newBlockMarginLeft = parseInt(currentBlockMarginLeft) - 50;

        currentBlock.style.marginLeft = newBlockMarginLeft + "px";

        //alert(newBlockMarginLeft);
        //144 - 44;

        if (newBlockMarginLeft < 135 & newBlockMarginLeft > 0) {
            //alert(playerMarginTop)
            //282

            if (playerMarginTop > 320) {

                clearInterval(runWorkerId);
                runSound.pause();
                clearInterval(jumpWorkerId);
                jumpWorkerId = -1;
                clearInterval(scoreWorkerId);
                clearInterval(moveBackgroundWorkerId);
                clearInterval(moveGroundWorkerId)
                clearInterval(blockId);
                clearInterval(moveBlockWorkerId);
                player.style.marginTop = "460px";
                blastSound.play();
                deadWorkerId = setInterval(dead, 100);
                //deadSound.play();
                //alert("Dead!");
            }
            if (newScore == 100){
                
            }
        }

    }
}

//player dead

var deadWorkerId = 0;
var deadFrameNo = 1;

function dead() {
    deadFrameNo++;

    if (deadFrameNo == 11) {
        deadFrameNo = 10;

        player.style.marginTop = "460px";
        document.getElementById("endscreen").style.color = "black";
        document.getElementById("endScore").style.color = "red";
        document.getElementById("btn").style.color = "white";
        document.getElementById("btn").style.backgroundColor = "rgba(110, 110, 110, 0.637)";
        document.getElementById("endScore").innerHTML = newScore;
        document.getElementById("score").style.color = "transparent";
    }

    player.src = "ninja/png/Dead__" + deadFrameNo + ".png"
}

function reload() {
    location.reload();
}

//function finish() {
//    if (newScore == 100) {
//        clearInterval(runWorkerId);
//        runSound.pause();
//        clearInterval(jumpWorkerId);
//        jumpWorkerId = -1;
//        clearInterval(scoreWorkerId);
//        clearInterval(moveBackgroundWorkerId);
//        clearInterval(moveGroundWorkerId)
//        clearInterval(blockId);
//        clearInterval(moveBlockWorkerId);
//        player.style.marginTop = "460px";
//    }
//}

//player win

var winWorkerId = 0;
var winFrameNo = 1;

function win() {

    if(newScore == 100){

        player.style.marginTop = "460px";
        document.getElementById("winscreen").style.color = "black";
        document.getElementById("winScore").style.color = "red";
        document.getElementById("btnwin").style.color = "white";
        document.getElementById("btnwin").style.backgroundColor = "rgba(110, 110, 110, 0.637)";
        document.getElementById("winScore").innerHTML = newScore;
        document.getElementById("score").style.color = "transparent";
        document.getElementById("won").style.color = "gold";
        clearInterval(runWorkerId);
        runSound.pause();
        clearInterval(jumpWorkerId);
        jumpWorkerId = -1;
        clearInterval(scoreWorkerId);
        clearInterval(moveBackgroundWorkerId);
        clearInterval(moveGroundWorkerId)
        clearInterval(blockId);
        clearInterval(moveBlockWorkerId);
        player.style.marginTop = "460px";
        player.src = "ninja/png/Idle__1.png"
    }


}
