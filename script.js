// Array to hold values of 0=unsolved or 1=solved
var tilesolved = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

// Array to hold values of tiles for the game
var tilevalue = ["A","B","C","D","E","F","G","H","A","B","C","D","E","F","G","H"];

// Boolean variable to keep track of if this is the 1st or 2nd tile flipped
var oneflipped = false;

// Variable to keep track of the 1st tile number flipped for use in comparing when the second tile is flipped
var firsttile = 99;

// Variable to count all tiles solved after match to determine if there is a winner = 16
var totalsolved = 0;


// Main Function that is called by an onclick event from the HTML DIV's
function flipper(tilenum) {
  if(tilesolved[tilenum] == 1) {
    alert("already flipped this tile");
  } else {
      if(oneflipped == false) {
          document.getElementById('tile_'+tilenum).innerHTML = tilevalue[tilenum];
          firsttile = tilenum;
          oneflipped = true;
      } else {
          document.getElementById('tile_'+tilenum).innerHTML = tilevalue[tilenum];
          oneflipped = false;
          if (tilevalue[tilenum] == tilevalue[firsttile]) {
              tilesolved[tilenum] = 1;
              tilesolved[firsttile] = 1;
              totalsolved += 2;
              if (totalsolved == 16) {
                alert('WINNER WINNER CHICKEN DINNER!');
              }

          } else {  
            setTimeout(function cleartiles() {
              for (var i=0; i<tilesolved.length; i++) {
                  if (tilesolved[i] == 0) {
                      document.getElementById('tile_'+i).innerHTML = " ";
                  }
              }
            },4000);
          }
      }
    }
}
