import React from "react"
// import containerStyles from "./base.module.css"
// import Sidenav from "../sidenav"
import { Link } from "gatsby"

let style = {
    'padding-top': '10px',
    'padding-left': '10%',
    'padding-right': '10%',
}

export default (prop) => (
    <div>
        {/* Compiled and minified CSS */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />

        {/* Compiled and minified JavaScript  */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

        <div style={style} className="hh-main">
            {prop.children}
            <hr></hr>
            <Link to="/">Back</Link>
        </div>
    </div>
)