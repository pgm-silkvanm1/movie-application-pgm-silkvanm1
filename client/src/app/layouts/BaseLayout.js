import { Footer, Header } from '../components/layout';
import styles from './BaseLayout.module.scss';

const BaseLayout = ({children}) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        { children }
      </main>
      <Footer />
    </>
  )
};

export default BaseLayout;