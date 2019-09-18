import React from "react"
// import Header from "../components/header"
// import { Link } from "gatsby"
import Single from "../components/layouts/single"


let stHeader = {
    'font-family': 'FiraCodeBold'
}

let stIcon = {
    'width': '40px',
    'height': '40px'
}

export default () => <div>
    <Single>
        <div className="main-view">
        <br></br>
        <h5 style={stHeader}>Bio</h5>
        I am Robby Boney. A graduate from Washington State University Vancouver (WSUV) with a B.S. Computer Science and Minor in Mathematics. I am a programmer, music producer and learning enthusiast. I spent 4 years researching auditory regeneration using bioinformatic in the Coffin Research Lab while at WSUV and currently work at Interject Data Systems as a software engineer and product lead. I work in python and javascript and explore other languages when i can including Rust. My goal is to invent useful and efficient software to solve difficult problems. I also write and produce music for Harmonic Hemispheres (my personal project), Clyde Rivers and EXPLOR Music. I strive to learn and create to push the limits of what we call possible.
            
        <h5 style={stHeader}>Publications</h5> 
        <a style={stHeader} href="http://journal.frontiersin.org/article/10.3389/fncel.2016.00083/abstract">
        Natural bizbenzoquinoline derivatives protect zebrafish lateral line sensory hair cells from aminoglycoside toxicity (2016) </a>
        <br></br>
        <i>Matthew Kruger, Robert Boney, Alexander James Ordoobadi, Thomas F Sommers, Josef G Trapani and Allison B Coffin</i>

        <p>Moderate to severe hearing loss affects 360 million people worldwide and most often results from damage to sensory hair cells. Hair cell damage can result from aging, genetic mutations, excess noise exposure, and certain medications including aminoglycoside antibiotics. Aminoglycosides are effective at treating infections associated with cystic fibrosis and other life-threatening conditions such as sepsis, but cause hearing loss in 20-30% of... 
        </p>

        <h5 style={stHeader}>Talks</h5> 
        <ul>
            <li>
                <a href="https://www.sqlsaturday.com/920/Sessions/Details.aspx?sid=98183">
                    The Jupyterian Snake Invasion: Intro to Jupyter Notebooks, Python, Azure and Beyond
                </a>
                ,  SQL Saturday 2019 Oregon
            </li>
        </ul> 

        <h5 style={stHeader}>Get In Touch</h5> 
        <a href="https://www.linkedin.com/in/robby-boney-717486133/">
            <img style={stIcon} className="hoverable" src={"/img/icon_linkedin.png"}></img>
        </a>
        <a href="https://github.com/HarmonicHemispheres">
            <img style={stIcon} className="hoverable" src={"/img/icon_github.png"}></img>
        </a>
        
        <p style={stHeader}>robbyb@gointerject.com</p>
        <p style={stHeader}>robby.boney@harmonichemispheres.com</p>
    
        </div>
    </Single>
</div>
