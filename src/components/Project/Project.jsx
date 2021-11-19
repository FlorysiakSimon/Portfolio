import React from 'react'
import {projets} from "../../data/data.js"
import './Project.scss'

export default function Project() {
    return (
        <section className="projet">
            {projets.map((projet,index) => {
                   return  <article className='projetCard' key={index}>
                            <a className='projetLink' href={`${projet.link}`} rel="noreferrer" target="_blank">
                                <img className='projetImg' src={projet.picture} alt={projet.title} />
                            </a>
                            <h2 className='projetTitle'>{projet.title}</h2>
                            <p className="projetDescription">{projet.description}</p>
                            <div className="projetTags">
                                {projet.tags.map((tag,index) => {
                                    return <div className="projetTagsTag" key={index}>{tag}</div>
                                })}
                            </div> 
                            
                            </article>
                })}
        </section>
    )
}
