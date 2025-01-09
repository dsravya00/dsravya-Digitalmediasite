
// Exercise 3: Creatures Are... [Vectors, Transformations and Functions]

//used Wrap Around Vector 
//parent and child functions bees and sunflower 
// transformation function set - rotation, scale and translation. 



let speedX, speedY, RoX, RoY;
let angle = 0; // Initialize angle for scaling

function setup() {
  createCanvas(700, 600);
  background(180, 216, 230); // Background color
  rectMode(CENTER);
  noStroke();

  speedX = random(-30, 3);
  speedY = 2 - random(2);
  RoX = height / 2;
  RoY = width / 2;
}

function draw() {
  background(180, 216, 230); // Clear the background each frame
  emojis();
  bees();
  face();
  balls();

  // Update angle for scaling
  angle += 0.02;
  
  // ZigZag - Draw the ball
  // ellipse(RoX, RoY, 100, 100); // Sky blue circle 
  face1(RoX, RoY, 120, 100);
  face2(RoX, RoY, 90,100);
}

function emojis() {
  flower1();
}

function bees() {
  bee1();
  bee2();
  bee3();
  bee4();
  bee5();
  
}

function face() {
  brownface();
  face1(); 
}

function balls() {
  // ZigZag = Move the ball 
  RoX += speedX;
  RoY += speedY;

  // Draw the ball
  fill(300, 200, 220); // pink color for the ball
  ellipse(RoX, RoY, 40, 40); 
 
  
  // Check boundaries
  if (RoX > width || RoX < 10) {
    speedX *= -1; // Reverse horizontal direction
  }
  if (RoY > height || RoY < 20) {
    speedY *= -1; // Reverse vertical direction
  }
} 



// Start of flower 1 code 
function flower1() {  
  push();
  
      translate(190, 180); // Flower position 
      
      let A = color(10, 200, 0); // Body parts color - green
      fill(color(120, 70, 120));
      
      body(50, -15, A);
      armR(100, 10, A);  // Right arm 
      armL(30, 10, A); // Left arm 
      legR(95, 0, A); // Right leg
      legL(30, 0, A); // Left leg

      // Head 
      fill(color(300, 200, 10)); // Yellow color 
      ellipse(400 - 5, 90 + 60, 50, 50); // Left - circle 
      ellipse(350 + 10, 100 + 70, 50, 50); // Top left - circle
      ellipse(390 + 40, 100 + 70, 50, 50); // Top right - circle 
      ellipse(430 - 35, 150 + 70, 50, 50); // Bottom middle - circle 
      ellipse(430 - 5, 140 + 70, 50, 50); // Right bottom - circle 
      ellipse(430 - 70, 140 + 70, 50, 50); // Left bottom - circle 
      fill(290, 300, 10); // Separated from others
      ellipse(430 - 35, 120 + 70, 50, 50); // Bottom middle - circle 

      // Eyes 
      fill(0); 
      ellipse(435 - 30, 180, 10, 10); // Right eye
      ellipse(380, 180, 10, 10); // Left eye

      // Mouth 
      fill(0); // Black rectangle mouth 
      rect(390, 195, 10, 10);
  
  pop(); 
}
function body( xpos, ypos, c) { //body 
  fill(c);
  rect(width/2+xpos,height/2+-10,50,120,20);
}

// function head( xpos, ypos, hat, c) { //given specifically the code in the above - tag of head 

// fill(c);
// ellipse(width/2+xpos,height/2 -110 +ypos ,60,80);

// }

function legR(xpos, ypos, c) { //right leg
fill(c);
rect(width/2+ 20+18, height/2+100 + -40,20,90,50); 
}

function legL(xpos, ypos, c) {  //left leg 
fill(c);
rect(width/2+ 70-8, height/2+100 + -40,20,90,50);  

fill(10); //dot point bottom on left leg 
rect(388, 400, 20, 20, 10);  

  }

function armR( xpos, ypos){ //right arm 
fill(140, 90, 10);
rect(width/2+ 80, height/2-20 + ypos,15,80,5); 

fill(10); //finger hands
rect(370, 330, 20, 20, 10); 

}

function armL( xpos, ypos) { // left arm 
fill(140, 90, 10);
rect(width/2 +120-100, height/2-10 -10 + ypos,15,80,5); 

fill(10); //finger hands
rect(430, 330, 20, 20, ypos, 10); 

fill(10); //dot point bottom on right leg 
rect(410, 405, 20, 20, ypos, 10);  


  } 
 

// Start of bees 1, 2, 3, 4, 5 //
function bee1() {

  push(); 
      translate(300, 220); 
      scale(0.8);
      rotate(speedX, speedY);

      fill(10); 
      ellipse(38, 40, 30, 30, 10);
      fill(300, 200, 10);
      ellipse(45, 40, 20, 30, 10);
      fill(10);
      ellipse(52, 40, 20, 30, 10);
      fill(300, 200, 10);
      ellipse(70, 40, 30, 30, 10); 

      // Eyes
      fill(255, 255, 255); // White eyes 
      ellipse(75, 35, 10, 10);  // Left one 
      ellipse(70, 45, 10, 10);  // Right one 

      // Eye ball // Black eyes 
      fill(0);
      ellipse(75, 35, 5, 5); // Left one 
      ellipse(70, 45, 5, 5); // Right one 

      // Mouth 
      fill(0);
      ellipse(65, 38, 5, 9); // Mouth 

      // Wings
      fill(255, 253, 190); // Wing color = Cream color with transparency
      ellipse(45, 15, 35, 30); // Left wing
      ellipse(45, 60, 35, 30); // Right wing

      // Head 
      fill(0);
      ellipse(80 - 3, 23, 5, 15); // Black stripes 
      ellipse(85 - 5, 45, 5, 15); // Black stripes 
  pop();  
}

function bee2() {
  push(); 
      translate(400, 90); 
      scale(1);
      rotate(speedX, speedY);

      fill(10); 
      ellipse(38, 40, 30, 30, 10);
      fill(300, 200, 10);
      ellipse(45, 40, 20, 30, 10);
      fill(10);
      ellipse(52, 40, 20, 30, 10);
      fill(300, 200, 10);
      ellipse(70, 40, 30, 30, 10); 

      // Eyes
      fill(255, 255, 255); // White eyes 
      ellipse(75, 35, 10, 10);  // Left one 
      ellipse(70, 45, 10, 10);  // Right one 

      // Eye ball // Black eyes 
      fill(0);
      ellipse(75, 35, 5, 5); // Left one 
      ellipse(70, 45, 5, 5); // Right one 

      // Mouth 
      fill(0);
      ellipse(65, 38, 5, 9); // Mouth 

      // Wings
      fill(255, 253, 190); // Wing color = Cream color with transparency
      ellipse(45, 15, 35, 30); // Left wing
      ellipse(45, 60, 35, 30); // Right wing

      // Head 
      fill(0);
      ellipse(80 - 3, 23, 5, 15); // Black stripes 
      ellipse(85 - 5, 45, 5, 15); // Black stripes 
  pop();  
}

function bee3() {
  push(); 
      translate(300, 450, 10); 
      scale(1.2);
      rotate(speedX, speedY);

      fill(10); 
      ellipse(38, 40, 30, 30, 10);
      fill(300, 200, 10);
      ellipse(45, 40, 20, 30, 10);
      fill(10);
      ellipse(52, 40, 20, 30, 10);
      fill(300, 200, 10);
      ellipse(70, 40, 30, 30, 10); 

      // Eyes
      fill(255, 255, 255); // White eyes 
      ellipse(75, 35, 10, 10);  // Left one 
      ellipse(70, 45, 10, 10);  // Right one 

      // Eye ball // Black eyes 
      fill(0);
      ellipse(75, 35, 5, 5); // Left one 
      ellipse(70, 45, 5, 5); // Right one 

      // Mouth 
      fill(0);
      ellipse(65, 38, 5, 9); // Mouth 

      // Wings
      fill(255, 253, 190); // Wing color = Cream color with transparency
      ellipse(45, 15, 35, 30); // Left wing
      ellipse(45, 60, 35, 30); // Right wing

      // Head 
      fill(0);
      ellipse(80 - 3, 23, 5, 15); // Black stripes 
      ellipse(85 - 5, 45, 5, 15); // Black stripes 
  pop();  
}

function bee4() {
  push(); 
      translate(350, 300); 
      scale(1.3);
      rotate(speedX, speedY);

      fill(10); 
      ellipse(38, 40, 30, 30, 10);
      fill(300, 200, 10);
      ellipse(45, 40, 20, 30, 10);
      fill(10);
      ellipse(52, 40, 20, 30, 10);
      fill(300, 200, 10);
      ellipse(70, 40, 30, 30, 10); 

      // Eyes
      fill(255, 255, 255); // White eyes 
      ellipse(75, 35, 10, 10);  // Left one 
      ellipse(70, 45, 10, 10);  // Right one 

      // Eye ball // Black eyes 
      fill(0);
      ellipse(75, 35, 5, 5); // Left one 
      ellipse(70, 45, 5, 5); // Right one 

      // Mouth 
      fill(0);
      ellipse(65, 38, 5, 9); // Mouth 

      // Wings
      fill(255, 253, 190); // Wing color = Cream color with transparency
      ellipse(45, 15, 35, 30); // Left wing
      ellipse(45, 60, 35, 30); // Right wing

      // Head 
      fill(0);
      ellipse(80 - 3, 23, 5, 15); // Black stripes 
      ellipse(85 - 5, 45, 5, 15); // Black stripes 
  pop();  
}

function bee5() {
  push(); 
      translate(200, 280); 
      scale(0.5);
      rotate(speedX, speedY);

      fill(10); 
      ellipse(38, 40, 30, 30, 10);
      fill(300, 200, 10);
      ellipse(45, 40, 20, 30, 10);
      fill(10);
      ellipse(52, 40, 20, 30, 10);
      fill(300, 200, 10);
      ellipse(70, 40, 30, 30, 10); 

      // Eyes
      fill(255, 255, 255); // White eyes 
      ellipse(75, 35, 10, 10);  // Left one 
      ellipse(70, 45, 10, 10);  // Right one 

      // Eye ball // Black eyes 
      fill(0);
      ellipse(75, 35, 5, 5); // Left one 
      ellipse(70, 45, 5, 5); // Right one 

      // Mouth 
      fill(0);
      ellipse(65, 38, 5, 9); // Mouth 

      // Wings
      fill(255, 253, 190); // Wing color = Cream color with transparency
      ellipse(45, 15, 35, 30); // Left wing
      ellipse(45, 60, 35, 30); // Right wing

      // Head 
      fill(0);
      ellipse(80 - 3, 23, 5, 15); // Black stripes 
      ellipse(85 - 5, 45, 5, 15); // Black stripes

  pop();  
}

function face1() {
  // Brown face 
  push();
    
    // Define a scale factor
    let scaleFactor = 1 + 0.2 * sin(angle); 
    
    // scaling factor using sine wave
    
    // Scale the face
    scale(scaleFactor);

    //panda = 


    fill(300);
    stroke(3);
    ellipse(100,100, 90, 90); //circle of white face 

    //top head  
    fill(40);
    ellipse(60,50,50,50) //left eye 
    ellipse(140,50,50,50) //right eye

      //outline of circles 
    // fill(300);
    //   ellipse(0,50,30,50) //left eye 
    //   ellipse(140,50,30,50) //right eye


    
    //eyes
    ellipse(80,90,30,30) //left eye 
    ellipse(120,90,30,30) //right eye
    


    //1st white eye balls 
    fill(0);
    ellipse(80,90,15,15) //left eye 
    ellipse(120,90,15,15) //right eye


    //3rd white eye balls 
    fill(300);
    ellipse(80,90,8,8) //left eye 
    ellipse(120,90,8,8) //right eye

    //nose 
    fill(0);
    rect(100,110,10,10);

    //mouth  
    fill(0);
    ellipse(100,130,25,10);
    

  pop();
}

function face2() {
//pumpkin
// Draw pumpkin body


  // Define a scale factor
  let scaleFactor = 1 + 0.5 * sin(angle); 
  
  // scaling factor using sine wave
  
  // Scale the face
  scale(scaleFactor);
  
  translate(-70, 25);

  translate(350,-100);
  fill(255, 165, 0); // Orange color
  noStroke();
  ellipse(200, 200, 150, 100); // main body
  ellipse(200, 230, 180, 120); // bottom part

// Draw pumpkin stem

fill(100,200,10); //green color 
rect(190, 140, 20, 40); // Stem

// Draw eyes
fill(0); // Black color
translate(0,15);
triangle(160, 180, 180, 160, 180, 200); // Left eye
triangle(220, 180, 200, 160, 200, 200); // Right eye


// Draw mouth
arc(200, 220, 80, 50, 0, PI); // Mouth

//nose 
fill(0);

//teeth
fill(300);
translate(0,20);
rect(220,210,10,10); 
rect(200,220,10,10); 
rect(180,210,10,10); 

}

/// end of pumpkin code ///


// Start of Brown Face 
function brownface() {
  push();
  
  // Define a scale factor
  let scaleFactor = 1 + 0.5 * sin(angle); 
  
  // scaling factor using sine wave
  
  // Scale the face
  scale(scaleFactor);
  
  translate(-200, 200);
  
  let faceColor = color(100, 25, 0); // Brown color for the face
  let eyeColor = color(255); // White for eyes
  let pupilColor = color(10); // Black for pupils
  let mouthColor = color(0); // Black for mouth

  // Draw the face
  head(faceColor, 350, 300); // Position the face at (350, 300)
  
  // Draw eyes
  eye(eyeColor, pupilColor, 320, 280); // Left eye
  eye(eyeColor, pupilColor, 380, 280); // Right eye
  
  // Draw mouth
  mouth(mouthColor, 350, 320); // Position the mouth

  //hat 
    fill(200,100,10); //hat color 
    translate(290,184); //position of hat 
    triangle(30, 75, 58, 20, 86, 75); //shape/size 


  pop();
}

function head(faceColor, x, y) {
  fill(faceColor);
  ellipse(x, y, 100, 100); // Face size 
}

function eye(eyeColor, pupilColor, x, y) {
  fill(eyeColor);
  ellipse(x, y, 15, 15); // Eye
  fill(pupilColor);
  ellipse(x, y, 5, 5); // Pupil
}

function mouth(mouthColor, x, y) {
  fill(mouthColor);
  ellipse(x, y, 30, 20); // Mouth
}


/// end of brown face ///

