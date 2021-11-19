import React from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <NavLink to='/'>
                <div className="animated">
                    <h1 className="animatedTitle">simon f.</h1>
                </div>
            </NavLink>
            <nav>
                <NavLink to='/works'>Works</NavLink>
                <NavLink to='/resume.pdf' target="_blank">CV</NavLink>
            </nav>
        </header>
    )
}
