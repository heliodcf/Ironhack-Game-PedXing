// build the chicken thing

class Chicken{ // class to build the chicken element
    constructor(){
        this.spriteWidth = 250;
        this.spriteHeight = 250;
        this.width = 50;
        this.height = 50;
        this.x = 275;
        this.y = 530;
        this.moving = false;
        this.frameX = 0;
        this.frameY = 0;
      
    }
    update(){ // comands for keybord work
        //console.log('update');
        if(keys['ArrowUp']){
            if(this.moving === false){
                this.y -= grid;
                this.moving = true;
                this.frameX = 0;
                this.frameY = 1;
            }
        }

        if(keys['ArrowDown']){
            if(this.moving === false && this.y < canvas.height - this.height * 2){
                this.y += grid;
                this.moving = true;
                this.frameY = 0;
                }
            }
        

        if(keys['ArrowLeft']){
            if(this.moving === false && this.x > this.width){
                this.x -= grid;
                this.moving = true;
                this.frameY = 2;
                }
            }
        
        if(keys['ArrowRight']){
            if(this.moving === false && this.x < canvas.width - this.width * 2){
                this.x += grid;
                this.moving = true;
                this.frameY = 3;
                }
                }
        if (this.y < 0) scored();

        }
    
    draw(){ // draw the chicken
        ctx3.fillStyle = 'blue';
        //ctx3.fillRect(this.x, this.y, this.width, this.height);
        ctx3.drawImage(chichenSprite, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteHeight, this.spriteWidth, this.x, this.y, this.width, this.height);

    }
    walk(){
        if(this.moving === false) this.frameX = 1;
        else if (this.frameX === 1) this.frameX = 0;
    }
    

}
const chicken = new Chicken();