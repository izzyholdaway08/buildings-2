
let buildings = [];
let numBuildings = 10;

function setup() {
  createCanvas(800, 600, WEBGL);
  
  // buildings
  for (let i = 0; i < numBuildings; i++) {
    let building = {
      x: random(-500, 500),
      y: random(-500, 500),
      z: random(-500, 500),
      width: random(50, 150),
      height: random(100, 300),
      depth: random(50, 150)
    };
    buildings.push(building);
   
  }
}

function draw() {
  background('yellow');

  orbitControl();

  // Drawing buildings
  for (let i = 0; i < buildings.length; i++) {
    let buildingA = buildings[i];
    
    push();
    translate(buildingA.x, buildingA.y, buildingA.z);
    normalMaterial();
    box(buildingA.width, buildingA.height, buildingA.depth);
    pop();
    
    // lines connecting buildings
    for (let j = i + 1; j < buildings.length; j++) {
      let buildingB = buildings[j];
      
      
      stroke(0); 
      strokeWeight(1);  // line thickness
      line(buildingA.x, buildingA.y - buildingA.height / 2, buildingA.z, 
           buildingB.x, buildingB.y - buildingB.height / 2, buildingB.z);
    }
  }
}
 
 

  