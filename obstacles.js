class Cars{ //class to build the cars
    constructor(x, y, width, height, speed, direction){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.direction = direction;
        this.frameX = 0;
        this.frameY = 0;
        this.carType =(Math.floor(Math.random() * carPositionRight.length));
    }
    draw(){ //draw the cars
       //ctx1.fillStyle = "red";
        if(this.width > 95){
            if(this.direction === 'left'){
                ctx2.drawImage(bus, busPositionleft[0].x, busPositionleft[0].y, 310, 95, this.x, this.y, this.width, this.height) 
            }else{
                ctx2.drawImage(bus, busPositionRight[0].x, busPositionRight[0].y, 310, 95, this.x, this.y, this.width, this.height)
            }
        }
        //ctx1.fillRect(this.x, this.y, this.width, this.height);
        if(this.width <= 95){
        if(this.direction === 'left'){
            ctx2.drawImage(cars, carPositionleft[this.carType].x, carPositionleft[this.carType].y, 160, 80, this.x, this.y, this.width, this.height) 
        }else{
            ctx2.drawImage(cars, carPositionRight[this.carType].x, carPositionRight[this.carType].y, 160, 80, this.x, this.y, this.width, this.height)
        }}

        //ctx1.fillRect(this.x, this.y, this.width, this.height);

    }
    update(){ // start the movement
        this.x += this.speed * gameSpeed;
        if(this.speed > 0){
        if(this.x > canvas.width + this.width){ // put the cars back in the begin of the lane
            this.x = 0 - this.width;
            
        }}
        else{
            if(this.x < 0 - this.width){
                this.x = canvas.width + this.width;
            }
        }
    }
}

function initCars(){
 //first lane
    for( let i=0; i<1; i++){ // build the cars at first lane
        let x = i * 100;
        carsArray.push(new Cars(x, canvas.height - grid * 12.5 - 20, 95, 38, 1.3, 'right'));
    }
 //second lane
 for( let i=0; i<1; i++){ // build the cars at second lanes
    let x = i * 350;
    carsArray.push(new Cars(x, canvas.height - grid * 17 - 20, 90, 38, 2, 'right'));
    }
 //third lane
 for( let i=0; i<2; i++){ // build the cars at third lanes
    let x = i * 490;
    carsArray.push(new Cars(x, canvas.height - grid * 21.5 - 20, 80 * 2, 38, 1, 'right'));  
     }
    //fourth lane
    for( let i=0; i<2; i++){ // build the cars at fourth lane
    let x = i * 200;
    carsArray.push(new Cars(x, canvas.height - grid * 37.8 - 20, 95, 38, -1.7, 'left'));
    }
    //fifth lane
    for( let i=0; i<1; i++){ // build the cars at fifth lanes
        let x = i * 490;
        carsArray.push(new Cars(x, canvas.height - grid * 42.2 - 20, 80 * 2, 38, -1, 'left'));
    }
    //sixth lane
    for( let i=0; i<2; i++){ // build the cars at sixth lanes
    let x = i * 250;
    carsArray.push(new Cars(x, canvas.height - grid * 47 - 20, 90, 38, -1.9, 'left'));
    }
}

initCars();

function handleCars(){ //keep building the cars
    audio.play();
    audioChicken.play();
    for (let i=0; i <carsArray.length; i++){
        carsArray[i].update();
        carsArray[i].draw();
    }
    for (let i=0; i < carsArray.length; i++){
        if(collision(chicken, carsArray[i])){
            ctx4.drawImage(collisions, 0, 0, 100, 100, chicken.x - 20, chicken.y - 20, 150, 150);
            resetGame();

        }
    }
}