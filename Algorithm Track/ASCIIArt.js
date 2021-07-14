/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const L = parseInt(readline());
const H = parseInt(readline());
const T = readline();

var twoDArray = [];
var output = "";
var e = 1;
for (let i = 0; i < H; i++) {
    const ROW = readline();
    twoDArray[i] = ROW.split(''); // splitting the array into each character individually
    
}
// ------------- This method didn't work well, so had to break it down into smaller parts ------------- 
//   for(let i=0;i<H;i++){ 
//       totalLength = (L*(T.length+ASCII));
//       console.log("j:", ASCII*L, "total Length:",totalLength);                        // 0;0<5;0++ --  | 4 times
//  for(let j = ASCII*L; j<totalLength;j++) // 13 = M; 13<(4*1)+(13*4); 14  -> 0 = A | 0<(0*2)+(0*4) | 0++ |  
//     {
        
//         process.stdout.write(twoDArray[i][j]);
//     }
//     console.log('');
//   }


// var ASCII = T.toUpperCase().charCodeAt(0)-65;

      totalLength = (L*H*T.length); // 180 in case of MANHATTAN, 4*5*Length = 20*length
  for(let i=0;i<H;i++){  // this is to check each line --> runs 5 times always
       for(var outerLoop=0;outerLoop<T.length;outerLoop++) // this is to check each input character --> runs 9 times in MANHATTAN
        {
            var ASCII = T.toUpperCase().charCodeAt(outerLoop)-65;
            if(ASCII < 0 || ASCII > 25)
            ASCII = 26;
            for(var innerLoop=ASCII*L;innerLoop<(ASCII*L+L);innerLoop++) // this is to check each # version of each input character --> runs 4 times always
            {
         process.stdout.write(twoDArray[i][innerLoop]);
            }           
        }
console.log('');
        }
