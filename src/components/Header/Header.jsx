import React from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <NavLink to='/'>
                <div className="animated">
                    <h1 className="animatedTitle">simon florysiak</h1>
                </div>
            </NavLink>
            <nav>
                <NavLink to='/'>Works</NavLink>
                <NavLink to='/'>CV</NavLink>
            </nav>
        </header>
    )
}
