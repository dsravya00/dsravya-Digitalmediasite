

function setup() {
  createCanvas(800, 600);
  background(100, 170, 190); //background color
  noStroke(0); // remove stroke border
  triangle(-200, 0, 310, 0, 50, 300); //added in the canvas on top left
  quad(50, 62, 86, 50, 50, 38, 14, 50);
  line(30,20,80,75);
 
 
  //Syntax of Quad shape -
  //quad(x1, y1, x2, y2, x3, y3, x4, y4, [detailX], [detailY])
 
 
  }
 function draw() {
 
 
    //draw the triangle
    //draw the rectangle
    //draw the ellipse
    //draw the quad
    //draw the line 

        // triangle(x1, y1, x2, y2, x3, y3)
        //Syntax code - rectangle rect(x, y, w, [h], [tl], [tr], [br], [bl])
        //Syntax code - circle (x,y,d)
    
  
          // circle(200,50,25,25)
          // rect(40,60,100,50);
          // triangle(100, 60, 10, 10, 20, 50);
          // quad(50, 62, 86, 50, 50, 38, 14, 50);
          //line (30,20,80,75);
        
          // display on top-left of the canvas
        
        let y1 = mouseY;
          //if statments
          if (mouseX < 60)  {
          // bottom area gray, white, and black ones = bottom-left - mouse playing with
            for (let i = 30; i < mouseY; i += 10) {
              r1 = random(35);
              fill(r1); //changing the color of shape
              rect(i+20, y1, 5, 5);
              let angle = frameCount * 1;
              rotate(angle);
              console.log("r1 = " + r1);
            noStroke;
            }
          }
 // changes the background and whole thing!
  // let r = random(30);
  // let m = mouseX;
   // if (m < width/2)  {
  //   background(m);
  //   ellipse(m, height/2, r * 5, r * 2);
  // } else {
  //   background(width -m );
  //   rect(m, height/2, r * 2, r * 5);
  // }
    
    for (let i=10; i < 50; i+=20) {
        fill(100,5,90);
        let angle = frameCount * 0.1;
        rotate(angle);
        triangle(100, 60, 40, 10, 30, 50);
          //Syntax code - //triangle (x1, y1, x2, y2, x3, y3)
        console.log(i);
        //noLoop();
        frameRate(3);
        //nested for loop
          for (var x = 5; x <= 400; x+=20) {
            for (var y = 5; y <= 600; y+=25) {
              fill(x,y,10);
              ellipse(x,y,5,5);
              // noStroke(0);  
              angle += 0.05; // Increment the angle for rotation
              // text("x", 100, 100);
            }

 

 
      //quad shape - use mouse!
        // If statement for the quad shape
        if (mouseX > 200 && mouseX < 600 && mouseY > 100 && mouseY < 300) {
          fill(205, 120, 10, 150); // Color with some transparency
 
 
          // Calculate center position for the quad
          let centerX = (mouseX - 200) / 2 + 200; // Adjusting to center in the defined area
          let centerY = (mouseY - 100) / 2 + 100; // Adjusting to center in the defined area
         
          // Draw the quad centered around the mouse position
          quad(centerX - 30, centerY - 50, centerX + 30, centerY - 50, centerX + 100, centerY + 50, centerX - 50, centerY + 50);
        }
 
        
 
 
 
 
 
            // let y1 = mouseY; - it worked!
            // if (mouseX < 60) {}
            // // If statement for the quad shape
            // if (mouseX > 200 && mouseX < 600 && mouseY > 100 && mouseY < 300) {
            //   fill(205, 120, 10, 150); // Red color with some transparency
            //   quad(60, 62, 86, 350, 50, 200, 140, 250);
            //   // quad(100, 62, 86, 50, 50, 38, 14, 50); // Draw the quad when conditions are met
            // }
    
        }
        
    
    if (mouseX > 40)  {
      let mx = mouseX; // if statments
      
        //rect - color ones(on right - vertical ones)
        for (let i = 10; i < mouseX; i += 50) {
          r2 = random(80,65);
          fill('#fae'); //baby pink color
          // fill(r2,45); //changing the color of shape
          rect(mx, i+5, 10, 10); // size of the shape
          console.log("r2 = " + r2);
          //noloop();
        
          }
        
      if (mouseY > 50)  {
        //triangle -
        for (let i = 100; i < mouseY; i += 120) {
          r3 = random(10, 20);
          fill(200,100,0,r3); //changing the color of shape
          triangle( i+5, y1, 50, 50 );
          console.log("r3 = " + r3);
          triangle(mouseX+10,y1,20,20);  // size of the shape
          //noloop();
      }
        
        //ellipse -
          for (let i = 1; i < mouseX; i += 1) {
          fill(25,80,10,10); //changing the color of shape
          ellipse(mouseX+8,y1,10,10); // size of the shape
          }

        //draw line 
        // Style the line.
        stroke(10) // if you add 'magenta' in brackets will appear in pink 
        fill(10,10,10,10)
        strokeWeight(1);
        line(10, 1, 1, 1);
          
        

          // function setup() {
          
          // }
          // function draw() {
          //   // Rotate around the y-axis.
          //   rotateY(frameCount * 0.01);
          //   // Set triangle color
          //   fill(255, 0, 0); // Red color
          //   // Draw the triangle.
          //   triangle(-20, 25, 8, -30, 36, 25);
          // }
          // // Optional: Control rotation speed with mouse
          // function mouseDragged() {
          //   let speed = map(mouseX, 0, width, 0.001, 0.05);
          //   rotateY(frameCount * speed);
          // }
      }

    

      // if (mouseY > 50)  {
      //   //triangle -
      //   for (let i = 100; i < mouseY; i += 120) {
      //     r3 = random(10, 20);
      //     fill(200,100,0,r3); //changing the color of shape
      //     console.log("r3 = " + r3);
      //     stroke(magenta); //adding magenta - gives a thick line on gray canvas
      //     strokeweight(20); 
      //     noloop();
        }
    
   
      }
  
             }
  