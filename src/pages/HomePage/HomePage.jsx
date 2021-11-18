import React from 'react'
import './HomePage.scss'

export default function HomePage() {
    return (
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
            <div className="containerBio">
            </div>
        </div>
    )
}
