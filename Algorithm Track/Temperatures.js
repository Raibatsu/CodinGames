/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');
var previous_inputs = [];
var tag = '';
var output = 10001;
var pos = false;
for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
    previous_inputs[i] = t;
    if(t > 0)
    pos = true;
    output = Math.min(Math.abs(Math.abs(previous_inputs[i])), Math.abs(output));
}
if(pos == false)
{
    tag = '-';
}
if(output !=10001)
{
console.log(tag + output);
}else
console.log(0);
