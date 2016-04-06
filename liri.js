//just making log easier

	function log(x){console.log(x);}

	function logger(x){
		if (x==null) {x = "-";}
		console.log(x + "--------------------------------------");}

//store the data from keys.js in a var

	var command = process.argv[2];

	var output;

//requires keys

	var keys = require('./keys.js');

//the requires

	var Twitter = require('twitter');

	var spotify = require('spotify');

	var omdb = require('omdb');

	var fs = require('fs');

//fs functions

if(command == null){

		fs.readFile('random.txt', 'utf8', function(err,data){

		output = data.split(',');
		log(output);

			//default switch reference
			log(output);
			command = output;
			logger();
			log(command);

		theSwitch(command[0]);
		fs.appendFile('random.txt', ", " + command[0], function(err){});
	});

}else (theSwitch(command));

//switch command
function theSwitch(x){
	switch(x){

	case "twitter":
	//spit out 20 tweets

		//login info
		var a = keys.twitterKeys.consumer_key;
		var b = keys.twitterKeys.consumer_secret;
		var c = keys.twitterKeys.access_token_key;
		var d = keys.twitterKeys.access_token_secret;

		//pass login
		var client = new Twitter({
			consumer_key: a,
			consumer_secret: b,
			access_token_key: c,
			access_token_secret: d
		});

		//generate params
		var params = {screen_name: 'ZintisMay'};

		// produce tweets
		client.get('statuses/user_timeline', params, function(error, tweets, response){
			if(!error) {
				for (x = 0; x < 10; x++){
					console.log("--------------------------");
					console.log(tweets[x].text);
					console.log(tweets[x].user.created_at);

				}
				
			}
		});
	break;


	case "spotify":
	//sont lookup

		//set song input
		var song = process.argv[3];

		//null default
		if (song == null){song = command[1];}
	
		//search npm
		spotify.search({type: "track",limit: 5, query: song}, function(err, data){

		if(err){
			console.log('Error! ' + err);
			return;
		}

		//log the info
		logger("Song:");
		console.log(data.tracks.items[0].name);

		logger("Artist:");
		console.log(data.tracks.items[0].artists[0].name);

		logger("Album:");
		console.log(data.tracks.items[0].album.name);

		logger("Preview:");
		console.log(data.tracks.items[0].preview_url);
	});

	break;

	case "movie":
	// movie lookup

		//asign movie
		var movie = process.argv[3];

		//make var to hold movieyear
		var movieyear;

		//default movie
		if (movie == null){movie = "Mr. Nobody";}

		//omdb search for the movie, spit first reply into vars
		omdb.search(movie, function(err, movies){

			if(err){console.error(err);}

			if(movies.length < 1){return console.log("no movies were found");}

			movie = movies[0].title;

			movieyear = movies[0].year;

		});

		//omdb get movie info using first reply
		omdb.get({ title: movie, year: movieyear }, true, function(err, movies2) {

			    if(err) {
			        return console.error(err);
			    }
			 
			    if(!movies2) {
			        return console.log('Movie not found!');
			}

			//spit out movie data
			logger("-");
					console.log(movies2)
			logger("-");
				    console.log('%s (%d) %d/10 Language: %s Country: %s', movies2.title, movies2.year, movies2.imdb.rating, movies2.lang, movies2.countries[0]);
				    logger();
				    console.log(movies2.plot);
			logger("-");
				    console.log("Actors: " + movies2.actors);
			logger("-");

		});
	break;

	case "do-what-it-says":

		//what is this for?

		break;

		//default, bad command
	default:
		console.log("The commands are: twitter, spotify, movie");
	}

}

