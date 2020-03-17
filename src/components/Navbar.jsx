// {Package imports
import React, { useState } from 'react'

// File imports
import { useDarkMode } from '../hooks/useDarkMode'


const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false)
    const toggleMode = ( e ) => {
        e.preventDefault()
        console.log('toggled: ', !darkMode)
        setDarkMode(!darkMode)
    }

    return (
        <nav className="navbar">
            <h1>Crypto Tracker</h1>
            <div className="dark-mode__toggle">
                <div onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'}></div>
            </div>
        </nav>
    )
}

export default Navbar