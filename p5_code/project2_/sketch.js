
//Project 2   Timelapse Algomations

//varibles of 
// x1 = starting point
// y1 = starting point 
// x2 = ending point 
// y2 = ending point 
// t = time (Seconds - speed (faster or slower))
//framecount added periodic motion, allowing the lines to follow a smooth, looping path.

//////////////////////
let count = 4; // Total number of candies
let candies = []; // Array to hold candy objects
let pumpkins = []; 
let pumpkinCount = 5; // Define the number of pumpkins
let t = 0;  // Parameter for the 1st set of lines 
let t2 = 0; // Parameter for the 2nd set of lines
let t4 = 0; // Parameter for the 3rd set of lines
let t5 = 0; // Parameter for the 4th set of lines
let angle = 0; // Initialize angle for scaling
let can; 
let recMode = false; // Initialize recMode
 

function setup() {
  can = createCanvas(720, 650);
  background('black'); // Background color
  rectMode(CENTER);
  noStroke();
  noLoop();

  frameRate(10); 
  
  // Initialize candies
  for (let i = 0; i < count; i++) {
    candies.push(new Candy(random(width), random(height + 150, height + 100))); // Spawn candies above the canvas
  }


  // Initialize pumpkins
  for (let i = 0; i < pumpkinCount; i++) {
    pumpkins.push(new Pumpkin(random(width), random(height))); // Spread out pumpkins 
  }
  

if (frameCount % 10 === 0) {
  console.log();
  }
  
  
  // recordit();

 
  }


function draw() {
  background('black'); // Clear background each frame
  
  

  // Display pumpkins
  for (let pumpkin of pumpkins) {
    pumpkin.update(); // Update the pumpkin's position
    pumpkin.display(); // Draw the pumpkin
  }


  // Control which set of lines to draw based on frame count
  if (frameCount < 400) {

    // Set 1 = 
    stroke('orange');
    strokeWeight(2);
    for (let i = 0; i < 50; i++) {
      line(x1(t + 10), y1(t + 120), x2(t + 10) + 100, y2(t + i) + 100);
    }
    t += 0.02; // Adjust movement speed 
    
    stroke('red');
    strokeWeight(2);
    for (let i = 10; i < 50; i++) {
      line(x1(t + 10), y1(t + 10), x2(t + 10) + 100, y2(t + i) + 100);
    }
    t += 0.020; // Adjust movement speed


    // Set 2 = 
    stroke('silver');
    strokeWeight(2);
    for (let i = 10; i < 50; i++) {
      line(x1(t + 10), y1(t + 5), x2(t + 10) + 250, y2(t + i) + 90);
    }
    t += 0.02; // Adjust movement speed

    stroke('green');
    strokeWeight(2);
    for (let i = 10; i < 50; i++) {
      line(x1(t + 2), y1(t + 10), x2(t + 10) + 250, y2(t + i) + 90);
    }
    t += 0.020; // Adjust movement speed


    // Set 3 = 
    stroke('purple');
    strokeWeight(2);
    for (let i = 0; i < 50; i++) {
      line(x1(t + 10), y1(t + 30), x2(t + 100) + 300, y2(t + i) + 280);
    }
    t += 0.02; // Adjust movement speed
    
    stroke('blue');
    strokeWeight(2);
    for (let i = 0; i < 50; i++) {
      line(x1(t + 50), y1(t + 50), x2(t + 100) + 300, y2(t + i) + 280);
    }
    t += 0.020; // Adjust movement speed


  } else if (frameCount < 900) {
    // Draw second set of lines
    background(150, 170, 20); 
    stroke('skyblue');
    
    strokeWeight(3);
    for (let i = 0; i < 60; i++) {
      line(x1_2(t2 + 20), y1_2(t2 + 30), x2_2(t2 + i) + 80, y2_2(t2 + i) + 80); 
    }
    t2 += 0.1; 


      // Green Loops
      translate(width / 5, height / 4);
      stroke('green');
      strokeWeight(2);
      for (let i = 0; i < 60; i++) {
        line(x1_2(t2 + 20), y1_2(t2 + i), x2_2(t2 + i) + 80, y2_2(t2 + i) + 80); 
      }
      t2 += 0.10;



      // Purple Loops
      translate(width / 3, height / 3);
      stroke('purple');
      strokeWeight(2);
      for (let i = 0; i < 60; i++) {
        line(x1_2(t2 + 20), y1_2(t2 + i), x2_2(t2 + i) + 80, y2_2(t2 + i) + 80); 
      }
      t2 += 0.10;
      

      // Red Loops
      translate(width / 5, height / 4);
      stroke('red');
      strokeWeight(2);
      for (let i = 0; i < 60; i++) {
        line(x1_2(t2 + 20), y1_2(t2 + i), x2_2(t2 + i) + 100, y2_2(t2 + i) + 100); 
      }
      t2 += 0.10;
  

      // Pink loops
      translate(width / -3, height / -3);
      stroke('pink');
      strokeWeight(2);
      for (let i = 0; i < 60; i++) {
        line(x1_2(t2 + 120), y1_2(t2 + i), x2_2(t2 + i) + 100, y2_2(t2 + i) + 100); 
      }
      t2 += 0.10;
    
  } else { (frameCount < 100) 
    // Draw third set of lines
    translate(width / 5, height / 5);
    
    // Draw lines using t4 and t5 parameters
    stroke('red');
    strokeWeight(2);
    for (let i = 0; i < 130; i++) {
      line(x1_4(t4 + i), y1_4(t4 + i), x2_4(t4 + i) + 10, y2_4(t4 + i) + 10);
    }
    t4 += 0.10; 
    
    stroke('white');
    background('blue'); 
    strokeWeight(2);
    for (let i = 0; i < 20; i++) {
      line(x1_2(t5 + i), y1_2(t5 + i), x2_2(t5 + i) + 20, y2_2(t5 + i) + 20); 
    }
    t5 += 0.05;

    //White loop lines 
    stroke('white');
    strokeWeight(2);
    for (let i = 0; i < 90; i++) {
      line(x1_2(t2 + i), y1_2(t2 + i), x2_2(t2 + i) + 30, y2_2(t2 + i) + 100); 
    }
    t2 += 0.05; 

   //black loop lines 
    stroke('black');
    strokeWeight(2);
    for (let i = 0; i < 100; i++) {
      line(x1_2(t2 + 30), y1_2(t2 + 30), x2_2(t2 + i) + 300, y2_2(t2 + i) + 300); 
    }
    t2 += 0.05; 
  
    //Yellow loop lines 
    stroke('yellow');
    strokeWeight(2);
    for (let i = 0; i < 100; i++) {
      line(x1_2(t2 + 130), y1_2(t2 + 130), x2_2(t2 + i) + 500, y2_2(t2 + i) + 40); 
    }
    t2 += 0.05; 
  

  // // Initialize pumpkins
  // for (let i = 0; i < pumpkinCount; i++) {
  //   pumpkins.push(new Pumpkin(random(width), random(height))); // Spread out pumpkins 
  // }
  }
  
  
//by adding this - in here it is blinking in the screen 

  // Increase candies over time
  if (frameCount % 30 === 0 && candies.length < 20) { // Add a candy every second, max 20 candies
    candies.push(new Candy(random(width), random(height + 100, height + 600)));


  // // Display pumpkins
  // for (let pumpkin of pumpkins) {
  //   pumpkin.update(); // Update the pumpkin's position
  //   pumpkin.display(); // Draw the pumpkin
  // }
  }

  // Update and display candies
  for (let candy of candies) {
    candy.update(); // Update the candy's position
    candy.display(); // Draw the candy
  }

  // Initialize and display pumpkins after the lines
  if (pumpkins.length === 0) {
    for (let i = 0; i < pumpkinCount; i++) {
      pumpkins.push(new Pumpkin(random(width), random(height))); // Spread out pumpkins 
    }
  }


  recordit();

}

function keyPressed() {
  if (keyIsPressed === true) {
      let k = key;
      console.log("k is " + k);

      if (k == 's' || k == 'S') {
          console.log("Stopped Recording");
          recMode = false;
          noLoop();
      }

      if (k == ' ') { // Space key (draw loop on)
          console.log("Start Recording");
          recMode = true;
          loop(); // Draw loop runs and starts recording 
      }
  }
}


function recordit() {  // New version
  if (recMode == true) {
      let ext = nf(frameCount, 4); // Convert frameCount into a 4-digit string
      saveCanvas(can, 'frame-' + ext, 'jpg'); // Save the canvas
      console.log("rec " + ext);
  }
}

// Pumpkin setup 
class Pumpkin {
  constructor(x, y) {
    this.x = x; // x position
    this.y = y; // y position
    this.scaleFactor = 1; // scale factor
    this.wiggleSpeed = 0.10; // Speed of wiggling
    this.wiggleAmplitude = 5; // Amplitude of wiggling
    this.blinkTimer = 10; // Timer for blinking 
    this.blinkDuration = 80; // Duration for eyes to be closed
    this.eyeOpen = true; // Eye open state
  } 

  update() {
    this.scaleFactor = 1 + 0.2 * sin(angle); // Scaling effect
    angle += 0.01; // Increment angle for animation
    this.x += this.wiggleAmplitude * sin(frameCount * this.wiggleSpeed); // Wiggling side to side
    this.blinkTimer++;
    if (this.blinkTimer >= this.blinkDuration) {
      this.blinkTimer = 10; // Reset timer
      this.eyeOpen = !this.eyeOpen; // Toggle eye state
    }
  }

  display() { 
    
    push(); 
    translate(this.x, this.y);
    scale(this.scaleFactor); // Apply scaling
  
    fill(255, 120, 0); // Orange color
    noStroke();
    ellipse(0, -20, 100, 50); // main body
    ellipse(0, 10, 115, 60); // bottom part
  
    fill(20, 200, 10); // green color
    rect(0, -50, 20, 30); // top head Stem
    
    fill(0); // Black color for eyes
    if (this.eyeOpen) {
      triangle(-40, -10, -30, -20, -30, 0); // Left eye
      triangle(40, -10, 30, -20, 30, 0); // Right eye
    } else {
      fill('red'); // left eye closed
      rect(-30, -15, 10, 15); // Left closed eye
      fill('#A251FA'); // right eye closed 
      rect(20, -15, 10, 15); // Right closed eye
    }
  
    arc(0, 10, 40, 35.5, 0, PI); // Mouth
    fill(0); // Teeth
    rect(0, 20, 15, 5); // Down teeth
    rect(0, 15, 5, 5); // Middle one 
    rect(-10, 15, 15, 5); // Top left teeth 
  
    pop(); // End of pumpkin 
  }

  
}


// Candy class definition
class Candy {
  constructor(x, y) {
    this.x = x; // Initial x position
    this.y = y; // Initial y position
    this.speed = random(2, 5); // Random speed for rising
    noStroke();
    this.colors = [ // Random colors 
      color(255, 0, 0),  // Red
      color(0, 255, 0),  // Green
      color(0, 0, 255),  // Blue
      color(255, 255, 0), // Yellow
    ];
    this.currentColor = random(this.colors); // Randomly select a color
  }

  update() {
    this.y -= this.speed; // Move candy up
    if (this.y < 0) { 
      this.y = random(height, height + 100); // New position above the canvas
      this.x = random(width); // Random x position
    }
  }

  display() {
    fill(this.currentColor); // Use the current color
    ellipse(this.x, this.y, 30, 30); // Draw candy as a circle
    
    fill(100); // Black color for the triangle
    let triangleSize = 10; // Size of the triangle
    triangle(this.x, this.y - triangleSize / 4, 
             this.x - triangleSize / 4, this.y + triangleSize / 4, 
             this.x + triangleSize / 4, this.y + triangleSize / 4);

  }
  
}

// Orange loop lines
  function x1(t) {
    return sin(t / 10) * 115 + sin(t / 10) * 120 + sin(t / 10) * 10;
  }

  function y1(t) {
    return cos(t / 20) * 10 + cos(t / 5) * 100 + cos(t / 40) * 15;
  }

  function x2(t) {
    return sin(t / 10) * 115 + sin(t / 10) * 120 + sin(t / 10) * 10;
  }

  function y2(t) {
    return cos(t / 20) * 10 + cos(t / 25) * 100 + cos(t / 40) * 15;
  }

// Green loop lines 
  function x1_2(t) {
    return sin(t / 5) * 10 + sin(t / 100) * 80 + sin(t / 100) * 10;
  }

  function y1_2(t) {
    return cos(t / 10) * 20 + cos(t / 10) * 100 + cos(t / 20) * 20;
  }

  function x2_2(t) {
    return sin(t / 5) * 10 + sin(t / 10) * 80 + sin(t / 100) * 10;
  }

  function y2_2(t) {
    return cos(t / 10) * 20 + cos(t / 10) * 100 + cos(t / 20) * 20;
  }

// Yellow loop lines for t4
  function x1_4(t) {
    return sin(t / 20) * 5 + sin(t / 20) * 120 + sin(t / 10) * 10;
  }

  function y1_4(t) {
    return cos(t / 20) * 5 + cos(t / 20) * 100 + cos(t / 40) * 15;
  }

  function x2_4(t) {
    return sin(t / 10) * 5 + sin(t / 20) * 120 + sin(t / 40) * 10;
  }

  function y2_4(t) {
    return cos(t / 20) * 5 + cos(t / 20) * 100 + cos(t / 10) * 15;
  }














/////////////////////////////////

// let count = 4; // Total number of candies
// let candies = []; // Array to hold candy objects
// let pumpkins = []; 
// let pumpkinCount = 5; // Define the number of pumpkins
// let t = 0;  // Parameter for the 1st set of lines 
// let t2 = 0; // Parameter for the 2nd set of lines
// let angle = 0; // Initialize angle for scaling

// function setup() {
//   createCanvas(720, 600);
//   background(150, 170, 20); // Background color
//   rectMode(CENTER);
//   noStroke();
  
//   // Initialize candies
//   for (let i = 0; i < count; i++) {
//     candies.push(new Candy(random(width), random(height + 50, height + 100))); // Spawn candies above the canvas


//   // Draw first set of lines
//   stroke('yellow');
//   strokeWeight(2);
//   for (let i = 0; i < 130; i++) {
//     line(x1(t + i), y1(t + i), x2(t + i) + 10, y2(t + i) + 10);
//   }
//   t += 0.10; 


//   // Draw second set of lines
//   stroke('white');
//   strokeWeight(2);
//   for (let i = 0; i < 200; i++) {
//     line(x1_2(t2 + i), y1_2(t2 + i), x2_2(t2 + i) + 30, y2_2(t2 + i) + 30); 
//   }
//   t2 += 0.05;

    
//   }



// }

// function draw() {
//   background(150, 170, 20); // Clear background each frame

//   // Draw lines based on frame count
//   if (frameCount < 800) {
//     translate(width / 5, height / 5);
    
//     // Draw first set of lines (Yellow and Red)
//     stroke('orange');
//     strokeWeight(2);
//     for (let i = 0; i < 50; i++) {
//       line(x1(t + 10), y1(t + 120), x2(t + 10) + 100, y2(t + i) + 100);
//     }
//     t += 0.02; // Adjust movement speed
    
//     stroke('red');
//     strokeWeight(2);
//     for (let i = 0; i < 50; i++) {
//       line(x1(t + 10), y1(t + 10), x2(t + 10) + 100, y2(t + i) + 100);
//     }
//     t += 0.02; // Adjust movement speed

//     // Other colored lines
//     stroke('silver');
//     strokeWeight(2);
//     for (let i = 2; i < 25; i++) {
//       line(x1(t + 10), y1(t + 300), x2(t + 10) + 40, y2(t + i) + 40);
//     }
//     t += 0.02; // Movement speed

//     stroke('green');
//     strokeWeight(2);
//     for (let i = 2; i < 25; i++) {
//       line(x1(t + 20), y1(t + 300), x2(t + 10) + 40, y2(t + i) + 40);
//     }
//     t += 0.02; // Movement speed

//     stroke('purple');
//     strokeWeight(2);
//     for (let i = 0; i < 50; i++) {
//       line(x1(t + 10), y1(t + 30), x2(t + 100) + 300, y2(t + i) + 280);
//     }
//     t += 0.02; // Movement speed
    
//     stroke('blue');
//     strokeWeight(3);
//     for (let i = 0; i < 50; i++) {
//       line(x1(t + 50), y1(t + 50), x2(t + 100) + 300, y2(t + i) + 280);
//     }
//     t += 0.02; // Movement speed

//   } else {
//     // Draw second set of lines
//     translate(width / 2, height / 2);
    
//     stroke('skyblue');
//     strokeWeight(3);
//     for (let i = 0; i < 60; i++) {
//       line(x1_2(t2 + 20), y1_2(t2 + 30), x2_2(t2 + i) + 80, y2_2(t2 + i) + 80); 
//     }
//     t2 += 0.1; 

//     translate(width / 5, height / 5);
//     stroke('pink');
//     strokeWeight(3);
//     for (let i = 0; i < 60; i++) {
//       line(x1_2(t2 + 10), y1_2(t2 + 150), x2_2(t2 + i) + 10, y2_2(t2 + i) + 80); 
//     } 
//     t2 += 0.1; 
      
//     translate(width / 10, height / 10);
//     stroke('yellow');
//     strokeWeight(2);
//     for (let i = 0; i < 60; i++) {
//       line(x1_2(t2 + 10), y1_2(t2 + 100), x2_2(t2 + i) - 100, y2_2(t2 + i) + 80); 
//     }
//     t2 += 0.1;

//     // Initialize and display pumpkins after the lines
//     if (pumpkins.length === 0) {
//       for (let i = 0; i < pumpkinCount; i++) {
//         pumpkins.push(new Pumpkin(width / 1500 - (pumpkinCount * 100) / 1 + i * 200, height / 1500)); // Spread out pumpkins 
//       }
//     }

//     for (let pumpkin of pumpkins) {
//       pumpkin.update(); // Update pumpkin position and state
//       pumpkin.display(); // Display the pumpkin
//     }
//   }

//   // Increase candies over time
//   if (frameCount % 60 === 0 && candies.length < 20) { // Add a candy every second, max 20 candies
//     candies.push(new Candy(random(width), random(height + 50, height + 100)));
//   }

//   // Update and display candies
//   for (let candy of candies) {
//     candy.update(); // Update the candy's position
//     candy.display(); // Draw the candy
//   }
// }

// // Pumpkin setup 
// class Pumpkin {
//   constructor(x, y) {
//     this.x = x; // x position
//     this.y = y; // y position
//     this.scaleFactor = 1; // scale factor
//     this.wiggleSpeed = 0.10; // Speed of wiggling
//     this.wiggleAmplitude = 5; // Amplitude of wiggling
//     this.blinkTimer = 10; // Timer for blinking 
//     this.blinkDuration = 80; // Duration for eyes to be closed
//     this.eyeOpen = true; // Eye open state
//   } 

//   update() {
//     this.scaleFactor = 1 + 0.2 * sin(angle); // Scaling effect
//     angle += 0.01; // Increment angle for animation
//     this.x += this.wiggleAmplitude * sin(frameCount * this.wiggleSpeed); // Wiggling side to side
//     this.blinkTimer++;
//     if (this.blinkTimer >= this.blinkDuration) {
//       this.blinkTimer = 10; // Reset timer
//       this.eyeOpen = !this.eyeOpen; // Toggle eye state
//     }
//   }

//   display() { 
//     push(); 
//     translate(this.x, this.y);
//     scale(this.scaleFactor); // Apply scaling
  
//     fill(255, 120, 0); // Orange color
//     noStroke();
//     ellipse(0, -20, 100, 50); // main body
//     ellipse(0, 10, 115, 60); // bottom part
  
//     fill(20, 200, 10); // green color
//     rect(0, -50, 20, 30); // top head Stem
    
//     fill(0); // Black color for eyes
//     if (this.eyeOpen) {
//       triangle(-40, -10, -30, -20, -30, 0); // Left eye
//       triangle(40, -10, 30, -20, 30, 0); // Right eye
//     } else {
//       fill('red'); // left eye closed
//       rect(-30, -15, 10, 15); // Left closed eye
//       fill('#A251FA'); // right eye closed 
//       rect(20, -15, 10, 15); // Right closed eye
//     }
  
//     arc(0, 10, 40, 35.5, 0, PI); // Mouth
//     fill(0); // Teeth
//     rect(0, 20, 15, 5); // Down teeth
//     rect(0, 15, 5, 5); // Middle one 
//     rect(-10, 15, 15, 5); // Top left teeth 
  
//     pop(); // End of pumpkin 
//   }
// }

// // Candy class definition
// class Candy {
//   constructor(x, y) {
//     this.x = x; // Initial x position
//     this.y = y; // Initial y position
//     this.speed = random(2, 5); // Random speed for rising
//     noStroke();
//     this.colors = [ // Random colors 
//       color(255, 0, 0),  // Red
//       color(0, 255, 0),  // Green
//       color(0, 0, 255),  // Blue
//       color(255, 255, 0), // Yellow
//     ];
//     this.currentColor = random(this.colors); // Randomly select a color
//   }

//   update() {
//     this.y -= this.speed; // Move candy up
//     if (this.y < 0) { 
//       this.y = random(height, height + 100); // New position above the canvas
//       this.x = random(width); // Random x position
//     }
//   }

//   display() {
//     fill(this.currentColor); // Use the current color
//     ellipse(this.x, this.y, 30, 30); // Draw candy as a circle
    
//     fill(100); // Black color for the triangle
//     let triangleSize = 10; // Size of the triangle
//     triangle(this.x, this.y - triangleSize / 4, 
//              this.x - triangleSize / 4, this.y + triangleSize / 4, 
//              this.x + triangleSize / 4, this.y + triangleSize / 4);
//   }
// }

// // Orange loop lines
// function x1(t) {
//   return sin(t / 10) * 115 + sin(t / 10) * 120 + sin(t / 10) * 10;
// }

// function y1(t) {
//   return cos(t / 20) * 10 + cos(t / 5) * 100 + cos(t / 40) * 15;
// }

// function x2(t) {
//   return sin(t / 10) * 115 + sin(t / 10) * 120 + sin(t / 10) * 10;
// }

// function y2(t) {
//   return cos(t / 20) * 10 + cos(t / 25) * 100 + cos(t / 40) * 15;
// }

// // Green loop lines 
// function x1_2(t) {
//   return sin(t / 5) * 10 + sin(t / 100) * 80 + sin(t / 100) * 10;
// }

// function y1_2(t) {
//   return cos(t / 10) * 20 + cos(t / 10) * 100 + cos(t / 20) * 20;
// }

// function x2_2(t) {
//   return sin(t / 5) * 10 + sin(t / 10) * 80 + sin(t / 100) * 10;
// }

// function y2_2(t) {
//   return cos(t / 10) * 20 + cos(t / 10) * 100 + cos(t / 20) * 20;
// }























//////////////////////////

// let t = 0;  // Parameter for the 1st set of lines 
// let t2 = 0; // Parameter for the 2nd set of lines
// let t3 = 0; // Parameter for the 3rd set of lines
// let pumpkins = []; 
// let count = 5; // Define the number of pumpkins
// let angle = 0; // Initialize angle for scaling

// function setup() {
//   createCanvas(600, 500);

 
//   }

// function draw() {
//   background('black');
   
//   for (let pumpkin of pumpkins) {
//     pumpkin.update(); // Update pumpkin position and state
//     pumpkin.display(); // Display the pumpkin
//   }
  
//   if (frameCount < 800) { // Run the drawing code for the first 800 frames
//     translate(width / 5, height / 5);
    
//     // Set 1 = 
//     stroke('orange');
//     strokeWeight(2);
//     for (let i = 0; i < 50; i++) {
//       line(x1(t + 10), y1(t + 120), x2(t + 10) + 100, y2(t + i) + 100);
//     }
//     t += 0.02; // Adjust movement speed
    
//     stroke('red');
//     strokeWeight(2);
//     for (let i = 0; i < 50; i++) {
//       line(x1(t + 10), y1(t + 10), x2(t + 10) + 100, y2(t + i) + 100);
//     }
//     t += 0.020; // Adjust movement speed
    
//     // Set 2 = 
//     stroke('silver');
//     strokeWeight(2);
//     for (let i = 2; i < 25; i++) {
//       line(x1(t + 10), y1(t + 300), x2(t + 10) + 40, y2(t + i) + 40);
//     }
//     t += 0.02; //  movement speed

//     stroke('green');
//     strokeWeight(2);
//     for (let i = 2; i < 25; i++) {
//       line(x1(t + 20), y1(t + 300), x2(t + 10) + 40, y2(t + i) + 40);
//     }
//     t += 0.020; //  movement speed

//     // Set 3 = 
//     stroke('purple');
//     strokeWeight(2);
//     for (let i = 0; i < 50; i++) {
//       line(x1(t + 10), y1(t + 30), x2(t + 100) + 300, y2(t + i) + 280);
//     }
//     t += 0.02; // movement speed
    
//     stroke('blue');
//     strokeWeight(2);
//     for (let i = 0; i < 50; i++) {
//       line(x1(t + 50), y1(t + 50), x2(t + 100) + 300, y2(t + i) + 280);
//     }
//     t += 0.020; // movement speed

//   } else {
    


//     // Given three set of lines (skyblue, pink, and yellow)
//     translate(width / 2, height / 2);
//     stroke('skyblue');
//     strokeWeight(2);
//     for (let i = 0; i < 60; i++) {
//       line(x1_2(t2 + 20), y1_2(t2 + 30), x2_2(t2 + i) + 80, y2_2(t2 + i) + 80); 
//     }
//     t2 += 0.1; 

//     translate(width / 5, height / 5);
//     stroke('pink');
//     strokeWeight(2);
//     for (let i = 0; i < 60; i++) {
//       line(x1_2(t2 + 10), y1_2(t2 + 150), x2_2(t2 + i) + 10, y2_2(t2 + i) + 80); 
//     } 
//     t2 += 0.1; 
      
//     translate(width / 10, height / 10);
//     stroke('yellow');
//     strokeWeight(2);
//     for (let i = 0; i < 60; i++) {
//       line(x1_2(t2 + 10), y1_2(t2 + 100), x2_2(t2 + i) - 100, y2_2(t2 + i) + 80); 
//     }
//     t2 += 0.10;
//   }
   
    
// }
  

// // Initialize pumpkins
// for (let i = 0; i < count; i++) {
//   pumpkins.push(new Pumpkin(width / 5 - (count * 5) / 1 + i * 100, height / 5)); // Spread out pumpkins
// }

// // Pumpkin class definition
// class Pumpkin {
//   constructor(x, y) {
//     this.x = x; // x position
//     this.y = y; // y position
//     this.scaleFactor = 1; // scale factor
//     this.wiggleSpeed = 0.10; // Speed of wiggling
//     this.wiggleAmplitude = 5; // Amplitude of wiggling

//     // Blink eyes
//     this.blinkTimer = 0; // Timer for blinking 
//     this.blinkDuration = 80; // Duration for eyes to be closed
//     this.eyeOpen = true; // Eye open state
//   } 

//   update() {
//     // Update scaling based on angle
//     this.scaleFactor = 1 + 0.2 * sin(angle); // Scaling effect
//     angle += 0.01; // Increment angle for animation

//     // Wiggling pumpkin 
//     this.x += this.wiggleAmplitude * sin(frameCount * this.wiggleSpeed); // Wiggling side to side

//     // Blinking eyes
//     this.blinkTimer++;
//     if (this.blinkTimer >= this.blinkDuration) {
//       this.blinkTimer = 10; // Reset timer
//       this.eyeOpen = !this.eyeOpen; // Toggle eye state
//     }
//   }

//   display() { 
//     push(); 
//     translate(this.x, this.y);
//     scale(this.scaleFactor); // Apply scaling

//     // Pumpkin body
//     fill(255, 120, 0); // Orange color
//     noStroke(); // No outline for the pumpkin
//     ellipse(0, -20, 100, 50); // main body
//     ellipse(0, 10, 115, 60); // bottom part

//     // Pumpkin head piece on top 
//     fill(20, 200, 10); // green color
//     rect(0, -50, 20, 30); // top head Stem

//     // Eyes of pumpkin 
//     fill(0); // Black color for eyes
//     if (this.eyeOpen) {
//       triangle(-40, -10, -30, -20, -30, 0); // Left eye
//       triangle(40, -10, 30, -20, 30, 0); // Right eye
//     } else {
//       // Closed eyes
//       fill('red'); // red color - left eye
//       rect(-30, -15, 10, 15); // Left closed eye
//       fill('#A251FA'); // purple color - right eye 
//       rect(20, -15, 10, 15); // Right closed eye
//     }

//     // Mouth
//     arc(0, 10, 40, 35.5, 0, PI); // Mouth
//     // Teeth
//     fill(0); // White color for teeth
//     rect(0, 20, 15, 5); // Down teeth
//     rect(0, 15, 5, 5); // Middle one 
//     rect(-10, 15, 15, 5); // Top left teeth 

//     pop(); // End of pumpkin 
//   }
// }
  
// // Orange loop lines
// function x1(t) {
//   return sin(t / 10) * 115 + sin(t / 10) * 120 + sin(t / 10) * 10;
// }

// function y1(t) {
//   return cos(t / 20) * 10 + cos(t / 5) * 100 + cos(t / 40) * 15;
// }

// function x2(t) {
//   return sin(t / 10) * 115 + sin(t / 10) * 120 + sin(t / 10) * 10;
// }

// function y2(t) {
//   return cos(t / 20) * 10 + cos(t / 25) * 100 + cos(t / 40) * 15;
// }

// // Green loop lines 
// function x1_2(t) {
//   return sin(t / 5) * 10 + sin(t / 100) * 80 + sin(t / 100) * 10;
//   }

//   function y1_2(t) {
//     return cos(t / 10) * 20 + cos(t / 10) * 100 + cos(t / 20) * 20;
//   }

//   function x2_2(t) {
//     return sin(t / 5) * 10 + sin(t / 10) * 80 + sin(t / 100) * 10;
//   }

//   function y2_2(t) {
//     return cos(t / 10) * 20 + cos(t / 10) * 100 + cos(t / 20) * 20;
//   }















//with pumpkin

  // let t = 0;  // Parameter for the 1st set of lines 
  // let t2 = 0; // Parameter for the 2nd set of lines
  // let pumpkins = []; 
  // let count = 5; // Define the number of pumpkins
  // let angle = 0; // Initialize angle for scaling
  
  // function setup() {
  //   createCanvas(720, 500);
    
  //   // Initialize pumpkins
  //   for (let i = 0; i < count; i++) {
  //     pumpkins.push(new Pumpkin(width / 5 - (count * 5) / 1 + i * 100, height / 5)); // Spread out pumpkins
  //   }
  // }
  
  // function draw() {
  //   background('black');
  
  //   // Update and display pumpkins
  //   for (let pumpkin of pumpkins) {
  //     pumpkin.update(); // Update pumpkin position and state
  //     pumpkin.display(); // Display the pumpkin
  //   }
  
  //   // Draw first set of lines
  //   if (frameCount < 800) {
  //     translate(width / 5, height / 5);
      
  //     // Set 1 = 
  //     stroke('orange');
  //     strokeWeight(2);
  //     for (let i = 0; i < 50; i++) {
  //       line(x1(t + 10), y1(t + 120), x2(t + 10) + 100, y2(t + i) + 100);
  //     }
  //     t += 0.02; // Adjust movement speed
      
  //     stroke('red');
  //     strokeWeight(2);
  //     for (let i = 0; i < 50; i++) {
  //       line(x1(t + 10), y1(t + 10), x2(t + 10) + 100, y2(t + i) + 100);
  //     }
  //     t += 0.02; // Adjust movement speed
  
  //     // Set 2 = 
  //     stroke('silver');
  //     strokeWeight(2);
  //     for (let i = 2; i < 25; i++) {
  //       line(x1(t + 10), y1(t + 300), x2(t + 10) + 40, y2(t + i) + 40);
  //     }
  //     t += 0.02; // Movement speed
  
  //     stroke('green');
  //     strokeWeight(2);
  //     for (let i = 2; i < 25; i++) {
  //       line(x1(t + 20), y1(t + 300), x2(t + 10) + 40, y2(t + i) + 40);
  //     }
  //     t += 0.02; // Movement speed
  
  //     // Set 3 = 
  //     stroke('purple');
  //     strokeWeight(2);
  //     for (let i = 0; i < 50; i++) {
  //       line(x1(t + 10), y1(t + 30), x2(t + 100) + 300, y2(t + i) + 280);
  //     }
  //     t += 0.02; // Movement speed
      
  //     stroke('blue');
  //     strokeWeight(2);
  //     for (let i = 0; i < 50; i++) {
  //       line(x1(t + 50), y1(t + 50), x2(t + 100) + 300, y2(t + i) + 280);
  //     }
  //     t += 0.02; // Movement speed
  
  //   } else {
  //     // Draw second set of lines
  //     translate(width / 2, height / 2);
      
  //     stroke('skyblue');
  //     strokeWeight(2);
  //     for (let i = 0; i < 60; i++) {
  //       line(x1_2(t2 + 20), y1_2(t2 + 30), x2_2(t2 + i) + 80, y2_2(t2 + i) + 80); 
  //     }
  //     t2 += 0.1; 
  
  //     translate(width / 5, height / 5);
  //     stroke('pink');
  //     strokeWeight(2);
  //     for (let i = 0; i < 60; i++) {
  //       line(x1_2(t2 + 10), y1_2(t2 + 150), x2_2(t2 + i) + 10, y2_2(t2 + i) + 80); 
  //     } 
  //     t2 += 0.1; 
        
  //     translate(width / 10, height / 10);
  //     stroke('yellow');
  //     strokeWeight(2);
  //     for (let i = 0; i < 60; i++) {
  //       line(x1_2(t2 + 10), y1_2(t2 + 100), x2_2(t2 + i) - 100, y2_2(t2 + i) + 80); 
  //     }
  //     t2 += 0.1;
  //   }
  // }
  
  // // Pumpkin class definition
  // class Pumpkin {
  //   constructor(x, y) {
  //     this.x = x; // x position
  //     this.y = y; // y position
  //     this.scaleFactor = 1; // scale factor
  //     this.wiggleSpeed = 0.10; // Speed of wiggling
  //     this.wiggleAmplitude = 5; // Amplitude of wiggling
  
  //     // Blink eyes
  //     this.blinkTimer = 0; // Timer for blinking 
  //     this.blinkDuration = 80; // Duration for eyes to be closed
  //     this.eyeOpen = true; // Eye open state
  //   } 
  
  //   update() {
  //     // Update scaling based on angle
  //     this.scaleFactor = 1 + 0.2 * sin(angle); // Scaling effect
  //     angle += 0.01; // Increment angle for animation
  
  //     // Wiggling pumpkin 
  //     this.x += this.wiggleAmplitude * sin(frameCount * this.wiggleSpeed); // Wiggling side to side
  
  //     // Blinking eyes
  //     this.blinkTimer++;
  //     if (this.blinkTimer >= this.blinkDuration) {
  //       this.blinkTimer = 0; // Reset timer
  //       this.eyeOpen = !this.eyeOpen; // Toggle eye state
  //     }
  //   }
  
  //   display() { 
  //     push(); 
  //     translate(this.x, this.y);
  //     scale(this.scaleFactor); // Apply scaling
  
  //     // Pumpkin body
  //     fill(255, 120, 0); // Orange color
  //     noStroke(); // No outline for the pumpkin
  //     ellipse(0, -20, 100, 50); // main body
  //     ellipse(0, 10, 115, 60); // bottom part
  
  //     // Pumpkin head piece on top 
  //     fill(20, 200, 10); // green color
  //     rect(0, -50, 20, 30); // top head Stem
  
  //     // Eyes of pumpkin 
  //     fill(0); // Black color for eyes
  //     if (this.eyeOpen) {
  //       triangle(-40, -10, -30, -20, -30, 0); // Left eye
  //       triangle(40, -10, 30, -20, 30, 0); // Right eye
  //     } else {
  //       // Closed eyes
  //       fill('red'); // red color - left eye
  //       rect(-30, -15, 10, 15); // Left closed eye
  //       fill('#A251FA'); // purple color - right eye 
  //       rect(20, -15, 10, 15); // Right closed eye
  //     }
  
  //     // Mouth
  //     arc(0, 10, 40, 35.5, 0, PI); // Mouth
  //     // Teeth
  //     fill(0); // White color for teeth
  //     rect(0, 20, 15, 5); // Down teeth
  //     rect(0, 15, 5, 5); // Middle one 
  //     rect(-10, 15, 15, 5); // Top left teeth 
  
  //     pop(); // End of pumpkin 
  //   }
  // }
  
  // // Orange loop lines
  // function x1(t) {
  //   return sin(t / 10) * 115 + sin(t / 10) * 120 + sin(t / 10) * 10;
  // }
  
  // function y1(t) {
  //   return cos(t / 20) * 10 + cos(t / 5) * 100 + cos(t / 40) * 15;
  // }
  
  // function x2(t) {
  //   return sin(t / 10) * 115 + sin(t / 10) * 120 + sin(t / 10) * 10;
  // }
  
  // function y2(t) {
  //   return cos(t / 20) * 10 + cos(t / 25) * 100 + cos(t / 40) * 15;
  // }
  
  // // Green loop lines 
  // function x1_2(t) {
  //   return sin(t / 5) * 10 + sin(t / 100) * 80 + sin(t / 100) * 10;
  // }
  
  // function y1_2(t) {
  //   return cos(t / 10) * 20 + cos(t / 10) * 100 + cos(t / 20) * 20;
  // }
  
  // function x2_2(t) {
  //   return sin(t / 5) * 10 + sin(t / 10) * 80 + sin(t / 100) * 10;
  // }
  
  // function y2_2(t) {
  //   return cos(t / 10) * 20 + cos(t / 10) * 100 + cos(t / 20) * 20;
  // }
  








 ////////////////////////////   
// let t = 0;
// let t2 = 0; // Parameter for the second set of lines
// let t3 = 0; // Parameter for the third set of lines

// function setup() {
//   createCanvas(720, 500); 
// }

// function draw() {
//   background('beige');
//   translate(width / 5, height / 5);
  
//   // Draw first set of lines
//   stroke('orange');
//   strokeWeight(2);
//   for (let i = 0; i < 200; i++) {
//     line(x1(t + i), y1(t + i), x2(t + i) + 100, y2(t + i) + 100);
//   }
//   t += 0.20; //movement of speed (faster o r slower)  

//   // Draw second set of lines
//   stroke('green');
//   strokeWeight(2);
//   for (let i = 0; i < 200; i++) {
//     line(x1_2(t2 + i), y1_2(t2 + i), x2_2(t2 + i) + 30, y2_2(t2 + i) + 30); 
//   }
//   t2 += 0.05;

//   // Draw third set of lines
//   stroke('purple'); // Change color for the third set of lines
//   strokeWeight(2);
//   for (let i = 0; i < 200; i++) {
//     line(x1_3(t3 + i), y1_3(t3 + i), x2_3(t3 + i) + 50, y2_3(t3 + i) + 50); 
//   }
//   t3 += 0.1; // Different speed for the third set of lines
// }

// // Yellow loop lines 
// function x1(t) {
//   return sin(t / 20) * 15 + sin(t / 20) * 120 + sin(t / 10) * 140;
// }

// function y1(t) {
//   return cos(t / 20) * 10 + cos(t / 25) * 100 + cos(t / 40) * 125;
// }

// function x2(t) {
//   return sin(t / 10) * 15 + sin(t / 20) * 120 + sin(t / 40) * 140;
// }

// function y2(t) {
//   return cos(t / 20) * 10 + cos(t / 25) * 100 + cos(t / 10) * 125;
// }

// // White loop lines 
// function x1_2(t) {
//   return sin(t / 5) * 10 + sin(t / 10) * 80 + sin(t / 10) * 10;
// }

// function y1_2(t) {
//   return cos(t / 10) * 20 + cos(t / 10) * 100 + cos(t / 20) * 20;
// }

// function x2_2(t) {
//   return sin(t / 5) * 10 + sin(t / 10) * 80 + sin(t / 10) * 10;
// }

// function y2_2(t) {
//   return cos(t / 10) * 20 + cos(t / 10) * 100 + cos(t / 10) * 20;
// }

// // New cyan loop lines
// function x1_3(t) {
//   return sin(t / 3) * 20 + sin(t / 5) * 60 + sin(t / 8) * 30;
// }

// function y1_3(t) {
//   return cos(t / 3) * 15 + cos(t / 7) * 90 + cos(t / 5) * 40;
// }

// function x2_3(t) {
//   return sin(t / 3) * 20 + sin(t / 5) * 60 + sin(t / 8) * 30;
// }

// function y2_3(t) {
//   return cos(t / 3) * 15 + cos(t / 7) * 90 + cos(t / 5) * 40;
// }


/////////////////




// let t = 0;  // Parameter for the 1st set of lines
// let t2 = 0; // Parameter for the 2nd set of lines
// let t3 = 0; // Parameter for the 3rd set of lines

// function setup() {
//   createCanvas(720, 500); 
// }

// function draw() {
//   background('beige');
//   translate(width / 5, height / 5);
  
//   // Draw first set of lines
//   stroke('orange');
//   strokeWeight(2);
//   for (let i = 0; i < 200; i++) {
//     line(x1(t + 10), y1(t + 20), x2(t + 10) + 100, y2(t + i) + 100);
//   }
//   t += 0.20; //movement of speed (faster or slower) - given value of t - should add either +or- - if not (it will not display the flow of the movement it stops) 

//   // Draw 2nd set of lines
//   stroke('brown');
//   strokeWeight(2);
//   for (let i = 0; i < 100; i++) {
//     line(x1(t - 10), y1(t - 10), x2(t - i) + 500, y2(t - i) + 100);
//   }
//   t += 0.001; //movement of speed (faster or slower)  

  
  
//   // Draw second set of lines
//   stroke('green');
//   strokeWeight(2);
//   for (let i = 0; i < 200; i++) {
//     line(x1_2(t2 + i), y1_2(t2 + i), x2_2(t2 + i) + 10, y2_2(t2 + i) + 100); 
//   }
//   t2 += 0.10;

  
  
//   // Draw third set of lines
//   stroke('purple'); // Change color for the third set of lines
//   strokeWeight(2);
//   for (let i = 0; i < 200; i++) {
//     line(x1_3(t3 + 200), y1_3(t3 + 100), x2_3(t3 + i) + 300, y2_3(t3 + i) + 100); 
//   }
//   t3 += 0.1; // Different speed for the third set of lines
// }



// // Orange loop lines
// function x1(t) {
//   return sin(t / 10) * 115 + sin(t / 10) * 120 + sin(t / 10) * 10;
// }

// function y1(t) {
//   return cos(t / 20) * 10 + cos(t / 5) * 100 + cos(t / 40) * 15;
// }

// function x2(t) {
//   return sin(t / 10) * 115 + sin(t / 10) * 120 + sin(t / 10) * 10;
// }

// function y2(t) {
//   return cos(t / 20) * 10 + cos(t / 25) * 100 + cos(t / 40) * 15;
// }



// // Green loop lines 
// function x1_2(t) {
//   return sin(t / 5) * 10 + sin(t / 100) * 80 + sin(t / 100) * 10;
// }

// function y1_2(t) {
//   return cos(t / 10) * 20 + cos(t / 10) * 100 + cos(t / 20) * 20;
// }

// function x2_2(t) {
//   return sin(t / 5) * 10 + sin(t / 10) * 80 + sin(t / 100) * 10;
// }

// function y2_2(t) {
//   return cos(t / 10) * 20 + cos(t / 10) * 100 + cos(t / 20) * 20;
// }




// // Purple loop lines
// function x1_3(t) {
//   return sin(t / 3) * 20 + sin(t / 5) * 60 + sin(t / 8) *  30;
// }

// function y1_3(t) {
//   return cos(t / 3) * 15 + cos(t / 7) * 90 + cos(t / 5) * 10;
// }

// function x2_3(t) {
//   return sin(t / 3) * 20 + sin(t / 5) * 60 + sin(t / 8) * 30;
// }

// function y2_3(t) {
//   return cos(t / 3) * 15 + cos(t / 7) * 90 + cos(t / 5) * 10;
// }
