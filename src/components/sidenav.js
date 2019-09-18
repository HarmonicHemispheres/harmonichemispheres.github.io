import React from "react"
import { Link } from "gatsby"
let headerStyles = {
    'width': '100%'
}

export default (prop) => (
    <div className="hh-sidenav">
        <Link to="/">
            <img style={headerStyles} src={'/img/hh-logo.png'} alt="home"/>
        </Link>
        <Link to="/about/">About</Link>
        <Link to="/projects/">Projects</Link>
        <Link to="/writings/">Writings</Link>
        <Link to="/projects/music/">Music</Link>
        <Link to="/research/">Research</Link>
        <hr></hr>
        {prop.children}
    </div>
)