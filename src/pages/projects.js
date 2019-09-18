import React from "react"
// import Header from "../components/header"
import { Link } from "gatsby"
import Base from "../components/layouts/base"
import Square from "../components/square"
import SquareURL from "../components/squareurl"

let style = {
    'margin': 'auto',
    // 'width': '100px',
    'text-align': 'center'
}

let stHeader = {
    'font-family': 'FiraCodeBold'
}


export default () => (
<Base>
    <div className="main-view">
        <h4 style={stHeader}>Things Ive Done and Do</h4>

        <h5>Current</h5>
        <div className="inline">
            <Square title="Music"
                    cover="/img/music.png"
                    link="/projects/music/"
                    linecolor={{ "background-color": "#302827" }}
            ></Square>
    
        </div>

        <h5>Past</h5>
        <div className="inline">
            <SquareURL title="BeetleETL"
                    cover="https://assets.gitlab-static.net/uploads/-/system/project/avatar/6342351/Beetle_Logo.jpg?width=64"
                    link="https://gitlab.com/Open-Interject/Beetle-ETL"
                    linecolor={{ "background-color": "#c7c2c1" }}
            ></SquareURL>

            <SquareURL title="Biotools"
                    cover="/img/proj-biotools.png"
                    link="https://github.com/HarmonicHemispheres/Biotools"
                    linecolor={{ "background-color": "#2c914f" }}
            ></SquareURL>
            
            <SquareURL title="Vaultron"
                    cover="/img/vt-logo.png"
                    link="https://vaultron.github.io/"
                    linecolor={{ "background-color": "#184273" }}
            ></SquareURL>
        </div>
    
        <hr></hr>
        <Link style={style} to="/">Back</Link>
        <br></br>
        <br></br>
    </div>
</Base>
)
