


let cx, cy;
let bgc;
let gridSize;
let emoji, smileface, laughingface, sillyface, sunglassesface, angerface;
let images = []; // Array to hold image data
let angle;

let counterG = 0; 
let counterR = 0; 
let f; //font load 

// let purpOn = false;
let toggleState = false;  //given let toggle here 

// let occupiedPositions = new Set(1); // Set to track occupied positions
 
// describe('A black circle on a whitebackground. The circle opens and closes its mouth.');

// font "Monospaced"


function setup() {
   createCanvas(1000, 700);
   background(255);
   bgc = color(20, 1);
   emoji = loadImage("assets/emoji.jpg");
   smileface = loadImage("assets/smileface.jpg");
   laughingface = loadImage("assets/laughingface.jpg");
   sillyface = loadImage("assets/sillyface.jpg");
   sunglassesface = loadImage("assets/sunglassesface.jpg");
   angerface = loadImage("assets/angerface.jpg");


   cx = width / 4;
   cy = height / 4;
   gridSize = 60;
   textSize(40);
   frameRate(4);

  // textFont(f); // for text font 


}




function draw() {
   background(255);
   noStroke();

   // Draw all images stored in the array
   for (let imgData of images) {
       image(imgData.img, imgData.x, imgData.y, gridSize, gridSize);
   }
   if (toggleState) {
    fill(0,255,0); //green color - ON button 
   } else {
    fill(255,100,0); //orange color - OFF button 

   }

   // given toggle button 
   ellipse(150, 150, 100, 100); //circle shape 
    
  // Display toggle state as text in the center
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(30);
  text(toggleState ? "ON" : "OFF", 150, 150);

   // Check for key presses 
   if (keyIsPressed) {
    keyChoice();
} else {
    // Hold on c button (show message when 'c' is held)
    textSize((counterG + 20) / 5);
    fill(265, 20, 900);
    text("Emoji are not only stickers, they're emotions!", 600, 350, counterG);
    counterG += 3;
    if (counterG > width) {
        counterG = 0.1;
    }
       
 
}







/// the bottom and side on the left addons.
   for (let i = 40; i < 150; i += 40) {
       for (let j = 10; j < 490; j += 120) {
             rand = random(255);
             fill(rand, 350);
             circle( i+5, j+5, 10, 10 );
             console.log("this has a greyscale value of" + rand);
           }
            for (let i = 0; i < 950; i += 60) {
             for (let j = 480; j < 900; j += 100) {
                   rand = random(255);
                   fill(rand, 200);
                   rect( i+5, j+5, 10, 10 );
                   console.log("this has a greyscale value of" + rand);
                 }
               }
              
          
             //try to add an arc to move/rotate
                  
                     // Style the arc.
                     noStroke();
                     fill(255, 255, 0);
                  
                     // Update start and stop angles.
                     let biteSize = PI / 16;
                     let startAngle = biteSize * sin(frameCount * 1) + biteSize;
                     let endAngle = TWO_PI - startAngle;
          
                     // Draw only arc.
                   //   arc(200,200,200,200,180,0)
                     arc(50, 50, 80, 80, startAngle, endAngle, PIE);


                     // Arc rotation
                         arc(translate(width / 1, height / 2));
                    
                   //       // Rotate by a certain angle (in radians)
                         angle = frameCount * 0.2; // Rotate over time
                         rotate(angle);
                    
                         // Draw the arc
                         fill(255);
                         stroke(10);
                       //   arc(100, 10, 80, 80, 0, PI + QUARTER_PI, PIE);

           }


       }



function mousePressed() {
  // Check if the mouse is inside the rectangle (button)
  if (mouseX > 150 && mouseX < 250 && mouseY > 150 && mouseY < 200) {
    toggleState = !toggleState;  // Toggle the state
  }
}



function keyChoice() {
   switch (key) {
  
  
   case 'a': //got it
       console.log("a left");
       cx -= gridSize; // Move left
       images.push({ img: emoji, x: cx, y: cy });
       console.log("Position occupied, cannot move 'a' here.");
       break;


   case 'b': //got it
       console.log("b up");
       cy -= gridSize; // Move up
       images.push({img: smileface, x: cx, y: cy});
       console.log("Position occupied, cannot move 'b' here.");
       break;
      
   case 'c': //got it
       console.log("c text");
       fill(205, 20, 10);
       background(20);
       text("BOOM", 400, 90, 100);
       break;  
      
   case 'd': //got it
       console.log("d right");
       cx += gridSize; // Move right
       images.push({ img: laughingface, x: cx, y: cy });
       break;

   case 'e': // Move down
      console.log("e down");
      cy += gridSize; // Move down
      images.push({ img: sillyface, x: cx, y: cy })
      break;
          
   case 'f': //got it
      console.log("f right");
      cx += gridSize; // Move right
      images.push({ img: sunglassesface, x: cx, y: cy });
       break;

   case 'g': // got it
        console.log("g right");
        cy += gridSize; // Move right
        images.push({ img: angerface, x: cx, y: cy });
       //  console.log("Position occupied, cannot move 'g' here.");
       break; 
      
  //  case 't': // got it
  //      console.log("t text");
  //      fill(265, 20, 900);
  //      if ( mouseIsPressed && keyIsPressed == true ) 
  //          textSize((counterR)/2.5);
  //      text("Emoji are not only stickers, they're emotions!", 850, 80, 50);  
  //      textAlign(CENTER);
  //      break;


   //   case 'x'
   //    console.log("pmouseX");


      
      
       // case 'h': // Erase angerface image
       // console.log("h erase angerface");
       // images = images.filter(imgData => imgData.img !== angerface); // Remove angerface from the array
                           // break;
      
      
   default:
       console.log("not one of the chars, please try again.");
       break;




       }


   key = ""; // Clear key to prevent double triggering


       }
