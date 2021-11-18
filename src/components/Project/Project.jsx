import React from 'react'
import {projets} from "../../data/data.js"
import { NavLink } from 'react-router-dom'
import './Project.scss'

export default function Project() {
    return (
        <section className="projet">
            {projets.map((projet,index) => {
                   return  <article className='projetCard' key={index}>
                            <NavLink className='projetLink'  to={`/projet/${projet.id}`}>
                                <img className='projetImg' src={projet.picture} alt={projet.title} />
                                <h2 className='projetTitle'>{projet.title}</h2>
                                <p className="projetDescription">{projet.description}</p>
                            </NavLink>
                            </article>
                })}
        </section>
    )
}
