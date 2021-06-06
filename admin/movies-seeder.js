import fetch from 'node-fetch'
import { v4 as uuidv4 } from 'uuid'

import { admin, app, db, generateTimestamps } from './firebase'
import firebase from 'firebase'
import faker from 'faker'

const GDMGENT_API_CASES = 'https://www.gdm.gent/static/data/cases.json'


const KEY="ebb8a15262c3cd22c99cc04c030ddfbf"


async fetchMovies( {
	const response = await fetch (`https://api.themoviedb.org/3/movie/${this.id}?api_key=${KEY}`);
	const data = await response.json();

})


;(async () => {
	let collectionRef = db.collection('movies')

	const createMovie = (movie) => {
		const data = {
			views: faker.datatype.number(),
			rating:(faker.datatype.number() % 5).toFixed(2),
			date: faker.datatype.datetime(),
			titel: faker.name.title(),
			description: faker.lorem.sentences(),
			thumbnail: faker.image.unsplash(),
			comments: {
				user: faker.name.findName(),
				comment: faker.lorem.sentence(),
				date: faker.datatype.datetime(),
			},
			cast: new Array(20).fill(null).map((e) => faker.name.findName()),
			tags: new Array(20).fill(null).map((e) => faker.lorem.word()),
			...generateTimestamps(),
		}

		collectionRef
			.doc(uuidv4())
			.set(data)
			.then((documentReference) => {
				console.log(`Added movie.`)
			})
	}

	// Create movies via promises
	const createMovies = async () => {
		const promises = []
		Array(500)
			.fill(null)
			.forEach((movie) => {
				promises.push(createMovie(movie))
			})
		return await Promise.all(promises)
	}

	await createMovies()
})()
