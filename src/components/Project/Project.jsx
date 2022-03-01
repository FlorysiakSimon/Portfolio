import React from 'react'
import {projets} from "../../data/data.js"
import { motion } from "framer-motion"
import './Project.scss'

export default function Project() {

    
    return (
        <motion.div 
            Layout
            animate={{ opacity: 1 , y:0}}
            initial={{opacity:0, y:100}}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className="projet"
        >
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
        </motion.div>
    )
}
