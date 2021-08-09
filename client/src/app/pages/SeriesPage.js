import SerieList from '../components/detail/SerieList';
import { BaseLayout } from '../layouts';
// import TrendingSerieList from '../components/detail/TrendingSerieList';
// import UpcomingSerieList from '../components/detail/UpcomingSerieList';

const SeriesPage = () => {
	return (
		<BaseLayout>
			{/* <UpcomingSerieList/> */}
			<SerieList/>
			{/* <TrendingSerieList/> */}
		</BaseLayout>
	)
};

export default SeriesPage;