var canvas = document.querySelector("#matrix");
var ctx = canvas.getContext("2d");

//making the canvas full screen
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//persian characters - taken from the unicode charset
var persian = " A B C D E F G H I J K L M N O P Q R S T U V W X Y Z あ い う え お か き く け こ さ し す せ そ た ち つ て と な に ぬ ね の は ひ ふ へ ほ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を 1 2 3 4 5 6 7 8 9 0 0 0A B C D E F G H I J K L M N O P Q R S T U V W X Y Z	";
//converting the string into an array of single characters
persian = persian.split("");

var font_size = 16;
var columns = canvas.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
	drops[x] = 1; 

//drawing the characters
function draw()
{
	//Black BG for the canvas
	//translucent BG to show trail
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "#0F0"; //green text
	ctx.font = font_size + "px Nanum Gothic Coding";
	//looping over drops
	for(var i = 0; i < drops.length; i++)
	{
		//a random persian character to print
		var text = persian[Math.floor(Math.random()*persian.length)];
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(text, i*font_size, drops[i]*font_size);
		
		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size > canvas.height && Math.random() > 0.975)
			drops[i] = 0;
		
		//incrementing Y coordinate
		drops[i]++;
	}
}

setInterval(draw, 33);



