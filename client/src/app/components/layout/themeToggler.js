import React from 'react';
import { ThemeContext } from '../../utilities/theme';
import { useContext } from 'react';
import styles from './Header.module.scss';

const ThemeToggler = () => {

    const {theme, setTheme} = useContext(ThemeContext);

    const themeHandler = (e) => {
        e.preventDefault()

        setTheme(theme === 'light'? 'dark' : 'light');
    };

    return(
        <button className={styles.theme} onClick={themeHandler}>
            <span role="img" aria-label="switch theme">
                🌞
            </span>
        </button>
    )
};

export default ThemeToggler;