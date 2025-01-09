//Project 3 -  Clock Visualization 
//images in site 
// added from 6 am to 10pm = 8pm dark 

let s, m, h;
let font1; 
let dt, nt, tt; //day and night mode 
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 

let waterLevelSeconds = 0;  // variable given to track water level in seconds
let waterLevelMinutes = 0;  // variable given to track water level in minutes
let waterLevelHours = 0;  // variable give to track water level in hours
let drops = [];  // initialize the drops array
let containerHeight = 300;  // height of the container for water levels
//will reflect on all 

function preload()  { 
  font1 = loadFont('assets/waterfont.ttf'); 
}

// Alarm settings starts here = added here (from 6am to 10pm with different messages given)

    let alarm = { startHour: 6, endHour: 8, isActive: false, message: "Good Morning! Wake up!" }; // 6am to 8am

    let alarm1 = { startHour: 8, endHour: 9, isActive: false, message: "Breakfast time, fresh up and get ready for college!" }; // 8am to 9am

    let alarm2 = { startHour: 9, endHour: 10, isActive: false, message: "Attend the online/inperson class!" }; // 9am to 10am

    let alarm3 = { startHour: 10, endHour: 11, isActive: false, message: "Time to add your to-do list for today and this week!" }; // 10am to 11am

    let alarm4 = { startHour: 11, endHour: 12, isActive: false, message: "Take a Break/Listen to Music while working on assignments" }; // 11am to 12pm

    let alarm5 = { startHour: 12, endHour: 13, isActive: false, message: "Eat and Watch = Luch Time - Open Youtube!" }; //12pm to 1pm 

    let alarm6 = { startHour: 13, endHour: 15, isActive: false, message: "Time to take Break if needed while working" }; //1pm to 3pm 

    let alarm7 = { startHour: 15, endHour: 17, isActive: false, message: "Snack time - have nuts = Work Mode On and time to work on Blender"}; //3pm to 5pm 

    let alarm8 = { startHour: 17, endHour: 18, isActive: false, message: "Back to home and Work Out Time - Get Active" }; //5pm to 6pm 

    let alarm9 = { startHour: 18, endHour: 19, isActive: false, message: "Prep time - Time to Cook & Eat Dinner!" }; //6pm to 7pm 

    let alarm10 = { startHour: 19, endHour: 20, isActive: false, message: "Check Canvas and work time - Drink Smoothie!" }; //7pm - 8pm 

    let alarm11 = { startHour: 20, endHour: 21, isActive: false, message: "Spend time with family" }; //8pm - 9pm 

    let alarm12 = { startHour: 21, endHour: 22, isActive: false, message: "Indoor Walk for 30mins after work is completed" }; //9pm - 10pm 

    let alarm13 = { startHour: 22, endHour: 6, isActive: false, message: "Bed Time - Don't forget to wash your face before going to bed!" };

/////////////////////////////////////////////////////////////
//Setup function starts here// 

function setup() {
  createCanvas(1000, 800);
  dt = color(255, 204, 100); // daytime color
  nt = color(50); // nighttime color
  tt = dt; // daytime

  // Set the background color based on the current day (only once)
  colorForDayOfWeek(new Date().getDay());
}




function draw() {
  // background(255, 204, 100);  // background color
  
  // Set the background color (should be updated once based on the day)
  background(tt);

  s = second();
  m = minute();
  h = hour();
  //Week Days = Mention on screen // 

  //Given day and night time 
 if (h < 6 || h > 17) {
  tt = nt; // Night
} else {
  tt = dt; // Day
}



// Set the font color based on time of day
if (h < 6 || h > 17) { // Nighttime
  fill(255);  // White text for night
} else { // Daytime
  fill(0);  // Black text for day
}

 
 // Apply the custom font here
  textFont(font1); // Use the loaded font
  fill(200, 100, 200);  // Light text color
  textSize(40);
  // textStyle(BOLD);
  text(days[new Date().getDay()], 40, 80); // Show current day
  
  

  function displayAlarmMessage(message, x, y) {
  fill(0);  // Black text
  textSize(25);
  text(message,44,130);  // display the alarm message for each coordinates
}
  // Check if the current hour is within the alarm's time range
  checkAlarm(alarm); // Check for alarm (6am - 8am)
  checkAlarm(alarm1); // Check for alarm1 (8am - 9am)
  checkAlarm(alarm2); // Check for alarm2 (9am to 10am)
  checkAlarm(alarm3); // Check for alarm3 (10am - 11am)
  checkAlarm(alarm4); // Check for alarm4 (11am - 12pm)
  checkAlarm(alarm5); // Check for alarm5 (12pm - 1pm)
  checkAlarm(alarm6); // Check for alarm6 (1pm - 3pm)
  checkAlarm(alarm7); // Check for alarm7 (3pm - 5pm)
  checkAlarm(alarm8); // Check for alarm8 (5pm - 6pm)
  checkAlarm(alarm9); // Check for alarm9 (6pm - 7pm)
  checkAlarm(alarm10); // Check for alarm10 (7pm - 8pm)
  checkAlarm(alarm11); // Check for alarm10 (8pm - 9pm)
  checkAlarm(alarm12); // Check for alarm11 (9pm - 10pm)
  checkAlarm(alarm13); // Check for alarm12 (Sleep Mode wake up at 6am)
  
  // Display message if alarm is active
  if (alarm.isActive) {
    displayAlarmMessage(alarm.message, 40, 100);
  } else if (alarm1.isActive) {
    displayAlarmMessage(alarm1.message, 40, 100);
  } else if (alarm2.isActive) {
    displayAlarmMessage(alarm2.message, 40, 100);
  } else if (alarm3.isActive) {
    displayAlarmMessage(alarm3.message, 40, 100);
  } else if (alarm4.isActive) {
    displayAlarmMessage(alarm4.message, 40, 100);
  } else if (alarm5.isActive) {
    displayAlarmMessage(alarm5.message, 40, 100);
  } else if (alarm6.isActive) {
    displayAlarmMessage(alarm6.message, 40, 100);
  } else if (alarm7.isActive) {
    displayAlarmMessage(alarm7.message, 40, 100);
  } else if (alarm8.isActive) {
    displayAlarmMessage(alarm8.message, 40, 100);
  } else if (alarm9.isActive) {
    displayAlarmMessage(alarm9.message, 40, 100);
  } else if (alarm10.isActive) {
    displayAlarmMessage(alarm10.message, 40, 100);
  } else if (alarm11.isActive) {
    displayAlarmMessage(alarm11.message, 40, 100);
  } else if (alarm12.isActive) {
    displayAlarmMessage(alarm12.message, 40, 100);
  } if (alarm13.isActive) {
    displayAlarmMessage(alarm13.message, 40, 100);  // Bed Time message
  }
  
  
  // Function to check if the current time is within the alarm's time range
function checkAlarm(alarm) {
  if (h >= alarm.startHour && h < alarm.endHour) {
    alarm.isActive = true;  // Activate alarm if within the time range
  } else {
    alarm.isActive = false;  // Deactivate alarm if outside the time range
  }
}
  
  
  
  
  
  
  
  
  //////////////////////////////////////
 translate(80,100); // over all 
  
  frameRate(20);  // set frame rate
  
  let ms = map(s, 0, 59, 0, width); 
 
  
  // Mapping for water level changes based on seconds, minutes, and hours
  let mrs = map(s, 0, 59, 0, containerHeight);  // water level increase per second
  let mrm = map(m, 0, 59, 0, containerHeight);  // water level increase per minute
  let mrh = map(h, 0, 23, 0, containerHeight);  // water level increase per hour
  
  // Updated here of water levels for seconds, minutes, and hours
  waterLevelSeconds = mrs;
  waterLevelMinutes = mrm;
  waterLevelHours = mrh;  

///////////////////////////////  

  
 //function define//
  // draw water bottle and water filling inside it
  drawWaterBottle();
 
  //draw water bottles set in hours
  drawWaterBottles(); 
  
  // draw water level based on seconds, minutes, and hours
  drawWaterLevels();
  
  // draw the container shape based on minutes
  drawContainerShape(m);
  
  // add the pouring water drops container for seconds
  drawWaterDrops(s);
  
 //given each day each change of background color 
 colorForDayOfWeek(new Date().getDay());

 
//quad shape
translate(-30, 350);
fill(300, 160);

//  quad, maintaining the same size and position as the rect
quad(10, -60,  // Top-left corner
     370, -60,  // Top-right corner
     320, 290,  // Bottom-right corner
     60, 290);  // Bottom-left corner
//quad(60, 80, 370, 80, 320, 270, 90, 270);  // Increased size

}

//minutes bottle
// Function to draw the water bottle
function drawWaterBottle() {
 // translate(10, 10); 
  fill(200);  // grayish color for bottle
  rect(380, 250, 130, 340, 20);  // Bottle body
  //moves left/right, up/down, y axis height increase/decrease, curves corners  
  
  // Bottle neck
  fill(180);  // Slightly darker gray for neck
  rect(430, 190, 30, 60, 10);
  
  // Bottle cap
  fill(150);  // Even darker gray for cap
  rect(435,180, 20, 10, 5);
}
///////

// Convert from rect to quad using containerHeight - waterLevelSeconds
let xPos = 10 + (containerHeight - waterLevelSeconds); // Calculate y position based on water level
let yPos = 10; 
let width = 240; // Fixed width of the rectangle

//seconds 
// Function to draw the water levels
function drawWaterLevels() {
// Water level representation for seconds (blue color)
fill(0, 191, 300);  // Blue color for water 
//  rect(45, 300 + (containerHeight - waterLevelSeconds), 240, waterLevelSeconds, 20, 20);

  
 quad(
  10, xPos, yPos  + // Top-left corner
  60 + width, xPos, yPos +  // Top-right corner
  10 + width, xPos + yPos + waterLevelSeconds, // Bottom-right corner (height of the "water" level)
  60, xPos + yPos + waterLevelSeconds,   // Bottom-left corner
);
  
  //rect(595, 310 + (containerHeight - waterLevelSeconds), 240, waterLevelSeconds, 20, 20);
 // quad(10, -50,  // Top-left corner
  //   360, -50,  // Top-right corner
   //  310, 270,  // Bottom-right corner
   //  60, 270);  // Bottom-left corner
  
  // Water filling for seconds


//minutes
 // function drawWaterBottle() {
  // fill(200);  // grayish color for bottle
  // rect(186, 260, 80, 330, 20);  // Bottle body
  //moves left/right, up/down, y axis height increase/decrease, curves corners  
  
  // Bottle neck
  // fill(180);  // Slightly darker gray for neck
  // rect(210, 200, 30, 60, 10);
  
  // Bottle cap
  // fill(150);  // Even darker gray for cap
  // rect(215,190, 20, 10, 5);
 // }
  
  
////////////////inside the container - water  
//minutes  
  // Water level representation for minutes (light blue color)
  fill(162, 81, 250)  // Light blue color for water
  rect(395, 280 + (containerHeight - waterLevelMinutes), 100, waterLevelMinutes, 10, 10); // Water filling for minutes
  
  
//hours   
  // Water level representation for hours (light green color)
  fill(30, 193, 33);  // Greenish color for water (hours)
  
 rect(580, 350 + (containerHeight - waterLevelHours), 260, waterLevelHours, 10, 10); // Water filling for hours
}

///////
//hours - water bottle 
  function drawWaterBottles() {  
    
  fill(200);  // grayish color for bottle
  rect(560,240, 300, 430, 10, 10, 20, 20);  // Bottle body
  //moves left/right, up/down, y axis height increase/decrease, curves corners  
  
  // Bottle neck
  fill(180);  // Slightly darker gray for neck
  rect(680, 175, 60, 80, 10);
  
  // Bottle cap
  fill(150);  // Even darker gray for cap
  rect(695, 160, 30, 20, 5);
  }
    


/////////////////////////////
// Function to draw the container shape
function drawContainerShape(minutes) {
  push();
 // translate(250, 200); 
  fill(35, 206, 235, 200);  // Sky blue color for the container
  // fill('#A251FA'); 
  //fill(162, 81, 250); 
  noStroke(); 

  // Container shape (scaled based on minutes)
  let widthFactor = map(minutes, 0, 60, 10, 150);  // Scale width based on minutes
  let heightFactor = map(minutes, 0, 60, 30, 200);  // Scale height based on minutes
  
  // Draw container as a quadrilateral
//  quad(0, 0, widthFactor, 0, widthFactor, heightFactor, 0, heightFactor);  
 // pop();  // Reset the transformation to original state
}


// Function to draw the water drops (pouring drops container)
function drawWaterDrops(currentSecond) {
  // Ensure the drops array is initialized
  if (!drops[currentSecond]) {
    drops[currentSecond] = 0;  // Initialize drop at the top
  }

  // Move all the drops down based on the seconds
  for (let i = 0; i < drops.length; i++) {
    if (drops[i] !== undefined) {  // Only move if the drop exists
      drops[i] += 2;  // Move the drop down (adjust the speed by changing the number)

      push(); 
      fill(255);  // White color for the drops
      noStroke();
      //ellipse(430, 200 + drops[i], 10, 20);  // Draw the drop at its new position
       ellipse(150, 155 + drops[currentSecond, i], 20, 20);  // Draw the drop at its new position
      pop();       

      // Stop the drop at the bottom of the container
      if (drops[i] > 400) {
        drops[i] = 15;  // Stop at the container's height
        // Stop the drop at the bottom of the container
    //  if (drops[i] > containerHeight) {
     //   drops[i] = containerHeight;  // Stop at the container's height
      }
    }
  }
  
  // Top one - pouring water drops from top = seconds
  push();  // Start a new transformation context
  translate(120, 300);
  rotate(-90); 
  fill(10, 40, 100);  // tone blue
  rect(100, 0, 100, 100, 10, 10);  // Container for drops
  pop();  // End the transformation context
}


// Function to update the background color based on the current day
 function colorForDayOfWeek(day) {


  switch (day) {
    case 0: tt = color(255, 165, 0); break; // Sunday - Orange
  } 
} 
//     case 1: tt = color(20, 200, 100); break;  // Monday - Green 

//     case 2: tt = color(175, 1, 100); break;  // Tuesday - tone pink 

//     case 3: tt = color(150, 170, 1); break;  // Wednesday - mehindi green 

//     case 4: tt = color(250, 190,10); break;  // Thursday - bright yellow 

//     case 5: tt = color(190, 30, 10); break;   // Friday - red 

//     case 6: tt = color (130, 100, 220); break;  // Saturday - tint purple 

//     default: tt = color(255, 204, 100); break; //yellow 
//   }
// }

//250, 190,10 - yellow 