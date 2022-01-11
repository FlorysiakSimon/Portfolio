import React from 'react'
import Torus from '../../components/Torus/Torus'
import './HomePage.scss'
import { NavLink } from 'react-router-dom';

export default function HomePage() {
    
    return (
        <>
        <div id="3d">
            <Torus></Torus>
        </div>
        
        <div className="container">
            <div className="containerTitle">
                <div className="containerTitlePhoto" >
                    <img src="/simon.jpg" alt="profile"></img>
                </div>
                <div className="containerTitleText">
                    <h2>
                        Simon Florysiak <br/>
                        Développeur Front-end
                    </h2>
                    {/* <p className='containerTitleBio'>Diplômé en développement web, sérieux et avec le goût de la performance,
                       je cherche une entreprise dans laquelle je pourrai m'investir et développer
                       sans cesse mes connaissances
                    </p> */}
                </div>
                <NavLink className="btn effect" to='/works' title="Learn More">Mon Portfolio</NavLink>
            </div>
            <div className="containerContact">
                <a href="https://github.com/FlorysiakSimon" className="link gitLink" ><span>github</span></a>
                <a href="https://www.linkedin.com/in/simon-florysiak-782759143/" className="link linkedinLink" ><span>linkedin</span></a>
                <a href="mailto:simon.florysiak@gmail.com" className="link mail" ><span>mail</span></a>
            </div>
        </div>


        
        </>
    )
}
