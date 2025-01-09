// Example 5.3


// This uses the transformation matrix tools to move,
//rotate and scale things as batch operations// Example 5.3 
// 16x16

//add text, fix page 3 

// total 14 added 

//2 from Alex, Jared - total 4 
//4 from Sravya - 4 arr text, and 6 arr grid arrays() 

//sravya's code 
var happyfacearr = [ 
    //unhappy face 
    //0 - smile 
    //1 - hairstyle 
    //2 - sunglasses
    //3 - mouth open/teeth 
    [5, 1, 3, 0, 5, 0, 0, 1, 1, 0, 0, 5, 0, 3, 1, 5], 
    [5, 1, 0, 0, 5, 0, 1, 1, 1, 1, 0, 5, 0, 0, 1, 5], 
    [5, 1, 3, 4, 4, 0, 1, 1, 1, 1, 0, 4, 4, 3, 1, 5], 
    [1, 0, 0, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 0, 0, 1], 
    [0, 3, 5, 0, , 2, 2, 2, 2, 2, 2, 0, 0, 5, 3, 0], 
    [0, 5, 0, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 0, 5, 0], //s
    [5, 0, 3, 0, 2, 2, 4, 2, 2, 4, 2, 2, 0, 3, 0, 5],
    [1, 0, 4, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 0, 1],
    [1, 0, 3, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 3, 0, 1], 
    [1, 0, 4, 3, 2, 4, 2, 2, 2, 2, 4, 2, 3, 4, 0, 1], 
    [0, 5, 3, 0, 2, 2, 4, 4, 4, 4, 2, 2, 0, 3, 5, 0], //e
    [0, 3, 5, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 5, 3, 0], 
    [1, 0, 0, 5, 4, 0, 1, 1, 1, 1, 0, 4, 5, 0, 0, 1],
    [5, 1, 3, 0, 5, 0, 1, 1, 1, 1, 0, 5, 0, 3, 1, 5],
    [5, 1, 0, 0, 5, 0, 1, 1, 1, 1, 0, 5, 0, 0, 1, 5], 
    [5, 1, 3, 0, 5, 0, 0, 1, 1, 0, 0, 5, 0, 3, 1, 5]
];

//Jared's code 
 var jaredcode = [ //1,3,4,5,6,7,8,9
    [4, 4, 5, 5, 1, 1, 4, 4, 1, 1, 4, 4, 1, 1, 9, 9], 
    [4, 4, 5, 5, 1, 1, 4, 4, 1, 1, 4, 4, 1, 1, 9, 9], 
    [5, 5, 7, 7, 1, 1, 7, 7, 8, 8, 1, 1, 7, 7, 1, 1], 
    [5, 5, 7, 7, 1, 1, 7, 7, 8, 8, 1, 1, 7, 7, 1, 1], 
    [1, 1, 3, 3, 3, 3, 4, 4, 6, 6, 3, 3, 3, 3, 7, 7], 
    [1, 1, 3, 3, 3, 3, 4, 4, 6, 6, 3, 3, 3, 3, 7, 7], 
    [7, 7, 3, 3, 2, 2, 1, 1, 1, 1, 2, 2, 3, 3, 8, 8],
    [7, 7, 3, 3, 2, 2, 1, 1, 1, 1, 2, 2, 3, 3, 8, 8],
    [1, 1, 6, 6, 7, 7, 3, 3, 3, 3, 7, 7, 9, 9, 1, 1],
    [1, 1, 6, 6, 7, 7, 3, 3, 3, 3, 7, 7, 9, 9, 1, 1],
    [7, 7, 9, 9, 3, 3, 2, 2, 2, 2, 3, 3, 1, 1, 4, 4],
    [7, 7, 9, 9, 3, 3, 2, 2, 2, 2, 3, 3, 1, 1, 4, 4],
    [4, 4, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 9, 9],
    [4, 4, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 9, 9],
    [1, 1, 7, 7, 3, 3, 7, 7, 4, 4, 3, 3, 9, 9, 1, 1],
    [1, 1, 7, 7, 3, 3, 7, 7, 4, 4, 3, 3, 9, 9, 1, 1]
  ];

//Alex's code
 var alexcode = [
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1], 
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], 
    [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1], 
    [0, 0, 1, 3, 3, 1, 0, 0, 0, 0, 1, 3, 3, 1, 0, 0], 
    [0, 0, 1, 3, 3, 1, 0, 0, 0, 0, 1, 3, 3, 1, 0, 0], 
    [0, 0, 1, 1, 3, 1, 0, 0, 0, 0, 1, 1, 3, 1, 0, 0],    
    [0, 0, 1, 1, 3, 1, 0, 0, 0, 0, 1, 1, 3, 1, 0, 0], 
    [0, 0, 1, 3, 3, 1, 0, 0, 0, 0, 1, 3, 3, 1, 0, 0], 
    [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0], 
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1], 
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], 
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1] 
    
    ]; 



//     // 16 x 16
 let fourtextarr = [ //Sravya's text 

    // hi - green 
    // oo - dark red 
    // art - orange
    // hey - red

  ["art","art","art","art","art","art","art","art","art","art","art", "art","art","art","art", "art"], 
  ["art", "hi","hey","hey","hey","hey","hey","hey","hey","hey", "hey","hey","hey","hey", "hi","art"],
  ["art","hi","hey","hi","hi","oo","oo","hi","hi", "oo","oo","hi","hi", "hey","hi","art"],
  ["art","hi","hey","hi","hi","oo","oo","hi", "hi","oo","oo","hi", "hi","hey","hi","art"],
  ["art","hi","hey","hi","hi","oo","oo", "hi","hi","oo","oo", "hi","hi","hey","hi","art"],
  ["art","hi","hey","hi","hi","oo", "oo","hi","hi","oo", "oo","hi","hi","hey","hi","art"],
  ["art","hi","hey","hi","hi", "oo","oo","hi","hi", "oo","oo","hi","hi","hey","hi","art"],
  ["art","hi","hey","hi", "hi","hi","hi","hi", "hi","hi","hi","hi","hi","hey","hi","art"],
  ["art","hi","hey", "hi","hi","oo","oo", "oo","oo","oo","oo","hi","hi","hey","hi","art"],
  ["art","hi", "hey","hi","hi","oo", "hi","art","art","hi","oo","hi","hi","hey","hi","art"],
  ["art", "hi","hey","hi","hi", "oo","hi","art","art","hi","oo","hi","hi","hey","hi","art"],
  ["art","hi","hey","hi", "hi","oo","oo","oo","oo","oo","oo","hi","hi","hey","hi","art"],
  ["art","hi","hey", "hi","hi","hi","hi","hi","hi","hi","hi","hi","hi","hey","hi","art"],
  ["art","hi", "hey","hey","hey","hey","hey","hey","hey","hey","hey","hey","hey","hey","hi","art"],
  ["art", "hi","hi","hi","hi","hi","hi","hi","hi","hi","hi","hi","hi","hi","hi","art"],
  [ "art","art","art","art","art","art","art","art","art","art","art","art","art","art","art","art"]
];

let unhappyfacearr = [ //unhappy face 
    //0 - smile 
    //1 - hairstyle 
    //2 - sunglasses
    //3 - mouth open/teeth 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0],
    [0, 1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 0],
    [0, 1, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 1, 0],
    [0, 1, 3, 2, 0, 1, 1, 0, 0, 1, 1, 0, 2, 3, 1, 0],
    [0, 1, 3, 2, 0, 1, 1, 0, 0, 1, 1, 0, 2, 3, 1, 0],
    [0, 1, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 1, 0],
    [0, 1, 3, 2, 0, 0, 2, 2, 2, 2, 0, 0, 2, 3, 1, 0],
    [0, 1, 3, 2, 0, 2, 0, 0, 0, 0, 2, 0, 2, 3, 1, 0],
    [0, 1, 3, 2, 0, 2, 0, 0, 0, 0, 2, 0, 2, 3, 1, 0],
    [0, 1, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 1, 0],
    [0, 1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 0],
    [0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];








////////// Starts here //////////

let font1;
let images =[];

let currentPage = 0;

function preload()  { 
       font1 = loadFont('assets/CookieCrisp.ttf'); 
       images[0] = loadImage('assets/lego1.png');
       images[1] = loadImage('assets/lego2.png');
       images[2] = loadImage('assets/lego3.png');
       images[3] = loadImage('assets/lego4.png');
}


//background or overall setup 
function setup() { 
     createCanvas(900, 700);
    //  background(100, 60, 10);//orange 
    //  fill(100);
     textAlign(LEFT);
     textFont(font1);
      
}

function draw() {
    background(0,15);
    background(25, 18,  0);//
//1st slide //Sravya's code 
    if (currentPage == 1) {     
      //2darr, x,y,rot,scale, alpha
    
      mapToMonoPixels1(happyfacearr, images, 30, 20, 45, 2, 255); //left side 
      mapToTintedBitMaps(unhappyfacearr, images, 600, 90, -3, 1.55);

    //   mapToMonoPixels(happyfacearr, images, 580, 20, 20, 1.25, 100);  
    //   mapToColorPixels(happyfacearr, images, 220, 290, 45, 1.15, 255);
    //   mapToColorPixels(happyfacearr, images, 460, 260, -45, .45, 255);1

     //Sravya's text 
     mapToColorText1(fourtextarr, 40, 420, 10, 1, 175);  
     mapToColorText2(fourtextarr, 260, 0, 90, 1.1, 255); 


      push();
      translate(20,520);
      fill(300);
      textSize(20);
      let t = "Here I have added total of 4: 1 numerical grid and 1 added bitmap that are in two different ways and 2 kinds text with words add."
      text(t,0,0,300);  // 
      pop();
 


//2nd slide //Jared's code 
    } else if (currentPage == 2) {

    //  mapToColorShapes(jaredcode, -30, 0, 0, 3, 8); //
     mapToColorPixels2(jaredcode, 520, 260, 45, 2.15, 255); //hi one 
     mapToColorShapes2(jaredcode, 120, 480, 0, 0.65, 255); //left one 

    //  mapToColorShapes(jaredcode, 270, 180, -25, 1.2, 120); // top one 
    mapToColorText4(fourtextarr, 260, 0, 90, 1.1, 255); 

     push();
     translate(40,50);
     fill(200);
     textSize(20);
     let t = "In this slide, I have added Jared's code and added ellipse and rectangle shapes and given filled colors. Along with that I have added one of my text grid in here."  
     text(t,0,0,300); 
     pop();


   
     
     
//3rd slide // Alex's code - this good try to change the colors 
    } else if (currentPage == 3) {
        // mapToTintedBitMaps(alexcode, -400, 0, -20, 10.85,7);
        // mapToTintedBitMaps(alexcode, 400, 120, 0, 2.85,190);


      mapToMonoPixels2(alexcode, 20, 10, 0, 1.85, 40); //top left - grey 
      mapToMonoPixels3(alexcode, 550, 340, 330, 1.75, 255); //bottom right - grey  
    //   mapToMonoPixels(alexcode, 580, 20, 20, 1.25, 100);  //  top right - grey    
    //   mapToColorPixels(alexcode, 220, 290, 45, 1.15, 255); //bottom left - orange
    //   mapToColorPixels(alexcode, 460, 200, -45, .45, 255); //bottom right - orange

        push();
        translate(40,500);
        fill(200);
        textSize(20);
        let t = "In this slide, here I have added two pixel arrays's of Alex's code in that I have use fill colors. Also I have added one of my text grid here aswell";
        // t += "\n";   // this is a command you can put in text to create a line break.4
        // t += "..and them some.";
        text(t,0,0,400);
        pop();


        mapToColorText3(fourtextarr, 40, 420, 10, 1, 175);  


//4th slide // BitmapsImage         
    } else if (currentPage == 4) {
        console.log("hi");

     mapToBitMapsSravya(unhappyfacearr, images, 30, 40, -3, 2); //top left - bitmaps images 
     
     mapToBitMapsSravya1(unhappyfacearr, images, 500, 400, -10, 2); //bottom - bitmaps images 

     sdPixels(happyfacearr, 200, 10, 0, 8, 10); //top right


     sdPixels1(happyfacearr, 100, 100, 0, 8, 40); //top bottom

        push();
        translate(40,500);
        fill(200);
        textSize(20);
        let t = "In this slide, here I have added bitmap images of Lego pieces that has expression and also added my code in nurmerical code of happyface that is filled with colors.";
        // t += "\n";   // this is a command you can put in text to create a line break.4
        // t += "..and them some.";
        text(t,0,0,400);
        pop();
    

// begin in slide = click 0 
    } else {
        push();
        translate(80,100);
        fill(200);
        textSize(35);
        text ("My groups memebers are Alex, Jared and Sravya",0 ,0, 600 );
        translate(0,100);
        text ("I have created 8 grid/mapped images however the total is exactly 14 and all are in 16*16 grid.",0 ,0,800 );
        translate(250,120);// bottom piece of grid 
        mapToColorPixels(happyfacearr, 0, 0, 0, 1, 255); 
        pop();

    }






}




function keyPressed() { 

  
    //console.log(key);
     // or 
    if ( key == '1' ) { //Sravya's Page
      console.log("Page 1");
      currentPage = 1;

     } else if ( key == '2' ) { //Alex's Page
        console.log("Page 2");
        currentPage = 2;
        
     } else if ( key == '3' ) { //Jared's Page 
        console.log("Page 3");
        currentPage = 3;   

    } else if ( key == '4' ) { //Sravya's Page 
        console.log("Page 4");
        currentPage = 4;  

     } else {
        currentPage = 0;

     }
  
    }



//// the Map functions starts here ////


//Intro slide 
//x,y,rot,scale, alpha
function mapToColorPixels(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == 0 ) {
                  fill(200,70,0, fade);
              } else if ( value == 1 ){
                  fill(0, fade);
              } else if ( value == 2 ) {
                  fill(90,30,90, fade);
              } else {
                 fill(20,220,250, fade); 
        
              }
            rect(j * 12, i * 12, 10, 10);
        }
    }
    pop();

}


// Sravya's grid starts here //
        //Sravya's slide - right box 
        //x,y,rot,scale, alpha
        function sdPixels(arr,lx,ly,rot,sc, fade) {
            push();
            translate(560,130);
            rotate(radians(-40));
            scale(3);
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                    fill(arr[i][j] * 80, 200, 300, 250, fade); //change the fill color 

                    rect(j * 4, i * 5, 5, 15);
                }1
            }
        pop();

        }


        //Sravya's slide - left box 
        function mapToMonoPixels1(arr,lx,ly,rot,sc, fade) {
            push();
            translate(400,200);
            rotate(radians(rot));
            scale(3);
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                    fill(arr[i][j] * 100, 150, 20, 300, fade); //change the fill color 

                    rect(j * 5, i * 5, 10, 15);
                }
            }
        pop();

        }
        
    
//Sravya's text 1
//fourtextarr given here// 
        function mapToColorText1(arr,lx,ly,rot,sc,fade) { // top right 
            textSize(15);
            textAlign(CENTER);
            push();
            translate(40,20);
            rotate(radians(rot)); 
            scale(sc);
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                     let value = arr[i][j];
                      if ( value == "hi" ) {
                          fill(51, fade); // 
                      } else if ( value == "oo" ){
                          fill(255, 204, 0, fade); // yellow
                        } else if ( value == "art" ){
                            fill(300,20,30, fade); // bright red
                        } else if ( value == "hey" ){
                            fill(200,0,300, fade);
                      } else {
                          fill(255, fade);
                      }
                       text(value, j * 20, i * 15, 20, 20);
                       //rect( j * 35, i * 10,100,100);
                }
            }
            pop();
        
        }        


        function mapToColorText2(arr,lx,ly,rot,sc,fade) { //bottom right 
            textSize(15);
            textAlign(CENTER);
            push();
            translate(430,480);
            rotate(radians(0)); 
            scale(sc);
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                     let value = arr[i][j];
                      if ( value == "oo" ) {
                          fill(100, 200, fade); // tint blue 
                      } else if ( value == "hi" ){
                          fill(255, fade); // white
                        } else if ( value == "hey" ){
                            fill(218, 247, 166, fade); // tint light green 
                        } else if ( value == "art" ){
                            fill(200,0,300, fade);
                      } else {
                          fill(255, fade);
                      }
                       text(value, j * 23, i * 10, 20, 20);
                       //rect( j * 35, i * 10,100,100);
                }
            }
            pop();
        
        }        


// Sravya's grid ends here //




//Jared's grid starts here// 
        // Jared's grid 
        //1,3,4,5,6,7,8,9
        function mapToColorPixels2(arr,lx,ly,rot,sc, fade) {
            push();
            translate(130,210);
            rotate(radians(20));
            scale(2);
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                    let value = arr[i][j];
                    if ( value == 1 ) {
                        fill(255, 165, 0, fade); // bright mango color
                    } else if ( value == 2 ){ 
                        fill(190,310,90, fade); //mouth - tint green color
                    } else if ( value == 3 ) {
                        fill(200,70,0, fade); // orange color
                    } else if ( value == 4 ) {
                        fill(248, 152, 128, fade); // pink orange color
                    } else if ( value == 5 ) {
                        fill(200,300,0, fade); // tint yellowish green color
                    } else if ( value == 6 ) {
                        fill(20,30,0, fade); // green color
                    } else if ( value == 7 ) {
                        fill(255, 192, 203, fade); // tint pink color 
                    } else if ( value == 8 ) {
                        fill(119, 7, 55, fade); // Mulberry color
                    } else if ( value == 9 ) {
                        fill(100, fade); // grey color
                    }
                    rect(j * 12, i * 12, 10, 10);
                }
            }
            pop();

        }



        function mapToColorText4(arr,lx,ly,rot,sc,fade) { //bottom right 
            textSize(15);
            textAlign(CENTER);
            push();
            translate(430,480);
            rotate(radians(0)); 
            scale(sc);
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                     let value = arr[i][j];
                      if ( value == "oo" ) {
                          fill(200, 10, fade); // tint blue 
                      } else if ( value == "hi" ){
                          fill(105,100, fade); // white
                        } else if ( value == "hey" ){
                            fill(100,200,10, fade); // tint light green 
                        } else if ( value == "art" ){
                            fill(28, 247, 166, fade);
                      } else {
                          fill(255, fade);
                      }
                       text(value, j * 23, i * 10, 20, 20);
                       //rect( j * 35, i * 10,100,100);
                }
            }
            pop();
        
        }        
        //Jared's box 
        //1,3,4,5,6,7,8,9
        function mapToColorShapes2(arr,lx,ly,rot,sc, fade) {
            push();
            translate(500,100);
            rotate(radians(rot));
            scale(1.75);
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                    let value = arr[i][j];
                    if ( value == 1 ) {
                        fill(200,70,0, fade);
                        rect(j * 12, i * 12, 10, 10);
                    } else if ( value == 3 ){
                        fill(50,0,30, fade); //dark brown color
                        rect(j * 12-6, i * 12-6, 10, 10, 20); 
                    }
                        else if ( value == 4 ){
                            fill(150,0,30, fade); //red color 
                            rect(j * 12-6, i * 12-6, 10, 10,2); 
                        }
                        else if ( value == 5 ){
                            fill(200,100,30, fade); // orange color 
                            rect(j * 12-6, i * 12-6, 10, 10,2); 
                        }
                        else if ( value == 6 ){
                            fill(10,100,30, fade); //
                            rect(j * 12-6, i * 12-6, 10, 10,2); //green 
                        }
                        else if ( value == 7 ){
                            fill(190,130,90, fade);
                            rect(j * 12-6, i * 12-6, 10, 10,2); //tint peach color 
                        }
                        else if ( value == 8 ){
                            fill(150,300,30, fade); // bright green 
                            rect(j * 12-6, i * 12-6, 10, 10,2);
                        }
                            else if ( value == 9 ){
                                fill(200,220,250, fade); // bright tint light blue 
                                rect(j * 12-6, i * 12-6, 10, 10,2);
                    } else {
                        fill(130,150,0, fade);
                        ellipse(j * 12, i * 12, 15, 15,5);
                    }
                }
            }
            pop();

        }

//Jared's code ends here//



//Alex's grid starts here//
function mapToMonoPixels2(arr,lx,ly,rot,sc, fade) {
    push();
    translate(100,100);
    rotate(radians(rot));
    scale(3);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            fill(arr[i][j] * 200, 140, 100, 300, fade); //change the fill color 

            rect(j * 5, i * 5, 10, 15);
        }
    }
   pop();

}


//Alex's grid starts here//
// Alex's grid 
function mapToMonoPixels3(arr,lx,ly,rot,sc, fade) {
    push();
    translate(500,300);
    rotate(radians(rot));
    scale(3);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            fill(arr[i][j] * 310, 10, 100, 300, fade); //change the fill color 

            rect(j * 5, i * 5, 10, 15);
        }
    }
   pop();
} 


function mapToColorText3(arr,lx,ly,rot,sc,fade) { // top right 
    textSize(15);
    textAlign(CENTER);
    push();
    translate(400,10);
    rotate(radians(rot)); 
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == "hi" ) {
                  fill(100, fade); // 
              } else if ( value == "oo" ){
                  fill(105, 24, 0, fade); // red
                } else if ( value == "art" ){
                    fill(130,150,300, fade); // purple
                } else if ( value == "hey" ){
                    fill(120,10,300, fade); //light tint blue 
              } else {
                  fill(25, 100, fade);
              }
               text(value, j * 20, i * 15, 20, 20);
               //rect( j * 35, i * 10,100,100);
        }
    }
    pop();

}        

// mapToColorText3(fourtextarr, 40, 420, 10, 1, 175);  

//Alex's code ends here//






// BitMap - Sravya 
// images in array ,x,y,rot,scale, alpha 
 function  mapToBitMapsSravya (arr,imgarr,lx,ly,rot,sc) {
            push();
            translate(lx,ly);
            rotate(radians(rot));
            scale(sc);
            let nuimg;
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                     let value = arr[i][j];
                      if ( value == 0 ) {
                        nuimg = imgarr[0];
                      } else if ( value == 1 ){
                        nuimg = imgarr[2];
                      } else if ( value == 2 ) {
                        nuimg = imgarr[1];
                      } else {
                        nuimg = imgarr[3];
                      }
                     image(nuimg, j * 12, i * 12, 14, 14);
                }
            }
            pop();
        
        }

      
        function  mapToBitMapsSravya1 (arr,imgarr,lx,ly,rot,sc) {
            push();
            translate(lx,ly);
            rotate(radians(rot));
            scale(15);
            let nuimg;
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                     let value = arr[i][j];
                      if ( value == 0 ) {
                        nuimg = imgarr[1];
                      } else if ( value == 2 ){
                        nuimg = imgarr[2];
                      } else if ( value == 3 ) {
                        nuimg = imgarr[3];
                      } else { 
                        nuimg = imgarr[0];
                      }
                     image(nuimg, j * 1, i * 1, 4, 4);
                }
            }
            pop();
        
        }

        // mapToBitMapsSravya(unhappyfacearr, images, 350, 300, -10, 2); //bottom - bitmaps images 

        // sdPixels1(happyfacearr, 100, 100, 0, 8, 40); //top bottom

        
        function sdPixels1(arr,lx,ly,rot,sc, fade) {
            push();
            translate(400,100);
            rotate(radians(0));
            scale(3);
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                    fill(arr[i][j] * 50, 50, 150, 250, fade); //change the fill color 

                    rect(j * 4, i * 5, 5, 15);
                }1
            }
        pop();

        }

    function mapToTintedBitMaps(arr,imgarr,lx,ly,rot,sc,fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    let nuimg;
    let c;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            //   nuimg = imgarr[3];
            //   c = color(255,100,0,fade);
                let value = arr[i][j];
                if ( value == 0 ) {
                nuimg = imgarr[3];
                c = color(255,100,0,fade);
                } else if ( value == 1 ){
                c = color(255,0,255,fade);
                nuimg = imgarr[2];
                } else if ( value == 2 ) {
                nuimg = imgarr[1];
                c = color(20,200,120,fade);
                } else {
                nuimg = imgarr[0];
                c = color(120,0,240,fade);
                }
            
            c = color(255,fade);
            tint(c);
            image(nuimg, j * 9, i * 9, 15, 15);
        }
    }
    pop();

    }









//// the Map functions ends here ////





// if ( value == 0 ) {
//     fill(200,70,0, fade);
// } else if ( value == 1 ){
//     fill(0, fade);
// } else if ( value == 2 ) {
//     fill(90,30,90, fade);
// } else {
//    fill(20,220,250, fade); 