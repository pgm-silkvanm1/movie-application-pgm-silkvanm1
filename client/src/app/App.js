import React from 'react'
import {
	AuthProvider,
	FirebaseProvider,
	FirestoreProvider,
} from './contexts/firebase'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import * as Routes from './routes'

import styles from './App.module.scss'
import {
	DetailPage,
	FilmsPage,
	HomePage,
	SignInPage,
	Register,
	AccountPage,
} from './pages'

const themes = {
	dark: '',
	light: '',
}

const ThemeContext = React.createContext(themes.dark)

function App() {
	return (
		<div className={styles.app}>
			<FirebaseProvider>
				<AuthProvider>
					<FirestoreProvider>
						<ThemeContext.Provider value={themes.dark}>
							<Router basename={''}>
								<Switch>
									<Route
										exact
										path={Routes.LANDING}
										component={HomePage}
									/>
									<Route
										from={Routes.HOME}
										to={Routes.LANDING}
									/>
									<Route
										exact
										path={Routes.MOVIE_DETAILS}
										component={DetailPage}
									/>
									<Route
										exact
										path={Routes.MOVIES}
										component={FilmsPage}
									/>
									<Route
										exact
										path={Routes.AUTH_SIGN_IN}
										component={SignInPage}
									/>
									<Route
										exact
										path={Routes.AUTH_REGISTER}
										component={Register}
									/>
									<Route
										exact
										path={Routes.ACCOUNT}
										component={AccountPage}
									/>
								</Switch>
							</Router>
						</ThemeContext.Provider>
					</FirestoreProvider>
				</AuthProvider>
			</FirebaseProvider>
		</div>
	)
}

export default App
