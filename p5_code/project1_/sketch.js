
let bgc;
let acount;
let currentKey = '1'; // start #1 

function setup() {
    createCanvas(900, 600);
    background(255);
    smooth();
    bgc = color(255);
    acount = 40;
}

function draw() {
    // Clear the canvas if 'x' is pressed
    if (keyIsPressed && (key === 'x' || key === 'X')) {
        background(255);
    }2
    
    // Draw based on mouse press and current key
    if (mouseIsPressed) {
        drawChoice(currentKey);
    }
}


// // ///Create 3 or more unique brushes/stamps./// 
//*need this section//  
function drawChoice(key) {
    stroke(4);
    switch (key) {
        case '1':
            console.log("1");  // draws black line
            drawLine(color(0), mouseX, mouseY, pmouseX, pmouseY);
            break;4

        case '2':
            console.log("2");  // draws ellipse
            fill(mouseIsPressed ? color(0) : color(255, 204, 0));
            noStroke();
            ellipse(mouseX, mouseY, 20, 20); // Draw a circle with a diameter of 20
            break;

        case '3':
            console.log("3");  // draws flower
            drawFlower(mouseX, mouseY, 25, 10);
            break;

        case '4':
            console.log("4"); // draws sphere
            drawSphere(color(0, 200, 100), mouseX, mouseY, 30);
            break;

        case '5':
            console.log("5"); // draws triangle
            drawTriangle(color(0, 255, 255), mouseX, mouseY, 30);
            break;

        case '6':
            console.log("6"); // draws leaf shape
            drawLeaf(color(0, 128, 0), mouseX, mouseY);
            break;

        case '7':
            console.log("7"); // draws tree
            drawTree(mouseX, mouseY);
            break;

        case '8':
            console.log("8");  // draws crazy brush
            CrazeBrush(acount, mouseX, mouseY);
            acount = (acount > 50) ? 1 : acount + 0.5;
            break;
  
          default:
              console.log("None"); // Default case
              break;   

    }
}
/// based on given value - write down the funtion below!

// Function to draw a line
function drawLine(col, lx, ly, px, py) {
    strokeWeight(1);
    stroke(col);
    line(lx, ly, px, py);
}
// Function to draw a sphere
function drawSphere(col, x, y, diameter) {
    fill(col);
    noStroke();
    ellipse(x, y, diameter, diameter);
}

// Function to draw a triangle
function drawTriangle(col, x, y, size) {
    fill(col);
    noStroke();
    triangle(x, y, x - size, y + size, x + size, y + size);
}

// Function to draw a flower
function drawFlower(centerX, centerY, petalLength, numPetals) {
    stroke(20);
    strokeWeight(10);
    for (let i = 0; i < numPetals; i++) {
        let angle = TWO_PI / numPetals * i;
        let x1 = centerX + cos(angle) * petalLength;
        let y1 = centerY + sin(angle) * petalLength;
        line(centerX, centerY, x1, y1);
    }
    stroke(0, 255, 0);
    strokeWeight(5);
    point(centerX, centerY); // Draw the center of the flower
    
}

// Function to draw a leaf shape
function drawLeaf(col, x, y) {
    fill(col);
    noStroke();
    beginShape();
    vertex(x, y);
    bezierVertex(x + 40, y - 50, x + 40, y - 30, x, y); // Left curve
    bezierVertex(x - 5, y + 20, x - 40, y + 10, x, y); // Right curve
    bezierVertex(x + 40, y - 50, x + 40, y - 10, x, y); 
    bezierVertex(x - 50, y + 30, x - 40, y + 40, x, y); 
    bezierVertex(x + 40, y - 50, x + 40, y - 10, x, y); 
    bezierVertex(x - 10, y + 90, x - 80, y + 90, x, y); 
    endShape(CLOSE);
}

// Function to draw a tree
function drawTree(x, y) {
    // Draw trunk
    fill(129, 40, 20); // Brown color
    rect(x - 10, y, 20, 50); // Trunk
    noStroke();

    // Draw leaves (a simple triangle for the foliage)
    fill(34, 139, 34); // Green color
    triangle(x - 60, y, x + 80, y, x, y - 70); // Leaves
    //x - #, x + 70 - (top triangle part moves out towards the left/right)

}

// Function for the crazy brush
function CrazeBrush(kcount, lx, ly) {
    strokeWeight(kcount);
    fill(kcount * 30, random(20, 255), 0);
    noStroke();
    rect(lx, ly, 150, 60, 0, 240);
}

function eraser( k, lx, ly, sz) { // eraser tool = hit 'x'//
  fill(k);
  stroke(k);
  ellipse(lx, ly, sz,sz);
}

// Key press event to change the current brush
function keyPressed() {
    currentKey = key; // Update currentKey to the pressed key
}




function clear_print() {

  // these 2 options let you choose between clearing the background
  // and saveing the current image as a file.
  if (key == 'x' || key == 'X') {
    background(255);
  } else if (key == 'p' || key == 'P') {
    saveFrames('image-0', 'png', 1, 1);
    key = '';  // resets the key so it does not make more than one image.
  }

}

// mouseX ==> 100
// mpuseX --> 110  --<pmouseX 100

// mouseX > 100
// mouseX > 110
// pmouseX> 100
// mouseX > 120
// pmouseX> 110
// mouseX > 130
