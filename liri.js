//store the data from keys.js in a var

var command = process.argv[2];

//requires keys
var keys = require('./keys.js');


var Twitter = require('twitter');


switch(command){
	case "twitter":
//spit out 20 tweets

	
	var a = keys.twitterKeys.consumer_key;
	var b = keys.twitterKeys.consumer_secret;
	var c = keys.twitterKeys.access_token_key;
	var d = keys.twitterKeys.access_token_secret;

	console.log(a + b + c + d);



	var client = new Twitter({

		consumer_key: a,
		consumer_secret: b,
		access_token_key: c,
		access_token_secret: d
	});

	var params = {screen_name: 'ZintisMay'};

	client.get('statuses/user_timeline', params, function(error, tweets, response){
		if(!error) {console.log(tweets)}
	});

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