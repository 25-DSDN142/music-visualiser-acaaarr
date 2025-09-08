
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(214, 197, 188);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  strokeWeight (9);

  fill(0); // black text
  noStroke();
  textAlign(CENTER, CENTER);
  text(words, width / 2, height / 2);

   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
 
// changes 
   // vocal bar is red
   // Map the 'vocal' value (0-100) to a color range (0-255)


let vocalColor = map(vocal, 0, 100, 90, 90);
let numLines = int(map(vocal, 0, 100, 1, 19)); // 1 to 10 lines based on vocal
for (let i = 0; i <numLines; i++) {
   let x = 20 + i * 30; // space lines out horizontally
   stroke(vocalColor, 100, 100); // red color for vocal
  
}

let otherColor = map(other, 0, 100, 40, 40); // hue for green in HSB
let otherShapes = int(map(other, 0, 100, 1, 10)); // 1 to 10 shapes based on 'other'
line(30, 20, 85, 75);
for (let i = 0; i < otherShapes; i++) {
   let x = 50 + i * 40; // distance between circle sizes
   stroke(otherColor, 100, 100);
   fill(otherColor, 100, 100, 60); // semi-transparent
   circle(300, 700, x);

}

let drumColor = map(drum, 0, 100, 50, 50);
let drumLines = int(map(drum, 0, 100, 1, 19)); // changing the range into a fraction
   let w = 800 - (drumLines - 10) * 30; // coding the drums height
   stroke(drumColor, 100, 100); 
   noFill();
   rect(1000, 500, 1000, w); //w is the rectangle height, the problem is that I want a)
   //the rectangle overall to START OFF TALLER, and then the height should change SLIGHTLY based on the drum volume

let bassColor = map(bass, 0, 100, 20, 20);
let bassLines = int(map(bass, 0, 100, 1, 19)); // 1 to 19 lines based on drum
for (let i = 0; i < bassLines; i++) {
   let w = 1 + (bassLines + 1) * 6; // space lines out horizontally
   stroke(bassColor, 100, 100); // red color for bass
   fill(bassColor, 100, 100);
   square(1800, 800, 55);
   triangle(1772.5, 772.5, 1800, 742.5-w, 1827.5, 772.5);
   triangle(1827.5, 772.5, 1857.5+w, 800, 1827.5, 827.5);
   triangle(1827.5, 827.5, 1800, 857.5+w, 1772.5, 827.5);
   triangle(1772.5, 827.5, 1742.5-w, 800, 1772.5, 772.5);
   square(200, 200, 25);
   triangle(172.5+15, 172.5+15, 200, 142.5+10+15-w, 227.5-15, 172.5+15);
   triangle(227.5-15, 172.5+15, 257.5+w-15-10, 200, 227.5-15, 227.5-15);
   triangle(227.5-15, 227.5-15, 200, 257.5-10-15+w, 172.5+15, 227.5-15);
   triangle(172.5+15, 227.5-15, 142.5+10+15-w, 200, 172.5+15, 172.5+15);

}

let ellipseSize = int(map(vocal, 0, 100, 1, 10)); // 1 to 10 lines based on vocal
for (let i = 0; i <ellipseSize; i++) {//i respresents
   let u = 20 + i * 30; // space lines out horizontally
   stroke(vocalColor, 100, 100); // red color for vocal

}

let ellipseHeight = int(map(vocal, 0, 100, 1, 10)); // 1 to 10 lines based on vocal
let h = 20 + (ellipseHeight - 1) * 30;
noFill();
stroke(vocalColor, 100, 100);
strokeWeight (3);
ellipse(1000, 500, 200, h);

}


   
