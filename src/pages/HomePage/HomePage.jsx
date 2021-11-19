import React from 'react'
import Torus from '../../components/Torus/Torus'
import './HomePage.scss'

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
                    <h2>Hi, my name is
                        Simon Florysiak.
                    </h2>
                    <p>I'm a Front-end developer</p>
                </div>
                <a className="btn effect" href="/works" title="Learn More">My Portfolio</a>
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
