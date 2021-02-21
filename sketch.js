var fixedrect,movingrect;

function setup()
{
  canvas=createCanvas(600,600);

  fixedrect=createSprite(100,200,50,50);
  fixedrect.shapeColor="blue";
  fixedrect.debug=true;

  movingrect=createSprite(200,200,50,50);
  movingrect.shapeColor="blue";
  movingrect.debug=true;

}

function draw()
{
 background("gold");
 
 movingrect.x=mouseX;
 movingrect.y=mouseY;

 if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 &&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 &&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 &&
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2)
 {
  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";
 }
 else
 {
  fixedrect.shapeColor="blue";
  movingrect.shapeColor="blue";
 }
 drawSprites();


}