import React from "react"
// import Header from "../components/header"
// import { Link } from "gatsby"
import Base from "../components/layouts/base"
import SquareURL from "../components/squareurl"
import Sidenav from "../components/sidenav"

let sn = <Sidenav>
</Sidenav>

let stHeader = {
    'font-family': 'FiraCodeBold'
}

let coffin_lab = { 
    // 'padding': '10px',
    // 'width': '200px',
    'margin': '10px'
}

export default () => ( <div>
    <Base side={sn}>
        <div className="main-view">
            <h4 style={stHeader}>Research</h4>

            <hr></hr>
            
            <div className="inline">
                <a style={coffin_lab} href="https://gointerject.com/">
                    <img style={{'width':'130px'}} src="https://media.licdn.com/dms/image/C561BAQHazaR69VMgmg/company-background_10000/0?e=2159024400&v=beta&t=w_ZTgzp4n0UQnROA20j7mXN1e9Rc6pGeQj-DIrvb4jg"></img>
                </a>
                <h6 style={stHeader}>Interject Data Systems Research & Development</h6>
                I work on product development and software engineering focussed code generation software, data science and cloud architecture.
            </div>
            
            <div className="inline">
                <a style={coffin_lab} href="https://labs.wsu.edu/allison-coffin/">
                    <img style={{ 'width': '130px' }} src="https://s3.wp.wsu.edu/uploads/sites/1285/2019/03/Asset-1-2.png"></img>
                </a>
                <h6 style={stHeader}>Coffin Research Lab</h6>
                While at the Coffin Research Lab WSUV during my undergraduate, i worked on auditory hearing loss through drug discovery 
                projects using larvel zebrafish as well as bioinformatics focussed on auditory regeneration possibilities for humans.
            </div>
            
        </div>
    </Base>
</div>
)