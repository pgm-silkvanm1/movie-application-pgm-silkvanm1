import { MovieList } from '../components/detail'
import { BaseLayout } from '../layouts'

const FilmsPage = () => {
	return (
		<BaseLayout>
			<MovieList filter="populair" />
			<MovieList filter="binnenkort" />
			<MovieList filter="best" />
		</BaseLayout>
	)
}

export default FilmsPage
