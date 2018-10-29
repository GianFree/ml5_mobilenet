let mobilenet; // pre-trained classifier

function modelReady() {
  console.log("Model is ready!");
  mobilenet.predict(puffin, gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    let label = results[0].className;
    let prob = results[0].probability;
    //text(label, 10, height - 100);
    createP(label);
    createP(prob);
  }
}

function imageReady() {
  image(puffin, 0, 0, width, height);
}

function setup() {
  // put setup code here
  createCanvas(480, 360);
  background(50);
  puffin = createImg("imgs/puffin.jpeg", imageReady);

  puffin.hide();
  mobilenet = ml5.imageClassifier("MobileNet", modelReady);
}

//function draw() {     // put drawing code here
//  background(50);
//}
