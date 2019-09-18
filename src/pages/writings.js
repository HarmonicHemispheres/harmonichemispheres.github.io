import React from "react"
// import Header from "../components/header"
// import { Link } from "gatsby"
import Base from "../components/layouts/base"
// import MDTemp from "../components/layouts/mdtemp"
import Sidenav from "../components/sidenav"
import SquareURL from "../components/squareurl"
let sn = <Sidenav>
    fancy
</Sidenav>


let cardStyles = {
    'padding': '10px',
    'width': '32%',
    'display': 'inline-block'
}


export default () => <div>
    <Base side={sn}>
        <div className="main-view">
            <h5>Overview</h5>
            Below are series of writings that i add content to.

            <hr></hr>
            
            <div>
                {/* <SquareURL
                    link="https://medium.com/@robbyb_77782"
                    cover="https://miro.medium.com/max/390/1*emiGsBgJu2KHWyjluhKXQw.png"
                    linecolor={{ "background-color": "#e31437"}}
                ></SquareURL> */}
                <div style={cardStyles} className="hh-card">
                    Coming Soon
                </div>
            </div>
        </div>
    </Base>
</div>
