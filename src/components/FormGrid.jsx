import '../styles/FormGrid.css'
import React,{useState} from 'react'

import Education from './forms/Education';
import Experience from './forms/Experience'
import Objective from './forms/Objective'
import Personal from './forms/Personal'
import Projects from './forms/Projects'
import Skills from './forms/Skills'
import BasicForm from './basicForm';
const FormGrid = () => {
    const [active, setActive] = useState('personal')
    return (
        <div className="form-grid-conatiner">
            <div className="card text-center ">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <button className={active === 'personal' ? 'nav-link active': 'nav-link'}  onClick={() => setActive('personal')}>Personal </button>
                        </li>
                        <li className="nav-item">
                            <button className={active === 'objective' ? 'nav-link active': 'nav-link'}  onClick={() => setActive('objective')}>Objective</button>
                        </li>
                        <li className="nav-item">
                            <button className={active === 'education' ? 'nav-link active': 'nav-link'}  onClick={() => setActive('education')}>Education</button>
                        </li>
                        <li className="nav-item">
                            <button className={active === 'skill' ? 'nav-link active': 'nav-link'}  onClick={() => setActive('skill')}>Skills</button>
                        </li>
                        <li className="nav-item">
                            <button className={active === 'experience' ? 'nav-link active': 'nav-link'}  onClick={() => setActive('experience')}>Work Experience</button>
                        </li>
                        <li className="nav-item">
                            <button className={active === 'project'? 'nav-link active': 'nav-link'}  onClick={() => setActive('project')}>projects</button>
                        </li>
                        
                        <li className="nav-item">
                            <button className={active === 'basic'? 'nav-link active': 'nav-link'}  onClick={() => setActive('basic')}>basic</button>
                        </li>
                        
                    </ul>
                </div>
                <div className="card-body">
                {active === 'personal' && <Personal/>}
                {active === 'objective' && <Objective/>}
                {active === 'education' && <Education/>}
                {active === 'skill' && <Skills/>}
                {active === 'experience' && <Experience/>}
                {active === 'project' && <Projects/>}
                {active === 'basic' && <BasicForm/>}
               
                </div>
            </div>
        </div>

    )
}

export default FormGrid
