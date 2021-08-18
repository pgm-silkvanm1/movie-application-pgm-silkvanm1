import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/firebase/auth.context';
import styles from './SignInPage.module.scss';

const SignInPage = ({ children }) => {
	const history = useHistory()
	const [signInForm, setSignInForm] = useState({
		txtEmail: '',
		txtPassword: '',
	});
	const { currentUser, signInWithEmailAndPassword, signOut } = useAuth();

	const handleSubmit = async (ev) => {
		ev.preventDefault()

		const result = await signInWithEmailAndPassword(
			signInForm.txtEmail,
			signInForm.txtPassword
		)
		if (result) {
			history.goBack()
		};
	};

	const handleInputChange = async (ev) => {
		setSignInForm({
			...signInForm,
			[ev.target.name]: ev.target.value,
		})
	};

	return (
        <div className={styles.signIn}>
            <h1>Movie DataBase Sign In</h1>
            <div className={styles.container}>
            
            <div className={styles.row}>
                {/* OM IN TE LOGGEN */}
                {!!currentUser === false && (
                    <form onSubmit={(ev) => handleSubmit(ev)}>
                        <div className={styles.formGroup}>
                            <label htmlFor="txtEmail">
                                Email address
                            </label>
                            <input
                                type="email"
                                className={styles.formControl}
                                id="txtEmail"
                                name="txtEmail"
                                aria-describedby="emailHelp"
                                onChange={handleInputChange}
                                value={signInForm.txtEmail}
                            />
                            <br></br>
                            <small
                                className={styles.formSmallText}
                            >
                                We'll never share your email with anyone
                                else.
                            </small>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="txtPassword">
                                Password
                            </label>
                            <input
                                type="password"
                                className={styles.formControl}
                                id="txtPassword"
                                name="txtPassword"
                                onChange={handleInputChange}
                                value={signInForm.txtPassword}
                            />
                        </div>
                        <button
                            type="submit"
                            className={styles.btn}>
                            Sign In
                        </button>
                    </form>
                )}

                {/* INGELOGD */}
                {!!currentUser === true && (
                    <div>
                        <img
                            src='https://image.flaticon.com/icons/png/512/1738/1738760.png'
                            alt={currentUser.email}
                        />
                        <button onClick={() => signOut()}>
                            Sign out
                        </button>
                    </div>
                )}
            </div>
        </div>
        </div>
        
	)
};

export default SignInPage
