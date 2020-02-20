let spaceData;
function setup() {
  createCanvas(600, 600);
  loadJSON('http://api.open-notify.org/iss-now.json', gotData, 'jsonp');
}

function gotData(data) {
  spaceData = data;
}

function draw() {
  background(0);
  fill(255)
  // text("How many people are in space right now?", 100,100)
  // if (spaceData) {
  //   text(spaceData.number, 150,150)
  // }
  // text("What are the names of the people in the spacecraft?", 100,200)
  // if (spaceData){
  //   text(spaceData.people[0].name, 150,250)
  //   text(spaceData.people[1].name, 150,300)
  //   text(spaceData.people[2].name, 150,350)
  // }
  text("What is the location of the International Space Station?", 100,300)
  if (spaceData) {
    text("the longitudinal location is: "+" "+spaceData.iss_position.longitude+" and ", 150,350)
    text("the latitudinal location is: "+" "+spaceData.iss_position.latitude, 370,350)
  }
}
