require('dotenv').config()

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.API_TOKEN,
		'X-RapidAPI-Host': process.env.API_HOST
	}
};

fetch('https://imdb8.p.rapidapi.com/title/get-ratings?tconst=tt0944947', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err))
