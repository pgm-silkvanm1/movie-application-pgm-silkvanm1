import React from 'react';
import {
	AuthProvider,
	FirebaseProvider,
	FirestoreProvider,
} from './contexts/firebase';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Routes from './routes';
import styles from './App.module.scss';
import {
	DetailPage,
	FilmsPage,
	HomePage,
	SignInPage,
	Register,
	AccountPage,
} from './pages';
import { ThemeContext } from './utilities/theme';
import { useState } from 'react';

function App() {

	const [theme, setTheme] = useState('light');

	return (
		<ThemeContext.Provider value={{theme,setTheme}}>
		    <div className={styles.app} data-theme={theme}>
				<FirebaseProvider>
					<AuthProvider>
						<FirestoreProvider>
							<Router basename={''}>
								<Switch>
								    <Route exact path={Routes.LANDING} component={HomePage}/>
									<Route from={Routes.HOME} to={Routes.LANDING}/>
									<Route exact path={Routes.MOVIE_DETAILS} component={DetailPage}/>
									<Route exact path={Routes.MOVIES} component={FilmsPage}/>
									<Route exact path={Routes.AUTH_SIGN_IN} component={SignInPage}/>
									<Route exact path={Routes.AUTH_REGISTER} component={Register}/>
									<Route exact path={Routes.ACCOUNT} component={AccountPage}/>
								</Switch>
							</Router>
						</FirestoreProvider>
					</AuthProvider>
				</FirebaseProvider>
			</div>
		</ThemeContext.Provider>
	)
};

export default App
