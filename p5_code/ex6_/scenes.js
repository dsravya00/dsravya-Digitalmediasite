
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

//only 2 first music works - 1st page 
//but also can hear the 2nd music randomly


///// Page 1 /////

function page1() {
  var textX;
  var textY;
  var loy = 0;  // exists as data saved when in the tree scene 
  var buttonA = false;
  var buttonB = false;
  let buttonPressed = false; 

 
  // scene1.setup
   this.setup = function() {
      outputVolume(0.50);  // Turn down the volume
      // let scaleFactor = 1;
  }
  
  this.enter = function() {
    // Stop sounds from other pages
    if (!snd.isPlaying()) {
      snd.play();//sound of piano-merry-christmas
      snd1.pause();//sound of christmas song
      snd2.pause(); //sound of ho-ho-ho 
    }

    if (snd3.isPlaying()) {
        snd3.stop();//for buttons 
    }

      
     
      

      // Button 1
      buttonB = checkButtonPress("Start Here", width / 8 - 40, height - 70, 120, 40, color(120, 180, 100), color(100), color(250));
      if (buttonB) {
          buttonB = false;
          playshortsound();  // Play the sound when clicking "Start Here"
          this.sceneManager.showNextScene();
      }
      

      // Button 2 (Help)
      buttonA = checkButtonPress("Help", width - 150, height - 70, 100, 40, color(255, 0, 0), color(100), color(250));
      if (buttonA) {
          buttonA = false; 
          this.sceneManager.showScene(help);
      }
  }
  
   

  this.draw = function() {
      background("grey");

   let scaleFactor = 1.5;  
      
      // Ground color - bottom one 
      fill(200, 150, 0); 
      noStroke(); 
      fill(255, 204, 90);
      rect(-5, height - 160, width + 10, 190);

      push();

      // fill("white");
      // text("Ho Ho Ho!", 0, -120);

      noStroke(); 
      // translate(200, 40); 
      fill(97, 50, 9); 
      rect(485, 470, 45, 70);

      // Tree layers
      fill('teal');
      translate(220,-20); 
      triangle(67 * scaleFactor, 335 * scaleFactor, 190 * scaleFactor, 300 * scaleFactor, 304 * scaleFactor, 335 * scaleFactor);
      fill('green'); 
      triangle(85 * scaleFactor, 305 * scaleFactor, 190 * scaleFactor, 275 * scaleFactor, 304 * scaleFactor, 305 * scaleFactor);
      fill(60, 179, 113); 
      triangle(105 * scaleFactor, 280 * scaleFactor, 190 * scaleFactor, 245 * scaleFactor, 284 * scaleFactor, 280 * scaleFactor);
      fill('lime');
      triangle(125 * scaleFactor, 250 * scaleFactor, 190 * scaleFactor, 215 * scaleFactor, 264 * scaleFactor, 250 * scaleFactor);
      fill('lightgreen');
      triangle(145 * scaleFactor, 220 * scaleFactor, 190 * scaleFactor, 185 * scaleFactor, 244 * scaleFactor, 220 * scaleFactor);
      fill(127, 255, 0);
      triangle(165 * scaleFactor, 190 * scaleFactor, 190 * scaleFactor, 155 * scaleFactor, 224 * scaleFactor, 190 * scaleFactor);
      fill(151, 75, 75, 0.97); 
      triangle(178 * scaleFactor, 160 * scaleFactor, 190 * scaleFactor, 140 * scaleFactor, 204 * scaleFactor, 160 * scaleFactor);

      // Star
      // fill(250, 100, 0); 
      // triangle(176, 145, 188, 145, 186, 138);
      // triangle(188, 145, 194, 145, 191, 159);
      // triangle(194, 145, 198, 138, 207, 142);
      // triangle(198, 138, 190, 131, 200, 124);
      // triangle(190, 131, 188, 145, 179, 123);
      // quad(190, 130, 198, 137, 194, 146, 187, 145);

      //can move by using mouse = colors will display 

      //left/right - up/down - size
      fill(mouseX,mouseY,0)
      ellipse(340,400,11,11)
      ellipse(300,300,10,10)
      ellipse(220,480,10,10)

      fill(128,mouseX,mouseY)
      ellipse(280,260,16,16)
      ellipse(280,350,13,13)

      fill(mouseX,0,mouseY)
      ellipse(400,500,12,12)
      ellipse(300,490,12,12)
      ellipse(255,400,12,12)

      fill(mouseY,165,mouseX)
      ellipse(300,300,12,12)
      ellipse(330,450,14,14)
      ellipse(240,350,13,13)

      fill(mouseX,255,mouseY)
      ellipse(310,380,13,13)
      ellipse(270,310,12,12)
      ellipse(290,425,13,13)

      fill(255,mouseY,mouseX)
      ellipse(340,360,12,12)
      ellipse(220,440,10,10)
      ellipse(280,460,10,10)

    //star
      stroke(0,0)
      fill(255,mouseX,mouseY)
      translate(0,10)
      triangle(176 * scaleFactor, 145 * scaleFactor, 188 * scaleFactor, 145 * scaleFactor, 186 * scaleFactor, 138 * scaleFactor);
      triangle(188 * scaleFactor, 145 * scaleFactor, 194 * scaleFactor, 145 * scaleFactor, 191 * scaleFactor, 159 * scaleFactor);
      triangle(194 * scaleFactor, 145 * scaleFactor, 198 * scaleFactor, 138 * scaleFactor, 207 * scaleFactor, 142 * scaleFactor);
      triangle(198 * scaleFactor, 138 * scaleFactor, 190 * scaleFactor, 131 * scaleFactor, 200 * scaleFactor, 124 * scaleFactor);
      triangle(190 * scaleFactor, 131 * scaleFactor, 188 * scaleFactor, 145 * scaleFactor, 179 * scaleFactor, 123 * scaleFactor);
      quad(190 * scaleFactor, 130 * scaleFactor, 198 * scaleFactor, 137 * scaleFactor, 194 * scaleFactor, 146 * scaleFactor, 187 * scaleFactor, 145 * scaleFactor);
      print(mouseX, mouseY);

      // triangle(176 * scaleFactor,145 * scaleFactor,188 * scaleFactor, 145 * scaleFactor, 186 * scaleFactor, 138 * scaleFactor)
      // triangle(188 * scaleFactor, 145 * scaleFactor, 194 * scaleFactor, 145 * scaleFactor, 191 * scaleFactor, 159 * scaleFactor)
      // triangle(194 * scaleFactor ,145,198,138,207,142)
      // triangle(198,138,190,131,200,124)
      // triangle(190,131,188,145,179,123)
      // quad(190,130,198,137,194,146,187,145)
      


///////////


      ///////////////////////////////////////////////////////////////////////////
      

      // Set 1 (Moving ellipses - from top to bottom)
      speed = 0.09;
      fill("white");  
      translate(-250, loy - 0); 
      ellipse(110, 10, 30, 30);
      ellipse(620, 200, 40, 40);
      ellipse(400, -20, 20, 20);
      ellipse(100, 130, 20, 20);
      ellipse(10, 100, 10, 10);
      ellipse(200, -30, 25, 25);
      ellipse(300, 220, 20, 20);

      speed = 0.15;
      // translate(width / 4, loy - 100); 
      // fill(20,200,300); //blue
      ellipse(940, -90, 25, 25);  
      ellipse(700, -180, 35, 35);
      ellipse(790, 180, 25, 25);
      ellipse(550, -50, 20, 20);
      ellipse(350, -160, 20, 20);
      ellipse(190, -200, 10, 10);

      //(left/right, up/down, size);

      // Set 2 (Moving ellipses - from top to bottom)
      speed = 0.02;
      fill("white"); 
      translate(width / 4, loy - 100); 
      ellipse(50, -90, 20, 20);
      ellipse(10, 200, 40, 40);
      ellipse(600, 50, 40, 40);
      ellipse(400, -20, 10, 10);
      ellipse(500, 50, 20, 20);
      ellipse(700, 40, 20, 20);

      // fill(200,200,100); //yellow
      ellipse(650, -100, 30, 30);
      ellipse(600, -190, 10, 10);
      ellipse(580, -250, 20, 20);
      ellipse(500, -125, 20, 20);
      ellipse(400, -20, 10, 10);
      ellipse(260, -80, 15, 15);
      ellipse(-200, -80, 20, 20);
      ellipse(-100, -40, 15, 15);

      if (loy > height - 100) {
          loy = 0;
      }
      loy++;

      pop();


     
    
      // Button 1
      buttonB = checkButtonPress("Start Here", width / 8 - 40, height - 70, 120, 40, color(120, 180, 100), color(100), color(250));
      if (buttonB) {
          buttonB = false;
          playshortsound();
          this.sceneManager.showNextScene();
      }
      
      // Button 2
      buttonA = checkButtonPress("Help", width - 150, height - 70, 100, 40, color(255, 0, 0), color(100), color(250));
      if (buttonA) {
          buttonA = false; 
          this.sceneManager.showScene(help);
      }




  }

  this.keyPressed = function() {
      fill(0, 255, 0);
      text(keyCode, textX, textY += 10);

      if (textY > height) {
          textX += 20;
          textY = 0;
      }
  }


  this.mousePressed = function() {
      // Handle mouse pressed events here if needed
  }
}

if (loy > height - 0) {
  loy = 0;
}
loy++;

///// end of page 1 /////









///// Page 2 /////

let dragging = false; 
let draggedBall = null; 
let offsetX, offsetY; 
let buttonA = false;
let balls = [];


///// Page 2 /////

function page2() {

  let buttonA = false;

      this.setup = function() {
        outputVolume(0.10);  // Turn down the volume
    }
  
    
    this.enter = function() {
      // only snd1 plays = rest of them will stop sounds in page 2 

      if (!snd1.isPlaying()) {
        snd.stop(); //sound of piano-merry-christmas
        snd1.play(); //sound of christmas song
        snd2.stop(); //sound of ho-ho-ho 
      }

       if (snd3.play()) {
        snd3.playshortsound(); 
       } //for buttons 
      
  
      }
      



///////////////////////////////////////////////////
      
  // background settings 
  this.draw = function() {
    background("grey");
    let scaleFactor = 1.5;

    // added few decoration items on to the right 
   

    //grey rect
    fill(255,100); 
    // stroke(10); 
    noStroke(); 
    rect(800, 50, 180, 400); 

    //white rect    
    fill(255); 
    // stroke(10); 
    noStroke(); 
    rect(850, 60, 80, 80); 
    rect(850, 160, 80, 80); 
    rect(850, 260, 80, 80); 
    rect(850, 360, 80, 80); 


    // top decorative objects 
    fill(0); 
    ellipse(60,30,50,50); 
    rect(60,40, 6, -42, 40, 20); 

    fill("pink"); 
    rect(90,40, 6, -42, 40, 20); 
    ellipse(100,70,70,70); 

    fill("white");  
    rect(420,40, 6, -42, 10, 10); 
    ellipse(420,60,60,60); 
    fill("orange"); 
    ellipse(420,60,30,30); 

    fill("brown"); 
    rect(400,30, 6, -42, 10, 10); 
    ellipse(400,40,40,40); 


//star = on right side 
this.x = 70;
this.y = 50;

noStroke(); 
// Draw the triangle.
let starSize = 25; // Half the size of the circle for the star
  let starPoints = [
    {x: this.x, y: this.y - starSize},               // Top point
    {x: this.x + starSize * 0.40, y: this.y - starSize * 0.40},  // Top-right point
    {x: this.x + starSize, y: this.y},               // Right point
    {x: this.x + starSize * 0.35, y: this.y + starSize * 0.35},  // Bottom-right point
    {x: this.x, y: this.y + starSize},               // Bottom point
    {x: this.x - starSize * 0.35, y: this.y + starSize * 0.35},  // Bottom-left point
    {x: this.x - starSize, y: this.y},               // Left point
    {x: this.x - starSize * 0.40, y: this.y - starSize * 0.40}   // Top-left point
  ];


   
    //circle blue ball
    fill(200, 100, 100);
    noStroke(); 
    circle(890, 100, 50); // Draw a circle with diameter 50
    // circle(890, 200, 50);
    // circle(890, 300, 50);

    fill("#0000FF"); 
    circle(890, 400, 60);
    
    stroke(0); // Outline color (black)
    strokeWeight(); // Outline thickness

    fill("black"); 
    // Arc for the half-moon (semicircle)
    arc(890, 380, 20 * 2, 5 * 1, PI, 0, CHORD);
    arc(900, 400, 20 * 2, 5 * 1, PI, 0, CHORD);
    arc(890, 420, 20 * 2, 5 * 1, PI, 0, CHORD);

    fill("white"); 
    arc(890, 420, 10 * 2, 5 * 1, PI, 0, CHORD);
    arc(895, 380, 10 * 2, 5 * 1, PI, 0, CHORD);
    arc(880, 400, 10 * 2, 5 * 1, PI, 0, CHORD);

    //circle blue ball ends 

    //candy 
    fill(255, 0, 0); // Red color for the candy body
    noStroke();
    ellipse(890, 200, 80, 40); // Draw ellipse (candy body)
  
    // Left wrapper
    fill(255, 255, 0); // Yellow color for left wrapper
    rect(890 - 50, 200 - 20, 20, 40); // Left wrapper rectangle
  
    // Right wrapper
    fill(255, 255, 0); // Yellow color for right wrapper
    rect(890 + 30, 200 - 20, 20, 40); // Right wrapper rectangle
   
    //candy ends



    //Wreath
    fill("green"); 
    ellipse( 890, 300, 80, 80); // bottom middle
   
    fill("white"); 
    ellipse(890, 300, 38,38,100,100); 

    fill("red"); 
    //left/right - up/down, size 
    ellipse(920, 300, 10, 10); //right middle
    ellipse(913, 280, 10, 10); //top middle side
    ellipse(910, 320, 10, 10); //bottom right side
    ellipse(890, 330, 10, 10); // bottom middle
    ellipse(865, 320, 10, 10); //left bottom side
    ellipse(860, 300, 10, 10); // left middle side
    ellipse(867, 280, 10, 10); //top left side middle
    ellipse(890, 270, 10, 10); //top middle 
    
    fill("orange"); 
     ellipse(920, 290, 9, 9);  //top middle right side
     ellipse(902, 272, 9, 9);  //top right 
     ellipse(878, 272, 9, 9);  //top left
     ellipse(903, 330, 9, 9); //right bottom 
     ellipse(860, 310, 9, 9); //left bottom side
     ellipse(875, 330, 9, 9);  //bottom left side
     ellipse(860, 288, 9, 9);  // top left side
     ellipse(918, 310, 9, 9); //right side middle 
    

    // Wreath ends here 
  

      // Ground color - bottom one
      fill(200, 150, 0); 
      noStroke(); 
      fill(255, 204, 90);
      rect(-5, height - 160, width + 10, 190);
    
      
      // tree setup 2  
      fill(97, 50, 9); 2
      rect(170 * scaleFactor, 335 * scaleFactor, 45 * scaleFactor, 45 * scaleFactor);
     
      fill(97, 50, 9); 2
      rect(170 * scaleFactor, 335 * scaleFactor, 45 * scaleFactor, 45 * scaleFactor);
     
      fill('green'); 
      triangle(67 * scaleFactor, 335 * scaleFactor, 190 * scaleFactor, 300 * scaleFactor, 304 * scaleFactor, 335 * scaleFactor);
     
      fill(60, 179, 113);
      triangle(85 * scaleFactor, 305 * scaleFactor, 190 * scaleFactor, 275 * scaleFactor, 304 * scaleFactor, 305 * scaleFactor);
     
      fill(127, 205, 100); 
      triangle(105 * scaleFactor, 280 * scaleFactor, 190 * scaleFactor, 245 * scaleFactor, 284 * scaleFactor, 280 * scaleFactor);
     
      fill(151, 175, 75);   
      triangle(125 * scaleFactor, 250 * scaleFactor, 190 * scaleFactor, 215 * scaleFactor, 264 * scaleFactor, 250 * scaleFactor);
     
      fill('lightgreen');    
      triangle(145 * scaleFactor, 220 * scaleFactor, 190 * scaleFactor, 185 * scaleFactor, 244 * scaleFactor, 220 * scaleFactor);
      
      fill(127, 255, 0); 
      triangle(165 * scaleFactor, 190 * scaleFactor, 190 * scaleFactor, 155 * scaleFactor, 224 * scaleFactor, 190 * scaleFactor);

      fill(220, 255, 0); 
      triangle(178 * scaleFactor, 160 * scaleFactor, 190 * scaleFactor, 140 * scaleFactor, 204 * scaleFactor, 160 * scaleFactor);

      // Star (increased size)
      stroke(0, 0);
      fill(255, mouseX, mouseY); // This still moves based on the mouse
      3
      triangle(176 * scaleFactor, 145 * scaleFactor, 188 * scaleFactor, 145 * scaleFactor, 186 * scaleFactor, 138 * scaleFactor);
      triangle(188 * scaleFactor, 145 * scaleFactor, 194 * scaleFactor, 145 * scaleFactor, 191 * scaleFactor, 159 * scaleFactor);
      triangle(194 * scaleFactor, 145 * scaleFactor, 198 * scaleFactor, 138 * scaleFactor, 207 * scaleFactor, 142 * scaleFactor);
      triangle(198 * scaleFactor, 138 * scaleFactor, 190 * scaleFactor, 131 * scaleFactor, 200 * scaleFactor, 124 * scaleFactor);
      triangle(190 * scaleFactor, 131 * scaleFactor, 188 * scaleFactor, 145 * scaleFactor, 179 * scaleFactor, 123 * scaleFactor);
      quad(190 * scaleFactor, 130 * scaleFactor, 198 * scaleFactor, 137 * scaleFactor, 194 * scaleFactor, 146 * scaleFactor, 187 * scaleFactor, 145 * scaleFactor);


      
      // Help Button
      buttonA = checkButtonPress("Help", width - 150, height - 70, 100, 40, color(250, 0, 0), color(100), color(250));  
      if (buttonA) { 
          buttonA = false;
          this.sceneManager.showScene(help);
      }
    }
    
    
      //symbolism of ornaments
      buttonA = checkButtonPress("Info", width - 550, height - 70, 100, 40, color(250, 0, 0), color(100), color(250));  
      if (buttonA) { 
          buttonA = false;
          this.sceneManager.showScene(page4);
      }
      
   // Back Button
  backButton = checkButtonPress("Next", width - 150, height - 70, 100, 40, color(250, 0, 0), color(100), color(0));
               
                  // Change the text color using fill()
                  fill(255, 255, 255); // White color for the button text
                  textSize(18);  // Optionally adjust text size
          

                  if (backButton) {
                    backButton = true;
                    this.sceneManager.showScene(page1); // Go back to Page 2
                  }
                }

      //symbolism of ornaments
      buttonA = checkButtonPress("Info", width - 550, height - 70, 100, 40, color(250, 0, 0), color(100), color(250));  
      if (buttonA) { 
          buttonA = false;
          this.sceneManager.showScene(page4);
      
  }



                // Handle mousePressed event to start dragging a decoration
                this.mousePressed = function() {
                  for (let i = 0; i < decorations.length; i++) {
                    if (decorations[i].isMouseOver()) {
                      decorations[i].isDragging = true;
                      draggedDecoration = decorations[i];
                      break;
                    }
                  }
                }

                // Handle mouseReleased event to drop the decoration
                this.mouseReleased = function() {
                  if (draggedDecoration !== null) {
                    draggedDecoration.drop(tree); // Drop the decoration on the tree
                    draggedDecoration = null;
                  }
                }

                // Handle dragging the decoration
                this.mouseDragged = function() {
                  if (draggedDecoration !== null) {
                    draggedDecoration.drag(); // Update the dragged decoration's position
                  }
                }

                // Key press and other events if needed
                this.keyPressed = function() {
                  fill(0, 255, 0);
                  text(keyCode, textX, textY += 10);

                  if (textY > height) {
                    textX += 20;
                    textY = 0;
                  }
                }
              

              // Tree class
              class Tree {
                constructor(x, y, size) {
                  this.x = x;
                  this.y = y;
                  this.size = size;
                }

                display() {
                  // Draw tree using triangles
                  fill(34, 139, 34); // Green color for tree
                  triangle(this.x, this.y - this.size, this.x - this.size, this.y + this.size, this.x + this.size, this.y + this.size);
                  triangle(this.x, this.y - this.size / 2, this.x - this.size * 0.8, this.y + this.size / 2, this.x + this.size * 0.8, this.y + this.size / 2);
                  triangle(this.x, this.y - this.size * 0.75, this.x - this.size * 0.6, this.y + this.size / 3, this.x + this.size * 0.6, this.y + this.size / 3);

                  // Draw tree trunk
                  fill(139, 69, 19); // Brown color for trunk
                  rect(this.x - 20, this.y + this.size / 3, 40, 50);
                }
              }

              // Decoration class for Candy, Ball, Star
              class Decoration {
                constructor(type, x, y) {
                  this.type = type;
                  this.x = x;
                  this.y = y;
                  this.size = 40;
                  this.isDragging = false;
                }

                display() {
                  // Draw the decoration based on its type
                  if (this.type === 'candy') {
                    this.drawCandy();
                  } else if (this.type === 'ball') {
                    this.drawBall();
                  } else if (this.type === 'star') {
                    this.drawStar();
                  }
                }

                drawCandy() {
                  fill(255, 0, 0);
                  noStroke();
                  ellipse(this.x, this.y, this.size, this.size / 2);
                  fill(255);
                  rect(this.x - this.size / 4, this.y - this.size / 4, this.size / 2, this.size / 2);
                }

                drawBall() {
                  fill(255, 255, 0);
                  noStroke();
                  ellipse(this.x, this.y, this.size);
                }

                drawStar() {
                  push();
                  fill(255, 215, 0);
                  noStroke();
                  translate(this.x, this.y);
                  beginShape();
                  for (let i = 0; i < 5; i++) {
                    let angle = TWO_PI / 5 * i;
                    let x1 = cos(angle) * this.size;
                    let y1 = sin(angle) * this.size;
                    vertex(x1, y1);
                  }
                  endShape(CLOSE);
                  pop();
                }

                isMouseOver() {
                  let d = dist(mouseX, mouseY, this.x, this.y);
                  return d < this.size / 2;
                }

                drag() {
                  if (this.isDragging) {
                    this.x = mouseX;
                    this.y = mouseY;
                  }
                }

                drop(tree) {
                  if (this.isDragging) {
                    // Check if the decoration is near the tree (drop condition)
                    if (dist(this.x, this.y, tree.x, tree.y) < tree.size / 2) {
                      this.x = tree.x;
                      this.y = tree.y - tree.size / 2 + 20; // Position it near the tree
                    }
                    this.isDragging = false;
                  }
                }
              }
                
                  // Key press functionality if needed
                  this.keyPressed = function() {
                    // Handle key events if necessary
                  }
                
                  // Mouse pressed functionality if needed
                  this.mousePressed = function() {
                    // Handle mouse events if necessary
                  }
              
              

  


  this.keyPressed = function() {
    fill(0,255,0);
    text(keyCode, textX, textY += 10);

    if ( textY > height )  {
        textX += 20;
        textY = 0;
    }
}



  // mousePressed function
  this.mousePressed = function() {
      // Any mouse pressed logic if needed
  }

  // if sound isn't playing, start it
  if (!snd1.isPlaying()) {
      snd1.play();
  }

///// end of page 2 /////





///// Page 3 /////


function help() {
  let buttonC = false; // Button state for Back button

  santa = loadImage("assets/images/santa.png"); 

  gifts = loadImage("assets/images/gifts.png"); 
    
       

  this.enter = function() {
    // only snd plays = rest of them will stop sounds in page 3 

    if (!snd2.isPlaying()) {
      snd.stop();//sound of piano-merry-christmas
      snd1.stop();//sound of christmas song
      snd2.play(); //sound of ho-ho-ho 
      snd3.pause(); //for buttons 
      
    }
  }

  // Draw function for Help scene
  this.draw = function() {
    background("grey");

    // Ground color - bottom one
    fill(200, 150, 0);
    noStroke();
    fill(255, 204, 90);
    rect(-5, height - 160, width + 10, 190);

    fill(0, 200, 0, 150); 
    rect(100, 100, 450, 180, 40, 40, 40, 0);

    // Set the text color to white
    fill(255); // White color for text
    textAlign(LEFT);
    textSize(20);

    //santa image 
    image(santa, -80, 160, 350, 400);
    
    
    // Display text in white on top of the black rectangle
    text("Ho Ho Ho!", 280, 140);
    text("Hi there, this is me, your Santa Claus. I feel something is incomplete, here I need your help to decorate my tree. Hope you Enjoy - Merry Christmas folks", 130, 155, 400); 

    // 2nd text-box 
    fill(200, 30, 0, 100); 
    rect(430, 310, 320, 130, 40, 40, 0, 40);  

    fill(255);  
    textAlign(LEFT);
    textSize(20);
    text("Don’t forget to decorate the tree!", 445, 380);  
  
    image(gifts, 640, 340, 360, 250); 

    // Set the text color to white
    fill(255); // White color for text
    textAlign(LEFT);
    noStroke(); 
    textSize(20);
     // Draw the "Back" button
     buttonC = checkButtonPress("Back", width - 200, height - 70, 120, 40, color(120, 180, 100), color(100), color(100,200,0));
     if (buttonC) {
         buttonC = false;
         this.sceneManager.showScene(page2);  // go back to Page 2 
     }
   }
  }
 
  
 // A simple button check function to change color on hover and click
 function checkButtonPress(str, bx, by, boxW, boxH, upcolor, ovcolor, dncolor) {
   let btnc = "";
   let btnstate = false;
 
   // Test if the cursor is over the box
   if (mouseX > bx - boxW && mouseX < bx + boxW && mouseY > by - boxH && mouseY < by + boxH) {
     if (!mouseIsPressed) {
       btnc = ovcolor; // Change color on hover
       btnstate = false;
     } else {
       btnc = dncolor; // Change color when clicked
       btnstate = true;
     }
   } else {
     btnc = upcolor; // Default color
   }
 
   // Draw the button
   push();
   translate(bx, by);
   fill(btnc);
   rect(0, 0, boxW, boxH, 10); // Draw the box
   fill(20);
   noStroke();
   textSize(20);
   textAlign(CENTER);
   text(str, boxW / 2, 28); // Draw the text on the button
   pop();
 
   return btnstate;
 }




function checkButtonPress(str,bx,by,boxW,boxH,upcolor,ovcolor,dncolor) {

let btnc = "";
let btnstate =false;

// Test if the cursor is over the box
if ( mouseX > bx - boxW &&
     mouseX < bx + boxW &&
     mouseY > by - boxH &&
     mouseY < by + boxH ) {
     overBox = true;

  if (!mouseIsPressed) {
    stroke(255);
    btnc = ovcolor;
    btnstate = false;
  } else {
    console.log(str + " pressed");
    stroke(255);
    btnc = dncolor;
    btnstate = true;
  }

} else {
  stroke(255);
  btnc = upcolor;
  overBox = false;
}

    push();

      translate(bx,by);
      fill(btnc);
      rect(0, 0, boxW, boxH,10); // draw the box

      fill(20);
      noStroke();
      textSize(20);
      textAlign(CENTER);
      text (str,boxW/2,28);

    pop();

  return btnstate;

}


//play snd3 and stop snd2
function playshortsound() {
if ( !snd3.isPlaying() ) {
  snd3.play();
} else {
   snd2.stop();
}
}




///// end of page 3 /////






///// Page 4 /////

function page4() {

  let buttonD = false;
  let speed = 0.09;
  let loy = 0;  // Variable for controlling animation speed of ellipses
  let santaImage;


  // setup method to initialize the scene
  this.setup = function() {
    outputVolume(0.50);  // Set the volume for the background sound
  }

  // enter method to play specific sounds when entering the scene
  this.enter = function() {
    // Stop sounds from other pages
    if (!snd.isPlaying()) {
      snd.play();        // Play the "piano-merry-christmas" sound
      snd1.pause();      // Pause the "christmas song" sound
      snd2.pause();      // Pause the "ho-ho-ho" sound
    }

    if (snd3.isPlaying()) {
      snd3.stop();      // Stop sound related to buttons
    }
  }

  // The draw method for handling animations and interactions
  this.draw = function() {
    background("grey");
   
    // image of santa-claus.png
    image(santaclaus, 60, 40, 300, 270); 
     

    // Ground color setup (bottom section)
    fill(200, 150, 0);
    noStroke();
    fill(255, 204, 90);
    rect(-5, height - 160, width + 10, 190);

    // Text on the screen
    fill("blue");
    textSize(32);
    text("Ho Ho Ho!", 50, height / 10);  // Display the text at a specific position
    

    //add text = info about symoblism 
   
    // Example of adding more text:
    // adding text //
  fill(255);  // Text color
  textSize(24);  // Smaller text size
  
  // Drawing a Circle with Text inside it
  fill(300, 200, 300);  // big circle behind the text 
  noStroke();  // No border for the circle
  ellipse(width / 2 + 240, height / 2 - 50, 460, 460);  // Draw a circle at the center, with 150px diameter

  fill("white"); 
  rect(720,70,60,40); 

  fill("black"); 
  rect(750,50,10,40); 

  // Text inside the circle
  fill(0);  // White color for text
  textSize(20);  // Text size

 // Descriptive Text Below
 textSize(16);  // Smaller text size for the description
 text("Symbolisim of Obejcts", 660, 140);
 text("Blue balls or any color ball represents:", 600, 190);
 text("In the Catholic world, these balls may symbolize the virtues", 530 , 220);
 text("God gave to man, including wisdom, strength, piety, and love.", 528, 245); 
 text("Gold symbolizes the gift from the three wise men,", 528, 270); 
 text("blue represents Mother Mary seen as result of her wealth,", 528, 295);
 text("and white links to the purity of Jesus himself.", 528, 320);

 text("Candy canes, often seen during the holiday season, are" ,528, 345) 
 text("symbolically interpreted with red stripes representing Jesus'",528, 370); 
 text("blood and white stripes representing his purity.", 534, 395); 


 text("A Christmas wreath symbolizes eternal life, as its circular shape", 450,565); 
 text("has no beginning or end, and is often associated with peace, hope,", 450,585); 
 text("and the spirit of the holiday season.", 450,605); 
 
 text("The star in Christmas symbolizes the Star of Bethlehem, guiding",450, 640)
 text("the Wise Men to the birth of Jesus.", 450, 660); 
 text("Gifts at Christmas represent love, kindness, and the joy of giving to others.", 450,680); 

textSize(20); 
 fill("white"); 
 text("Star – Guidance",50, 300); 
 text("Gifts – Generosity", 50,320); 
 text("Wreath – Eternity", 50,340);
 text("Candy Cane – Purity", 50,360); 
 text("Tree – Life", 50,380); 
 text("Lights – Joy", 50,400); 
 text("Bell – Celebration", 50,420); 
 text("Stocking – Anticipation", 50,440); 
 text("Angel – Protection", 50,460); 



    /////////////////////
    //add Background balls here // 


    // Button: Back Button (fixed position)
    buttonD = checkButtonPress("Back", width / 5, height - 70, 120, 40, color(120, 180, 100), color(100), color(100, 200, 0));
    if (buttonD) {
      buttonD = false;
      this.sceneManager.showScene(page2);  // Go back to Page 2 
    }
  }

  // Handling key press to display the key codes (for debugging or input visualization)
  this.keyPressed = function() {
    fill(0, 255, 0);
    text(keyCode, textX, textY += 10);

    if (textY > height) {
      textX += 20;
      textY = 0;
    }
  }
}



///// end of page 4 /////