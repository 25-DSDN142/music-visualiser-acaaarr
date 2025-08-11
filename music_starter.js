
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB, 100);
  background(255);
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
  line(x, 225, x, 275);
}

let drumColor = map(drum, 0, 100, 50, 50);
let drumLines = int(map(drum, 0, 100, 1, 19)); // 1 to 10 lines based on vocal
for (let i = 0; i <drumLines; i++) {
   let w = 20 + i * 30; // space lines out horizontally
   stroke(drumColor, 100, 100); // red color for vocal
  line(w, 325, w, 375);
}

let bassColor = map(bass, 0, 100, 20, 20);
let bassLines = int(map(bass, 0, 100, 1, 19)); // 1 to 19 lines based on drum
for (let i = 0; i < bassLines; i++) {
   let w = 20 + i * 30; // space lines out horizontally
   stroke(bassColor, 100, 100); // red color for bass
   line(w, 425, w, 475);

}

let ellipseSize = int(map(vocal, 0, 100, 1, 10)); // 1 to 10 lines based on vocal
for (let i = 0; i <ellipseSize; i++) {
   let u = 20 + i * 30; // space lines out horizontally
   stroke(vocalColor, 100, 100); // red color for vocal
  ellipse(u, 225, u, u);

}

let ellipseHeight = int(map(vocal, 0, 100, 1, 10)); // 1 to 10 lines based on vocal
for (let i = 0; i <ellipseHeight; i++) {
   let h = 20 + i * 30; // space lines out horizontally
   stroke(vocalColor, 100, 100); // red color for vocal
  ellipse(200, 500, 20, h);

}

}
   
