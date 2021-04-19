//Define variables
var BgImg;
var cat, mouse;
var CatImg1, CatImg2, CatImg3;
var MouseImg1, MouseImg2, MouseImg3;

//Preloads the animations and image
function preload() {
    //Load the images here
    BgImg = loadImage('images/garden.png')
    CatImg1 = loadImage('images/cat1.png')
    CatImg2 = loadImage('images/cat2.png')
    CatImg3 = loadImage('images/cat4.png')
    MouseImg1 = loadImage('images/mouse1.png')
    MouseImg2 = loadImage('images/mouse2.png')
    MouseImg3 = loadImage('images/mouse4.png')

}

//draws the sprites and main properties
function setup(){
    //Creates the drawing canvas
    createCanvas(1000,800)

    //Create tom and jerry sprites here
    mouse = createSprite(250,550,20,20)
    mouse.addImage('Mouse', MouseImg1)
    mouse.scale = .15
    cat = createSprite(750,600,20,20)
    cat.addImage('Cat', CatImg1)
    cat.scale = .2
    cat.setCollider('circle',0,0,400)
}


function draw() {
    //sets the backgound image
    background(BgImg)

    //Write condition here to evalute if tom and jerry collide
    keyPressed()
    //Draws the sprites
    drawSprites()
}

function keyPressed(){

    //For moving and changing animation write code here
    if (keyCode === RIGHT_ARROW) {
        mouse.addImage('Mouse', MouseImg2)
        mouse.velocityX = 5
    }
    if (keyCode === LEFT_ARROW) {
        mouse.addImage('Mouse', MouseImg2)
        cat.addImage('Cat', CatImg2)
        cat.velocityX = -5
    }
    if (cat.isTouching(mouse)) {
        cat.velocityX = 0
        mouse.velocityX = 0
        mouse.addImage('Mouse', MouseImg3)
        cat.addImage('Cat',CatImg3)
    }
}
