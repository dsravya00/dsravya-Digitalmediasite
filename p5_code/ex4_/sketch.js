
//Exercise 4 - 

//2 different action methods to control and change the behavaior of the objects - 
//arrays 
// 


let pumpkins = []; // Array to hold pumpkin objects
let angle = 0; // Initialize angle for scaling
let count = 5; // Total number of pumpkins
let candies = []; // Array to hold candy objects
let blackfaces = []; // blackfaces
let disappearIndex = 0; 

let loX = [];
let loY = [];
let cirSize = [];
//colors ellipse 
let colorsR = [];
let colorsG = [];
let colorsB = [];
let speedX = [];
let speedY = [];

let frogs = []; // Array to hold frog objects
let frogCount = 12; // # of frogs 

function setup() {
  createCanvas(700, 600);
  background(150, 170, 20); // Background color
  rectMode(CENTER);
  noStroke();
  
  // Initialize pumpkins
  for (let i = 0; i < count; i++) {
    pumpkins.push(new Pumpkin(width / 6 + (i * 200) - (count * 40), height / 2)); // Spread out pumpkins
  }
  
  // Initialize candies
  for (let i = 0; i < count; i++) {
    candies.push(new Candy(random(width), random(height + 50, height + 100))); // Spawn candies above the canvas 
  }
  
  // Initialize colored circles
  for (let i = 0; i < count; i++) { 
    loX[i] = random(40, width - 40);
    loY[i] = random(40, height - 40);
    cirSize[i] = random(20, 50);
    colorsR[i] = random(255);
    colorsG[i] = random(255);
    colorsB[i] = random(255);
    speedX[i] = random(-2, 2); // Random speed for x
    speedY[i] = random(-2, 2); // Random speed for y
  }
  
  // Initialize frogs
  for (let i = 0; i < frogCount; i++) {
    frogs.push(new itFrogs(random(width), random(height))); // Random initial positions
  }
  
  // Initialize blackfaces
  for (let i = 0; i < 5; i++) {
    blackfaces.push(new Face(random(width), random(height), random(20, 100))); // Create blackfaces
  }
  

}

function draw() { 
  // Draw function of pumpkin, candy, balls with triangle 
  background(255, 204, 0); // Clear background each frame
  
  
  for (let pumpkin of pumpkins) {
    pumpkin.update(); // Update pumpkin position and state
    pumpkin.display(); // Display the pumpkin
  }
  
  for (let candy of candies) {
    candy.update(); // Update the candy's position
    candy.display(); // Display candy
  }
  
  for (let frog of frogs) {
    frog.update(); 
    frog.display(); 
    
  }
  
  for (let i = 0; i < blackfaces.length; i++) {
    blackfaces[i].update(); // Update the position of the face
    blackfaces[i].handleKeyPress(); // Handle rotation based on key press
    blackfaces[i].display();
     scale(1, 1);
    
    if (disappearIndex < blackfaces.length) {
      if (blackfaces[disappearIndex].shouldDisappear()) {
        disappearIndex++; // move to the next face
      }
    }
  }

  // Draw colorful circles
  for (let i = 0; i < count; i++) {
    push();
    translate(loX[i], loY[i]);
    fill(colorsR[i], colorsG[i], colorsB[i]);
    ellipse(0, 0, cirSize[i], cirSize[i]); // Circle

    // White eyes 
    fill(255);
    ellipse(-5, -15, 15, 15); // Left eye
    ellipse(10, -15, 15, 15); // Right eye

    // Black eyes 
    fill(0);
    ellipse(-5, -15, 5, 5); // Left pupil
    ellipse(10, -15, 5, 5); // Right pupil

    // Triangle inside the circle
    fill(0); // Black color for the triangle
    let triangleSize = cirSize[i] / 2; // Size of the triangle
    triangle(0, -triangleSize / 2, 
             -triangleSize / 2, triangleSize / 2, 
             triangleSize / 2, triangleSize / 2);
    pop();

    // Update positions
    loX[i] += speedX[i];
    loY[i] += speedY[i];
    
    // Check boundaries for circles
    if (loX[i] < cirSize[i] / 2 || loX[i] > width - cirSize[i] / 2) {
      speedX[i] = -speedX[i];
    }
    if (loY[i] < cirSize[i] / 2 || loY[i] > height - cirSize[i] / 2) {
      speedY[i] = -speedY[i];
    }
  }
} 

function keyPressed() {
  // Call the Blackface method when any key is pressed
  for (let blackface of blackfaces) {
    blackface.Blackface();
  }
}

// Pumpkin class
class Pumpkin {
  constructor(x, y) {
    this.x = x; // x position
    this.y = y; // y position
    this.scaleFactor = 1; // Scale factor
    this.wiggleSpeed = 0.10; // Speed of wiggling
    this.wiggleAmplitude = 5; // Amplitude of wiggling
    
    // Blink eyes 
    this.blinkTimer = 0; // Timer for blinking 
    this.blinkDuration = 80; // Duration for eyes to be closed
    this.eyeOpen = true; // Eye open state
    this.mouthOpen = true; // Mouth open state
  } 

  update() {
    // Update scaling based on angle
    this.scaleFactor = 1 + 0.2 * sin(angle); // Scaling effect
    angle += 0.01; // Increment angle for animation

    // Wiggling pumpkin 
    this.x += this.wiggleAmplitude * sin(frameCount * this.wiggleSpeed); // Wiggling side to side

    // Blinking eyes
    this.blinkTimer++;
    if (this.blinkTimer >= this.blinkDuration) {
      this.blinkTimer = 0; // Reset timer
      this.eyeOpen = !this.eyeOpen; // Toggle eye state
    }
  }

  display() { 
    push(); 
    translate(this.x, this.y);
    scale(this.scaleFactor); // Apply scaling

    // Pumpkin body
    fill(255, 120, 0); // Orange color
    noStroke(); // No outline for the pumpkin
    ellipse(0, -20, 100, 50); // Main body
    ellipse(0, 10, 115, 60); // Bottom part

    // Pumpkin head piece on top 
    fill(20, 200, 10); // Green color
    rect(0, -50, 20, 30); // Stem

    // Eyes of pumpkin 
    fill(0); // Black color for eyes
    if (this.eyeOpen) {
      triangle(-40, -10, -30, -20, -30, 0); // Left eye
      triangle(40, -10, 30, -20, 30, 0); // Right eye
    } else {
      // Closed eyes
      fill('red'); // red color - left eye
      rect(-30, -15, 10, 15); // left closed eye
      fill('#A251FA'); // purple color - right eye 
      rect(20, -15, 10, 15); // right closed eye
    }

    // Mouth
    arc(0, 10, 40, 35.5, 0, PI); // Mouth
    fill(0); // white color for teeth
    rect(0, 20, 15, 5); // down teeth
    rect(0, 15, 5, 5); // middle one 
    rect(-10, 15, 15, 5); // top left teeth 

    pop(); // End of pumpkin 
  }
}

// Given class of Blackface 
class Face {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.lifespan = 300; // Face's lifespan
    this.speedX = random(-2, 2); // Random horizontal speed
    this.speedY = random(-2, 2); // Random vertical speed
    this.rotation = 0; // Initialize rotation
  }

  update() {
    // Update position
    this.x += this.speedX;
    this.y += this.speedY;

    // Check for boundaries
    if (this.x < 10 || this.x > width - this.r) {
      this.speedX *= -1; // reverse direction on x-axis
    }
    if (this.y < 10 || this.y > height - this.r) {
      this.speedY *= -1; // reverse direction on y-axis
    }
    
    this.lifespan--; // decrease lifespan
  }

  shouldDisappear() {
    return this.lifespan < 0; // check if lifespan is over
  }

  handleKeyPress() { //given 'a' for rotation
    if (keyIsPressed) {
      if (key === 'a') { 
      this.rotation += 1; // Increment rotation
    }
  }
  } 

  display() {
    push();
    translate(this.x, this.y);
    rotate(radians(this.rotation)); // Rotate the face
    // black face
      fill(25, 16, 0); // black color
      noStroke();
      ellipse(-20, -10, 100,100); // Pumpkin body

    // black circles on top of the head 
      fill(300, 200, 300); // pink circle
      ellipse(-30, -50, 40, 40); // circle

      fill(180, 20, 10); // red circle 
      ellipse(20, -50, 40, 40); // circle

    // eyes
      fill(300); // Black color
      triangle(-20, -10, -10, -20, -10, 0); // Left eye
      triangle(10, -10, 20, -20, 20, 0); // Right eye

    // mouth
      arc(0, 10, 40, 35.5, 0, PI); // Mouth
      // Mouth based on state
      
    // teeth
      fill(25); // White color for teeth
      rect(0, 15, 35, 5); //down teeth
      fill(200,200); 
      rect(0, 15, 15, 5); //middle one 
      rect(-10, 15, 15, 5);//top left teeth 
    pop();
  }
}

//end of black face 



// Given class of Candy 
class Candy {
  constructor(x, y) {
    this.x = x; // x position
    this.y = y; // y position
    this.speedY = random(-2, -1); // Falling speed
    this.size = 30; // Initialize size
  }

  update() {
    this.y += this.speedY; // Update y position

    // Check if candy is out of bounds
    if (this.y < -20) {
      this.y = random(height + 50, height + 100); // Respawn above the canvas
      this.x = random(width); // Random x position
    }
    this.sizeChange(); // Call sizeChange method
  }

  display() {
    push();
    translate(this.x, this.y);
    fill(random(255), random(255), random(255)); // Random color for candy
    ellipse(0, 0, this.size, this.size); // Draw candy
    pop();
  }

  sizeChange() {
    // Increase or decrease size based on key presses
    if (keyIsPressed) {
      if (key === 'b') {
        this.size += 3;
      } else if (key === 'c') {
        this.size -= 3;
      }
      this.size = constrain(this.size, 10, 100); // Constrain size to a reasonable range
    }
  }
  
} 



//Given class of frog

class itFrogs {
  constructor(x, y) {
    this.x = x; // x position
    this.y = y; // y position
    this.size = random(20, 40); // Random size for frogs
    this.speedX = random(-2, 2); // Random horizontal speed
    this.speedY = random(-2, 2); // Random vertical speed
    this.angle = 0; // Initialize angle for rotation
  
  }

  update() {
    this.x += this.speedX; // Update x position
    this.y += this.speedY; // Update y position

    // Check boundaries for frogs
    if (this.x < 0 || this.x > width) {
      this.speedX *= -1; // Reverse direction on x-axis
    }
    if (this.y < 0 || this.y > height) {
      this.speedY *= -1; // Reverse direction on y-axis
    }
  }

  display() {
    push();
    translate(this.x, this.y); // Use this.x and this.y for position
    rotate(this.angle); // Use the angle for rotation
    stroke(3);
    
    this.froggie(); // draw the frog body
    this.eye(); // draw the eyes
    this.cheek(); // draw the cheeks
    this.nose(); // draw the nose

    pop();
  }

  eye() {
    fill(255);
    ellipse(-this.size * 0.4, -this.size * 0.45, this.size * 0.12, this.size * 0.15); // left eye white
    ellipse(this.size * 0.4, -this.size * 0.45, this.size * 0.12, this.size * 0.15); // right eye white
    fill(0);
    ellipse(-this.size * 0.4, -this.size * 0.45, this.size * 0.07, this.size * 0.1);  // left eye pupil
    ellipse(this.size * 0.4, -this.size * 0.45, this.size * 0.07, this.size * 0.1);  // right eye pupil
  }

  cheek() {
    fill(255, 182, 193);
    ellipse(this.size * 0.5, -this.size * 0.15, this.size * 0.2, this.size * 0.1); // right cheek
    ellipse(-this.size * 0.5, -this.size * 0.15, this.size * 0.2, this.size * 0.1); // left cheek
  }

  nose() {
    fill(0);
    ellipse(this.size * 0.05, -this.size * 0.2, this.size * 0.02, this.size * 0.05); // right nostril
    ellipse(-this.size * 0.05, -this.size * 0.2, this.size * 0.02, this.size * 0.05); // left nostril
  }

  froggie() {
    fill(50, 205, 50);
    ellipse(0, 0, this.size * 1.4, this.size); // head
    ellipse(-this.size * 0.4, -this.size * 0.45, this.size * 0.4); // left eye mound
    ellipse(this.size * 0.4, -this.size * 0.45, this.size * 0.4); // right eye mound
  }

  rotate() {
    this.angle += 0.10; // Increment angle for rotation
  }

  grow() {
    this.size += 1; // Increase size of frog
    if (this.size > 100) {
      this.size = 100;  
    }
  }
}


// end of frog code

//////////////// end of code 





