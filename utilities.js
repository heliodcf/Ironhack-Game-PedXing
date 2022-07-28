function animate(){
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    ctx4.clearRect(0, 0, canvas.width, canvas.height);
    ctx5.clearRect(0, 0, canvas.width, canvas.height);

    chicken.draw();
    chicken.update();
    handleCars();

    handleScoreBoard();

    requestAnimationFrame(animate);

  
   
}

animate();

//event listeners

window.addEventListener('keydown', function(e){ // keybord working
    keys =[];
    keys[e.key] = true;
    if (keys[37] || keys[38] || keys[39] || keys[40]){
        chicken.walk();
        //console.log('walk');


    }
})

window.addEventListener('keyup', function(e){
    delete keys[e.key];
    chicken.moving = false;

})

function scored(){ // gonna count the points
    score ++;
    gameSpeed += 0.05;
    chicken.x = 275;
    chicken.y = 530;
}

function handleScoreBoard(){
    ctx4.fillStyle = 'blank';
    ctx4.strokeStyle = 'blank';
    ctx4.font = '15px Verdade';
    ctx4.strokeText('Score', 466, 15);
    ctx4.font = '50px Verdade';
    ctx4.fillText(score, 470, 55);
    
    ctx4.font = '15px Verdade';
    ctx4.strokeText('High Score', 520, 15);
    ctx4.font = '50px Verdade';
    ctx4.fillText(highScore, 540, 55);
    
    ctx4.font = '15px Verdade';
    ctx4.strokeText('Collisions: ' + collisionsCount, 30,20);
    ctx4.strokeText('Game Speed: ' + gameSpeed.toFixed(1), 30,40);


}

//collision detection

function collision(first, second){
    return !(first.x > second.x + second.width || 
            first.x + first.width < second.x ||
            first.y > second.y + second.height ||
            first.y + first.height < second.y);
}

function resetGame(){
    chicken.x = 275;
    chicken.y = 530;
    if(score > highScore){
        highScore = score;
    }
    score = 0;
    collisionsCount ++;
    gameSpeed = 1;
    
}