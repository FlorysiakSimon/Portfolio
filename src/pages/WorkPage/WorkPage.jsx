import React from 'react'
import './WorkPage.scss'
import Project from '../../components/Project/Project'
import Model from '../../components/Model/Model'

export default function WorkPage() {
    return (
        
        <div className="work">
            <div>
             <Model /> 
            </div>
            <h2>Works</h2>
            <Project />
        </div>
    )
}
