var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    wall1 = createSprite(10,580,200,20);
    wall1.shapeColor = "blue";
    
    wall2 = createSprite(260,580,150,20);
    wall2.shapeColor = "orange";

    wall3 = createSprite(460,580,150,20);
    wall3.shapeColor = "indigo";

    wall4 = createSprite(650,580,150,20);
    wall4.shapeColor = "green";

    box = createSprite(random(20,750),50,25,25);
    box.shapeColor = "white";
    box.velocityY = 10;
    box.velocityX = 2;

   


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    var edges = createEdgeSprites();
    box.bounceOff(edges);

if(wall1.isTouching(box) && box.bounceOff (wall1)){
    box.shapeColor = "blue";
    music.play();
}
if(wall2.isTouching(box)){
    box.shapeColor = "orange";
    music.stop();
    box.velocityY = 0
}

if(wall3.isTouching(box) && box.bounceOff (wall3)){
    box.shapeColor = "indigo";

}
if(wall4.isTouching(box) && box.bounceOff (wall4)){
    box.shapeColor = "green";
   
}

drawSprites();


    //add condition to check if box touching surface and make it box
}
