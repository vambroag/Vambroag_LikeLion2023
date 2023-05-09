/* data type:
text = string "" ''
numbers = integer, float ...
boolean = true, false
undefined = made memory space but don't have value
null = nothing

variables:
const a = 5;  can't update
let b = "Hello!";  can update
all ways use const at the start, switch to let if you need to update value
NEVER EVER USE "VAR"
if you use var we can't differ const and let which erases meanings from code
it is good to let your code have meanings, like 'const will remain unchanged to the end' or 'let will be change sometime in the code'

array:
const me = "sexy";
const days = [1, 2, "hello", false, null, me, true, undefined, "nico"];
there can be anydata type inside arrays

useful if you store same meaning items in array
const toBuy = ["potato", "tomato", "pizza"];
console.log(toBuy[2]) this will print pizza in console
toBuy[2] just getting value 
toBuy[2] = "water" this will change pizza into water
thBuy.push("burger") this will add "burger" at the end of the array

*/

