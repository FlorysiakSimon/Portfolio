import React from 'react'
import Torus from '../../components/Torus/Torus'
import './HomePage.scss'
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion"

export default function HomePage() {
    
    return (
        <>
        <div id="3d">
            <Torus></Torus>
        </div>
        
        <motion.div 
            Layout
            animate={{ opacity: 1 , y:0}}
            initial={{opacity:0, y:100}}
            transition={{ ease: "easeIn", duration: 0.5 }}
            className="container"
        >
            <div className="containerTitle">
                <div className="containerTitlePhoto" >
                    <img src="/simon.jpg" alt="profile"></img>
                </div>
                <div className="containerTitleText">
                    <h2>
                        Simon Florysiak <br/>
                        Développeur Front-end
                    </h2>
                </div>
                <NavLink className="btn effect" to='/works' title="Learn More">Mon Portfolio</NavLink>
            </div>
            <div className="containerContact">
                <a href="https://github.com/FlorysiakSimon" className="link gitLink" ><span>github</span></a>
                <a href="https://www.linkedin.com/in/simon-florysiak-782759143/" className="link linkedinLink" ><span>linkedin</span></a>
                <a href="mailto:simon.florysiak@gmail.com" className="link mail" ><span>mail</span></a>
            </div>
        </motion.div>


        
        </>
    )
}
