import { BaseLayout } from '../layouts';

const HomePage = () => {
  return (
    <BaseLayout>
      <p>HOME PAGE</p>
      <div>
        {/* <img>Hier komt een carroussel van films/series</img> */}
      </div>

      <h2>
        Trending
      </h2>
      <div>
        {/* <img>Verschillende films/series</img> */}
      </div>

      <h2>Popular</h2>
      <div>
        <div>
          <img/>
          <h3>Movie title</h3>
          {/* <img>Ratings</img> */}
          <p>synopsis </p>
        </div>
      </div>

      <h2>
        Latest trailers
      </h2>
      <div>
        {/* <video>Verschillende films/series hun trailers</video> */}
      </div>
    </BaseLayout>
  );
};

export default HomePage;