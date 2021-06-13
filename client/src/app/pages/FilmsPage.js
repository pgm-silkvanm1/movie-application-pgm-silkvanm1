import { MovieList } from '../components/detail'
import { BaseLayout } from '../layouts'

import PopularMovieList from '../components/detail/PopularMovies'
import TrendingMovieList from '../components/detail/TrendingMovieList'
import UpcomingMovieList from '../components/detail/UpcomingMovieList'

const FilmsPage = () => {
	return (
		<BaseLayout>
			<UpcomingMovieList/>
			<TrendingMovieList/>
			<PopularMovieList/>
		</BaseLayout>
	)
}

export default FilmsPage
