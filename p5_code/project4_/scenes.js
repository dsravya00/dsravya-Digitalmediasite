
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
      let scaleFactor = 1;
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
      buttonB = checkButtonPress("Start Here", width / 8 - 50, height - 70, 120, 40, color(120, 180, 100), color(100), color(250));
      if (buttonB) {
          buttonB = false;
          playshortsound();  // Play the sound when clicking "Start Here"
          this.sceneManager.showNextScene();
      }
      

      // Button 2 (Help)
      buttonA = checkButtonPress("Help", width - 150, height - 70, 100, 40, color(255, 0, 0), color(100), color(250));
      if (buttonA) {
          buttonA = false; 
          // playshortsound();
          this.sceneManager.showScene(help);
      }
  }
  
   

  this.draw = function() {
      background("grey");
      noStroke(); 

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

// if (loy > height - 0) {
//   loy = 0;
// }
// loy++;

///// end of page 1 /////




///// Page 2 /////

function page2() {

  let dragging = false; 
  let draggedBall = null; 
  let offsetX, offsetY; 
  let buttonA = false;
  let balls = [];


      this.setup = function() {
        outputVolume(0.50);  // Turn down the volume

        balls.push(new createCircle());
        balls.push(new Candy());
        balls.push(new createWreath());
        balls.push(new blueCircle());
        
        

    }

    this.enter = function() {
      // only snd1 plays = rest of them will stop sounds in page 2 

      if (!snd1.isPlaying()) {
        snd.stop(); //sound of piano-merry-christmas
        snd1.play(); //sound of christmas song
        snd2.stop(); //sound of ho-ho-ho 
        if (snd3.play()) {
          snd3.playshortsound(); 
         } //for buttons 
        
        }
}

  // Mouse pressed functionality for dragging balls
  this.mousePressed = function() {
    for (let i = 0; i < balls.length; i++) {
        if(balls[i].isMouseOver())
        {
          dragging = true;
          draggedBall = balls[i];
          offsetX = draggedBall.x - mouseX;
          offsetY = draggedBall.y - mouseY;
        }
    }
  }

  // Mouse released event to drop the decoration

  this.mouseReleased = function ()
  {
    dragging = false;
    draggedBall = null;
  }

  this.mouseDragged = function ()
  {
    if(dragging && draggedBall)
    {
      draggedBall.drag();
    }
  }

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
      stroke(10); 
      noStroke(); 
      rect(850, 60, 80, 80); 
      rect(850, 160, 80, 80); 
      rect(850, 260, 80, 80); 
      rect(850, 360, 80, 80);  



      
      
// // TREE   
//    // Rotate the tree based on the treeRotation value
//    push(); // Save current state
//    translate(width / 2, height / 2); // Move origin to the center for rotation
//    rotate(radians(treeRotation)); // Apply rotation
//    translate(-width / 2, -height / 2); // Move back the origin to the top-left corner



///////////////////////////////////////////////////
// Stars 2

// top decorative objects 
fill(0); 
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

  // Draw the star shape by connecting the points
  fill("orange"); 
  noStroke();
  beginShape();
  for (let i = 0; i < starPoints.length; i++) {
    vertex(starPoints[i].x, starPoints[i].y);
  }
  endShape(CLOSE);



// triangle(-20, 25, 8, -30, 36, 25);




// TREE   
// rotateY(frameCount * 0.01);

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

//balls on tree 

   //7th layer 
   fill(0, mouseX,700,mouseY); 
   ellipse(460,500,13,13); 
   ellipse(100,500,12,13); 

   //6th layer
   fill(600,mouseX,600,mouseY); 
   ellipse(450,455,13,13); 
   ellipse(130,455,13,13); 

   //5th layer
   fill(100,mouseX,300,mouseY); 
   ellipse(420,420,13,13); 
   ellipse(165,420,13,13); 

   //4th layer
   fill(400,mouseX,100,mouseY); 
   ellipse(390,370,13,13); 
   ellipse(190,370,13,13); 
    
   //3th layer
   fill(300,mouseX,300,mouseY); 
   ellipse(365,325,13,13); 
   ellipse(220,325,13,13); 

   //2th layer
   fill(200,mouseX,200,mouseY); 
   ellipse(331,280,13,13); 
   ellipse(250,280,13,13); 

   //1th layer
   fill(100,mouseX,100,mouseY); 
   ellipse(305,240,13,13); 
   ellipse(270,240,13,13); 





      // Star (increased size)
      stroke(0, 0);
      fill(255,0,0, mouseX, mouseY); // This still moves based on the mouse
      // 3
      triangle(176 * scaleFactor, 145 * scaleFactor, 188 * scaleFactor, 145 * scaleFactor, 186 * scaleFactor, 138 * scaleFactor);
      triangle(188 * scaleFactor, 145 * scaleFactor, 194 * scaleFactor, 145 * scaleFactor, 191 * scaleFactor, 159 * scaleFactor);
      triangle(194 * scaleFactor, 145 * scaleFactor, 198 * scaleFactor, 138 * scaleFactor, 207 * scaleFactor, 142 * scaleFactor);
      triangle(198 * scaleFactor, 138 * scaleFactor, 190 * scaleFactor, 131 * scaleFactor, 200 * scaleFactor, 124 * scaleFactor);
      triangle(190 * scaleFactor, 131 * scaleFactor, 188 * scaleFactor, 145 * scaleFactor, 179 * scaleFactor, 123 * scaleFactor);
      quad(190 * scaleFactor, 130 * scaleFactor, 198 * scaleFactor, 137 * scaleFactor, 194 * scaleFactor, 146 * scaleFactor, 187 * scaleFactor, 145 * scaleFactor);


      //symbolism of ornaments
      buttonA = checkButtonPress("Info", width - 550, height - 70, 100, 40, color(250, 0, 0), color(100), color(250));  
      if (buttonA) { 
          buttonA = false;
          this.sceneManager.showScene(page4);
          if (snd3.play()) {
            snd3.playshortsound(); 
           } //for buttons 
          
      }

      // Help Button
      buttonA = checkButtonPress("Help", width - 150, height - 70, 100, 40, color(250, 0, 0), color(100), color(250));  
      if (buttonA) { 
          buttonA = false;
          this.sceneManager.showScene(help);
      }

  
      // Back Button
      backButton = checkButtonPress("Next", width - 350, height - 70, 100, 40, color(250, 0, 0), color(100), color(0));
    
      // Change the text color using fill()
      fill(255, 255, 255); // White color for the button text
      textSize(18);  // Optionally adjust text size
          

    if (backButton) {
      backButton = true;
      this.sceneManager.showScene(help); //page 3 
      
    }

      balls[0].update();
      balls[0].display();
      balls[1].update();
      balls[1].display();
      balls[2].update();
      balls[2].display();
      balls[3].update();
      balls[3].display();

      //symbolism of ornaments
      buttonA = checkButtonPress("Info", width - 550, height - 70, 100, 40, color(250, 0, 0), color(100), color(250));  
      if (buttonA) { 
          buttonA = false;
          this.sceneManager.showScene(page4);
      }
      
  }

///////////////////////////////////////////////////////////////////////////////////



// Key press and other events if needed
this.keyPressed = function() {
  fill(0, 255, 0);
  text(keyCode, textX, textY += 10);

  if (textY > height) {
    textX += 20;
    textY = 0;
  }
}
if (keyCode === LEFT_ARROW) {
  treeRotation -= 5; // Rotate the tree left
} else if (keyCode === RIGHT_ARROW) {
  treeRotation += 5; // Rotate the tree right
}
}

///// end of page 2 /////





///// Page 3 /////

let snowflakes = [];  // Array to store snowflakes

function help() {
  let buttonC = false; // Button state for Back button

  santa = loadImage("assets/images/santa.png"); 

  gifts = loadImage("assets/images/gifts.png"); 
    
  noStroke();

  this.enter = function() {
    // only snd plays = rest of them will stop sounds in page 3 

    if (!snd2.isPlaying()) {
      snd.stop();//sound of piano-merry-christmas
      snd1.stop();//sound of christmas song
      snd2.play(); //sound of ho-ho-ho
    } 
      if (snd3.play()) {
        snd3.playshortsound(); 
       } //for buttons 
      
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
    
    // // Display text in white on top of the black rectangle
    text("Ho Ho Ho!", 280, 135);
    text("Hi there, this is me, your Santa Claus. I feel something is incomplete, here I need your help to decorate my tree. Hope you Enjoy - Merry Christmas folks", 130, 175, 400); 


    
    // 2nd text-box 
    fill(200, 30, 0, 100); 
    rect(430, 310, 345, 130, 40, 40, 0, 40);  

    fill(255);  
    textAlign(LEFT);
    textSize(18);
    text("Don’t forget to decorate the tree!", 445, 380);  

    //gifts image 
    image(gifts, 640, 340, 360, 250); 

    // Set the text color to white
    fill(255); // White color for text
    textAlign(LEFT);
    noStroke(); 
    textSize(20);

     //  Draw the "Back" button
     buttonC = checkButtonPress("Back", width/4, height - 70, 120, 40, color(120, 180, 100), color(100), color(100,200,0));
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
   snd3.stop();
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
      snd1.stop();      // Pause the "christmas song" sound
      snd2.stop();      // Pause the "ho-ho-ho" sound
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
  // fill(300, 200, 300);  
  fill("white"); 
  noStroke(); 4 
  // rect(580,100, 350, 350);  
  ellipse(740,255,300,150); //bottom side 

  fill("white"); 
  ellipse(795,190,300,150); //right side 
  ellipse(680,200,320,150); //left side 




  // fill("white"); 
  // rect(720,70,60,40); 

  // fill("black"); 
  // rect(750,50,10,40); 

  // Text inside the circle
  fill(0);  // White color for text

 // Descriptive Text Below
 textSize(16);  // Smaller text size for the description
//  text("Symbolisim of Obejcts", 660, 140);
 text("A Christmas wreath symbolizes eternal life", 555, 190);
 text("and peace, the star represents the guiding", 555 , 220);
 text("Star of Bethlehem, and gifts embody love,", 557, 245); 
 text("kindness, and the joy of giving.", 610, 270); 
//  text("", 600, 295);



//  text("" ,528, 345) 
//  text("'",528, 370); 
//  text("", 534, 395); 

//Blue balls or any color ball represents 
//In the Catholic world, these balls may symbolize the virtues god gave to man, including wisdom, strength, piety, and love. Gold symbolizes the gift from the three wise men, blue represents Mother Mary seen as result of her wealth, and white links to the purity of Jesus himself. 

//Candy canes, often seen during the holiday season, are symbolically interpreted with red stripes representing Jesus ablood and white stripes representing his purity.

//  text("", 450,565); 
//  text("", 450,585); 
//  text("", 450,605); 
 
//  text("",450, 640)
//  text("", 450, 660); 
//  text("", 450,680); 

//  text("", 450, 660); 

 
  textSize(20); 
  fill("red"); 
  rect(62,285, 165,50,10); 
  fill("White");4
  text("Star – Guidance",70, 320); 

  textSize(20); 
  fill("lime"); 
  rect(150,350, 200,50, 10); 
  fill("black");
  text("Gifts – Generosity",160, 385); 

  textSize(20); 
  fill("yellow"); 
  rect(100,415, 200,50,10); 
  fill("black");
  text("Wreath – Eternity",110, 450); 

  textSize(20); 
  fill("orange"); 
  rect(220,480, 210,50,10); 
  fill("black");
  text("Candy Cane – Purity", 230, 515); 

  textSize(20); 
  fill("brown"); 
  rect(500-50,480, 120,50,10); 
  fill("white");
  text("Tree – Life", 512-50,515); 

  textSize(20); 
  fill("pink"); 
  rect(590,480, 120,50,10); 
  fill("black");
  text("Lights – Joy", 595,515); 
 
  textSize(20); 
  fill("blue"); 
  rect(710,400, 200,50,10); 
  fill("white");
  text("Bell – Celebration", 720,435);
  
  textSize(20); 
  fill("black"); 
  rect(730,480, 250,50,10); 
  fill("white");
  text("Stocking – Anticipation", 740,515);
  
  textSize(20); 
  fill("purple"); 
  rect(435,400, 210,50,10); 
  fill("white");
  text("Angel – Protection", 445,432); 
// left/right - up/down - size


    /////////////////////
    // Background balls // 

    // Set 1: Moving ellipses from top to bottom (for animation)
    fill("green");
    speed = 0.09;
    push(); // Save the current transformation state
    translate(-250, loy - 0); 
    ellipse(110, 10, 30, 30);
    ellipse(620, 200, 40, 40);
    ellipse(400, -20, 20, 20);
    ellipse(100, 130, 20, 20);
    ellipse(10, 100, 10, 10);
    ellipse(200, -30, 25, 25);
    ellipse(300, 220, 20, 20);
    pop(); // Restore the original transformation state

    // Set 2: Moving ellipses from top to bottom with different speed
    speed = 0.15;
    push(); // Save the current transformation state
    translate(width / 4, loy - 100); 
    fill(20, 200, 300); // Blue color for these ellipses
    ellipse(940, -90, 25, 25);  
    ellipse(700, -180, 35, 35);
    ellipse(790, 180, 25, 25);
    ellipse(550, -50, 20, 20);
    ellipse(350, -160, 20, 20);
    ellipse(190, -200, 10, 10);
    pop(); // Restore the original transformation state

    // Set 3: Additional moving ellipses (optional effect)
    speed = 0.02;
    push(); // Save the current transformation state
    translate(width / 4, loy - 100); 
    fill("red"); 
    ellipse(50, -90, 20, 20);
    ellipse(10, 200, 40, 40);
    ellipse(600, 50, 40, 40);
    ellipse(400, -20, 10, 10);
    ellipse(500, 50, 20, 20);
    ellipse(700, 40, 20, 20);
    fill("purple");  // Yellow color
    ellipse(650, -100, 30, 30);
    ellipse(600, -190, 10, 10);
    ellipse(580, -250, 20, 20);
    ellipse(500, -125, 20, 20);
    ellipse(400, -20, 10, 10);
    ellipse(260, -80, 15, 15);
    ellipse(-200, -80, 20, 20);
    ellipse(-100, -40, 15, 15);
    pop(); // Restore the original transformation state

    // Handle vertical looping of the ellipses
    if (loy > height - 100) {
      loy = 0;
    }
    loy++;

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