// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed* dt;
    //repeat the movement of the enemies
    if(this.x >= 550){
        this.x = -100;
        this.speed = Math.floor((Math.random() * 100) + 150);
    }
    //if condition to state what happen if the character hit the enemy
    if (player.x < this.x +70 &&
        player.x +30 > this.x &&
        player.y < this.y + 25 &&
        player.y +30 > this.y)
    {
		//to resrart the game from the begin
		allEnemies.forEach(function(item){
			item.x= -100;
		});
        player.x = 200;
        player.y= 400;
    }
};



// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x , y ) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};
Player.prototype.update = function () {

  if(this.x >= 400){
      this.x=405;
  }
  if(this.x <=10){
      this.x =0;
  }
  if (this.y >=400){
      this.y =400;
  }
//if your reach the river
  if (this.y <= 0){
	  alert('Congratulation you have reached');
      this.y = 400;
	  
  }

};
Player.prototype.handleInput =function (keys) {
    switch (keys){
        case 'left':
            this.x -= 100;
            break;
        case 'up':
            this.y -= 80;
            break;
        case 'right':
            this.x += 100;
            break;
        case 'down':
            this.y += 80;
    }


};
Player.prototype.render= function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies =[];
var enemy;
var posY= [60,150,230,310];
posY.forEach(function (y) {
    enemy = new Enemy(-100,y,Math.floor((Math.random() * 100) + 100));
    allEnemies.push(enemy);
});
// Place the player object in a variable called player
var player = new Player(200,400);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
