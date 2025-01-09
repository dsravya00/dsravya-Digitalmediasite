
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


let snd, snd1, snd2, snd3;
var mgr;

// define your p5.play sprites that you want to use in more than one scene.
var santa;

function preload() {
    // Preload sounds for the scenes
    snd = loadSound("assets/piano-merry-christmas.mp3"); // Sound for Page 

    snd1 = loadSound("assets/christmassong.mp3"); // Sound for Page 2

    snd2 = loadSound("assets/ho-ho-ho.mp3"); 
    // Sound for Page 3

    snd3 = loadSound("assets/jinglebell.mp3"); 
    // Sound for Page 1,2,3 - buttons 
    
  
    // Load Santa and gifts image
    santa = loadImage("assets/images/santa.png"); 

    gifts = loadImage("assets/images/gifts.png"); 

    santaclaus = loadImage('assets/images/santa-claus.png');
}


function setup() {
    createCanvas(1000, 700); 

    mgr = new SceneManager(); 

    // Add scenes
    mgr.addScene(page1);
    mgr.addScene(page2);
    // mgr.addScene(page4);
    // mgr.addScene(help);
    mgr.showNextScene(); 
}

function draw() {
    background(220);  

    image(santa);
    
    image(gifts);

    mgr.draw();
}


function mousePressed() {
 
    mgr.mousePressed();

}



function keyPressed() {
   
    switch (key) {
        case '1':
            mgr.showScene(page1); 
            break;
        case '2':
            mgr.showScene(page2); 
            break;
        case '3':
            mgr.showScene(help); 
            break;
        case '4':
            mgr.showScene(page4); 
            break;
    }

    // Dispatch the event to the SceneManager
    mgr.keyPressed();
}

// class drag
// {
//     constructor(x,y,d)
//     {
//         this.x = x;
//         this.y = y;
//         this.d = d;
//     }

//     display()
//     {
//         fill(200, 100, 100);
//         circle(this.x,this.y,this.d);
//     }

//     dragging()
//     {
//         if(mouseX >= this.x && mouseX <= this.x + this.d/2 && mouseY >= this.y && mouseY <= this.d/2 + this.y)
//         {
//             this.x = mouseX - this.d/2;
//             this.y = mouseY - this.d/2;
//         }
//     }
// }

class Candy
{
  constructor()
  {
    this.x = 890;
    this.y = 200;
    this.mouseOffsetX = 0;
    this.mouseOffsetY = 0;
    this.clicked = false;
  }

  display()
  {
    //candy 
    fill(255, 0, 0); // Red color for the candy body
    noStroke();
    ellipse(this.x, this.y, 80, 40); // Draw ellipse (candy body)
  
    // Left wrapper
    fill(255, 255, 0); // Yellow color for left wrapper
    rect(this.x - 50, this.y - 20, 20, 40); // Left wrapper rectangle
  
    // Right wrapper
    fill(255, 255, 0); // Yellow color for right wrapper
    rect(this.x + 30, this.y - 20, 20, 40); // Right wrapper rectangle
  }

  update()
  {
    if(dist(this.x, this.y, mouseX, mouseY) < 60 && mouseIsPressed && !this.clicked){
      this.clicked = true;
      this.mouseOffsetX = mouseX - this.x;
      this.mouseOffsetY = mouseY - this.y;
    } 

    if(!mouseIsPressed) {
      this.clicked = false;
    }

    if(this.clicked){
      this.x = mouseX - this.mouseOffsetX;
      this.y = mouseY - this.mouseOffsetY;
    }
  }
}




//purple wiht star circle 
class createCircle
{
  constructor()
  {
    this.x = 890;
    this.y = 100;
    this.mouseOffsetX = 0;
    this.mouseOffsetY = 0;
    this.clicked = false;
  }
display() {
  // Draw the circle
  fill("purple");
  noStroke(); 
  circle(this.x, this.y, 50); // given Circle with 50px diameter

  fill(0); 
  rect(this.x + 1, this.y - 10, 6, -20, 20, 20); 

  // Define the points of the star (8 points in total)
  let starSize = 25; // Half the size of the circle for the star
  let starPoints = [
    {x: this.x, y: this.y - starSize},               // Top point
    {x: this.x + starSize * 0.20, y: this.y - starSize * 0.20},  // Top-right point
    {x: this.x + starSize, y: this.y},               // Right point
    {x: this.x + starSize * 0.25, y: this.y + starSize * 0.25},  // Bottom-right point
    {x: this.x, y: this.y + starSize},               // Bottom point
    {x: this.x - starSize * 0.25, y: this.y + starSize * 0.25},  // Bottom-left point
    {x: this.x - starSize, y: this.y},               // Left point
    {x: this.x - starSize * 0.20, y: this.y - starSize * 0.20}   // Top-left point
  ];

  // Draw the star shape by connecting the points
  fill(255, 215, 0); // Gold color for the star
  noStroke();
  beginShape();
  for (let i = 0; i < starPoints.length; i++) {
    vertex(starPoints[i].x, starPoints[i].y);
  }
  endShape(CLOSE);
}


  update()
  {
    if(dist(this.x, this.y, mouseX, mouseY) < 25 && mouseIsPressed && !this.clicked){
      this.clicked = true;
      this.mouseOffsetX = mouseX - this.x;
      this.mouseOffsetY = mouseY - this.y;

    } 

    if(!mouseIsPressed) {
      this.clicked = false;
    }

    if(this.clicked){
      this.x = mouseX - this.mouseOffsetX;
      this.y = mouseY - this.mouseOffsetY;
    }
  }
}




class blueCircle
{
  constructor()
  {
      this.x = 890;
      this.y = 400;
      this.mouseOffsetX = 0;
      this.mouseOffsetY = 0;
      this.clicked = false;
  }

  display()
  {
      fill("#0000FF"); 
      circle(this.x, this.y, 60);
      
      stroke(0); // Outline color (black)
      strokeWeight(5); // Outline thickness

      fill("black"); 
      // Arc for the half-moon (semicircle)
      arc(this.x, this.y - 20, 20 * 2, 5 * 1, PI, 0, CHORD);
      arc(this.x + 10, this.y, 20 * 2, 5 * 1, PI, 0, CHORD);
      arc(this.x, this.y + 20, 20 * 2, 5 * 1, PI, 0, CHORD);

      fill("white"); 
      arc(this.x, this.y+20, 10 * 2, 5 * 1, PI, 0, CHORD);
      arc(this.x + 5, this.y-20, 10 * 2, 5 * 1, PI, 0, CHORD);
      arc(this.x-10, this.y+10, 10 * 2, 5 * 1, PI, 0, CHORD);
  }

  update()
  {
    if(dist(this.x, this.y, mouseX, mouseY) < 30 && mouseIsPressed && !this.clicked){
      this.clicked = true;
      this.mouseOffsetX = mouseX - this.x;
      this.mouseOffsetY = mouseY - this.y;
    } 

    if(!mouseIsPressed) {
      this.clicked = false;
    }

    if(this.clicked){
      this.x = mouseX - this.mouseOffsetX;
      this.y = mouseY - this.mouseOffsetY;
    }
  }
}




class createWreath
{
  constructor()
  {
    this.x = 890;
    this.y = 300;
    this.mouseOffsetX = 0;
    this.mouseOffsetY = 0;
    this.clicked = false;
  }

  display()
  {
      fill("green"); 
      ellipse(this.x, this.y, 80, 80); // bottom middle
     
      fill("white"); 
      ellipse(this.x,this.y, 38,38,100); 

      fill("red"); 
      //left/right - up/down, size 
      ellipse(this.x+30, this.y, 10, 10); //right middle
      ellipse(this.x+23, this.y-20, 10, 10); //top middle side
      ellipse(this.x+20, this.y+20, 10, 10); //bottom right side
      ellipse(this.x, this.y+30, 10, 10); // bottom middle
      ellipse(this.x-25, this.y+20, 10, 10); //left bottom side
      ellipse(this.x-30, this.y, 10, 10); // left middle side
      ellipse(this.x-23, this.y-20, 10, 10); //top left side middle
      ellipse(this.x, this.y-30, 10, 10); //top middle 
      
      fill("orange"); 
      ellipse(this.x+30, this.y-10, 9, 9);  //top middle right side
      ellipse(this.x+12, this.y-28, 9, 9);  //top right 
      ellipse(this.x-12, this.y-28, 9, 9);  //top left
      ellipse(this.x+13, this.y+30, 9, 9); //right bottom 
      ellipse(this.x-30, this.y+10, 9, 9); //left bottom side
      ellipse(this.x-15, this.y+30, 9, 9);  //bottom left side
      ellipse(this.x-30, this.y-12, 9, 9);  // top left side
      ellipse(this.x-28, this.y+10, 9, 9); //right side middle 
      ellipse(this.x+28, this.y+10, 9, 9); //right side middle 
  }

  update()
  {
    if(dist(this.x, this.y, mouseX, mouseY) < 40 && mouseIsPressed && !this.clicked){
      this.clicked = true;
      this.mouseOffsetX = mouseX - this.x;
      this.mouseOffsetY = mouseY - this.y;
    } 

    if(!mouseIsPressed) {
      this.clicked = false;
    }

    if(this.clicked){
      this.x = mouseX - this.mouseOffsetX;
      this.y = mouseY - this.mouseOffsetY;
    }
  }
}
