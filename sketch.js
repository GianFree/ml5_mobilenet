let mobilenet; // pre-trained classifier
let video;
let label='';

function modelReady() {
  console.log("Model is ready!");
  mobilenet.predict(gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    label = results[0].className;
    mobilenet.predict(gotResults);
  }
}

//function imageReady() {
//  image(puffin, 0, 0, width, height);
//}

function setup() {
  // put setup code here
  createCanvas(640, 550);
  background(0);
  video = createCapture(VIDEO);

  video.hide();
  mobilenet = ml5.imageClassifier("MobileNet", video, modelReady);
}

function draw() {
  // put drawing code here
  background(0);
  image(video, 0, 0);
  fill(255);
  textSize(30);
  text(label, 10, height - 30);
  //  background(50);
}
