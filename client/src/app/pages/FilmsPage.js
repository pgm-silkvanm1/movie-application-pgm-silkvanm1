import { MovieList } from '../components/detail'
import { BaseLayout } from '../layouts'

import TrendingMovieList from '../components/detail/TrendingMovieList'
import UpcomingMovieList from '../components/detail/UpcomingMovieList'

const FilmsPage = () => {
	return (
		<BaseLayout>
			<UpcomingMovieList/>
			<MovieList/>
			<TrendingMovieList/>
		</BaseLayout>
	)
}

export default FilmsPage
