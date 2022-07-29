// function drawWithInterval(timeout = 33){
// 	setInterval(draw, timeout);
// }

let canvas = document.querySelector("#matrix");
let contex = canvas.getContext("2d");

//making the canvas full screen
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//persian characters - taken from the unicode charset
let persianAlphaNumericals = "ص ض ط ظ ع غ ف ق ک گ ل م ن و ی ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹ ۰ ھ آ ب پ ت ث ج چ ح خ د ذ ر ز ژ س ش ه ";
//converting the string into an array of single characters
persianAlphaNumericals = persianAlphaNumericals.split("");

let font_size = 16;
let columns = canvas.width/font_size; //number of columns for the rain
//an array of drops - one per column
let drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(let x = 0; x < columns; x++)
	drops[x] = 1; 

//drawing the characters
function draw()
{
	//Black BG for the canvas
	//translucent BG to show trail
	contex.fillStyle = "rgba(0, 0, 0, 0.05)";
	contex.fillRect(0, 0, canvas.width, canvas.height);
	// contex.fillStyle = "rgba(40, 40 , 40, 0.1)";
	// contex.fillRect(0, 0, canvas.width, canvas.height);
	
	contex.fillStyle = "#0F0"; //green text
	contex.font = font_size + "px Lalezar";
	//looping over drops
	for(let i = 0; i < drops.length; i++)
	{
		//a random persian character to print
		let text = persianAlphaNumericals[Math.floor(Math.random()*persianAlphaNumericals.length)];
		//x = i*font_size, y = value of drops[i]*font_size
		contex.fillText(text, i*font_size, drops[i]*font_size);
		
		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size > canvas.height && Math.random() > 0.975)
			drops[i] = 0;
		
		//incrementing Y coordinate
		drops[i]++;
	}
}

function canvasResize(){
	console.log(window.innerHeight, window.innerWidth)
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	columns = canvas.width/font_size;
	for(let x = 0; x < columns; x++) drops[x] = 1; 
	draw()
}

setInterval(draw, 33);

window.onresize = canvasResize


