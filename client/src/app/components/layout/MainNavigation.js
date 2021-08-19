import {
  Link
} from "react-router-dom";

import * as Routes from '../../routes';
import { useAuth } from '../../contexts/firebase/auth.context';
import ThemeToggler from './themeToggler'
import styles from './Header.module.scss';

const MainNavigation = () => {
  const {currentUser, signOut} = useAuth();

  return (
    <nav>
      <ul>
        <li>
          <Link to={Routes.LANDING}>Home</Link>
        </li>
        <li>
          <Link to={Routes.MOVIES}>Movies</Link>
        </li>
        <li>
            <Link to={Routes.SERIES}>Series</Link>
        </li>
        <li className={styles.containerTheme}>
            <ThemeToggler/>
        </li>
        <li>
          {!!currentUser
          ? <button className={styles.logOut} onClick={signOut}><img className={styles.user__avatar} src='https://image.flaticon.com/icons/png/512/1738/1738691.png' alt={currentUser.email}/>Logout</button>
          : <Link to={Routes.AUTH_SIGN_IN}>Sign In</Link>
          }    
        </li>

      </ul>
    </nav>
  );
};

export default MainNavigation;