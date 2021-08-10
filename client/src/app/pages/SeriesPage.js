import SerieList from '../components/detail/SerieList';
import { BaseLayout } from '../layouts';
import LatestSerieList from '../components/detail/LatestSerieList';
import RatedSerieList from '../components/detail/RatedSerieList';

const SeriesPage = () => {
	return (
		<BaseLayout>
			<SerieList/>
			<RatedSerieList/>
            <LatestSerieList/>
		</BaseLayout>
	)
};

export default SeriesPage;