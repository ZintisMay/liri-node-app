function log(x){console.log(x);}

function logger(){console.log("--------------------------------------");}

//store the data from keys.js in a var

var command = process.argv[2];

//requires keys
var keys = require('./keys.js');

//the requires
	var Twitter = require('twitter');

	var spotify = require('spotify');

	var omdb = require('omdb');

// console.log(spotify);


switch(command){

	case "twitter":
	//spit out 20 tweets

	
		var a = keys.twitterKeys.consumer_key;
		var b = keys.twitterKeys.consumer_secret;
		var c = keys.twitterKeys.access_token_key;
		var d = keys.twitterKeys.access_token_secret;



		var client = new Twitter({
			consumer_key: a,
			consumer_secret: b,
			access_token_key: c,
			access_token_secret: d
		});

		var params = {screen_name: 'ZintisMay'};

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

		var song = process.argv[3];
			// console.log("process.argv3 " + song);
		if (song == null){song = "Blizzard";}
	

		
				// 'https://api.spotify.com/v1/search?type=track'

		spotify.search({type: "track",limit: 5, query: song}, function(err, data){

				if(err){
					console.log('Error! ' + err);
					return;
				}

			logger();

			log("Song:");
			console.log(data.tracks.items[0].name);
			logger();

			log("Artist:");
			console.log(data.tracks.items[0].artists[0].name);
			logger();

			log("Album:");
			console.log(data.tracks.items[0].album.name);
			logger();

			log("Preview:");
			console.log(data.tracks.items[0].preview_url);
			logger();
	});
	//look up the song and tell me things
	break;

	case "movie":
		var movie = process.argv[3];
		if (movie == ""){movie = "Mr. Nobody";}

			// imdb('The Martian', function(err, data){

			// 	if(err) console.log(err.stack);
			// 	if(data) console.log(data);
			// });
		omdb.search(movie, function(err, movies){
			if(err){console.error(err);}
			if(movies.length < 1){return console.log("no movies were found");}
			movies.forEach(function(movie){console.log('%s (%d)', movie.title, movie.year);
			});
		});

		omdb.get({ title: 'Saw', year: 2004 }, true, function(err, movie) {
		    if(err) {
		        return console.error(err);
		    }
		 
		    if(!movie) {
		        return console.log('Movie not found!');
		    }
		 
		    console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating);
		    console.log(movie.plot);

	});
	//looks up movies!
	break;

	case "do-what-it-says":

		break;

	default:
		console.log("ya messed up");
}