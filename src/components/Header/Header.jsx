import React from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'

export default function Header() {


    const [currentTheme,setCurrentTheme ] = React.useState(localStorage.getItem('theme'))


    document.addEventListener("DOMContentLoaded", function() {
        
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
        
            if (currentTheme === 'light') {
                setCurrentTheme('light')
                document.querySelector('input[type="checkbox"]').checked = true;
            }
        }
    })

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');

            
        }
        else {        
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');



        }    
    }
  
  
    return (
        <header>
            <div className='navContainer'>
                <NavLink to='/'>
                    <div className="animated">
                        <h1 className="animatedTitle">simon florysiak</h1>
                    </div>
                </NavLink>
                <nav>
                    <NavLink to='/works'>Works</NavLink>
                    <NavLink to='/resume.pdf' target="_blank">CV</NavLink>
                    <div className="theme-switch-wrapper">
                        <label className="theme-switch" htmlFor="checkbox" onClick={switchTheme}>
                            <input type="checkbox" id="checkbox" />
                            <div className="slider round"></div>
                        </label>
                    </div>
                </nav>
            </div>
        </header>
    )
}
