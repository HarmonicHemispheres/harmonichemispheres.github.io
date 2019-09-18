import React from "react"
import Header from "../components/header"
// import { Link } from "gatsby"
import Base from "../components/layouts/base"
import Square from "../components/square"

import Sidenav from "../components/sidenav"
let sn = <Sidenav></Sidenav>

let cardStyles = {
    'padding': '10px',
    'width': '32%',
    'display': 'inline-block'
}

export default () => <div>
    <Base side={sn}>         
        
        <Header />
        
    </Base>
</div>
