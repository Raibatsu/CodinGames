/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position
   var y = initialTy;
   var x = initialTx;

while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

   var ex = '';
   var ey = '';
        if(y > lightY)
        {
            ex = 'N';
            y--;
        }
        if(y <lightY)
           { 
            ex = 'S';
            y++;
           }
        if(x > lightX)
        {
            ey = 'W';
            x--;
        }
        if(x < lightX)
        {
            ey = 'E';
            x++;
        }
       console.log(ex+ey);
}