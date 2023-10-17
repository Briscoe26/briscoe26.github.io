$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

     for (let i = 100; i < canvas.width; i += 100) {
       createPlatform(i, canvas.height, -1, -canvas.height);
     }
     for (let i = 100; i < canvas.height; i += 100) {
       createPlatform(canvas.width, i, -canvas.width, -1);
     }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)


     createPlatform(500,140,10,1000)
     createPlatform(10,0,10,1000)
     createPlatform(100,700,20,10)
     createPlatform(200,640,20,10)
     createPlatform(320,560,20,10)
     createPlatform(489,450,20,10)
     createPlatform(360,389,20,10)
     createPlatform(200,340,20,10)
     createPlatform(15,250,20,10)
     createPlatform(100,130,410,10)
     createCannon("bottom",225,600)
     createCollectable("grace",265,20,1,1)

       createPlatform(600,300,20,10)
       createPlatform(770,450,20,10)
       createPlatform(1400,140,10,1000)
       createPlatform(1100,130,310,10)
       createPlatform(950,600,20,10)
       createPlatform(1070,500,20,10)
       createPlatform(1190,400,20,10)
       createPlatform(1290,320,20,10)
       createPlatform(1000,260,190,10)
       createPlatform(900,190,5,10)
       createPlatform(1050,170,5,10)
       createCannon("bottom",650,550)
       createCannon("bottom",800,550)
       createCannon("top",600,770)
       createCannon("bottom",950,660)
       createCannon("",400,850)
       createCollectable("database",1300,5,1,1)
     
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)




    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)




    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
