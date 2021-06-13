import React from 'react';
import { ThemeContext } from '../../utilities/theme'

import { useContext } from 'react';

const ThemeToggler = () => {

    const {theme, setTheme} = useContext(ThemeContext);

    const themeHandler = (e) => {
        e.preventDefault()

        setTheme(theme === 'light'? 'dark' : 'light');
    }

    return(
        <button onClick={themeHandler}>
            <span role="img" aria-label="switch theme">
                🌞
            </span>
        </button>
    )
}

export default ThemeToggler;