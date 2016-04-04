//store the data from keys.js in a var

var command = process.argv[2];

switch(command){
	case "my-tweets":
//spit out 20 tweets

		break;

	case "spotify-this-song":

		var song = process.argv[3];
		if (song == ""){song = "what's my age again";}
		//ajax call with song
		//console.log a bunch of stuff
		console.log();
		console.log();
		console.log();
		console.log();
		console.log();
		break;

	case "movie-this":
		var movie = process.argv[3];
		if (movie == ""){movie = "Mr. Nobody";}
		//outputs a bunch of movie facts
		console.log();
		console.log();
		console.log();
		console.log();
		
		console.log();
		console.log();
		console.log();

		break;

	case "do-what-it-says":

		break;

	default:
		console.log("ya messed up");
}