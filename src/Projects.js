import React from 'react'
import p1 from './img/1.jpg'
import p2 from './img/2.jpg'
import p3 from './img/3.jpg'
import p4 from './img/4.jpg'
import p5 from './img/5.PNG'
import p6 from './img/6.jpg'
import p7 from './img/7.jpg'
import p8 from './img/8.jpg'
import p9 from './img/9.jpg'
import './projects.css'

function Projects() {
    return (
        <div>
            <h3> Some of my Projects </h3>
                    <div className='line2'></div>
                <div className='projects_img'>
                    
                    <img src={p1} alt="p1"/>
                    <img src={p2} alt="p2"/>
                    <img src={p3} alt="p3"/>
                    <img src={p4} alt="p4"/>
                    <img src={p5} alt="p5"/>
                    <img src={p6} alt="p6"/>
                    <img src={p7} alt="p7"/>
                    <img src={p8} alt="p8"/>
                    <img src={p9} alt="p9"/>
                    
                </div>
        </div>
    )
}

export default Projects
