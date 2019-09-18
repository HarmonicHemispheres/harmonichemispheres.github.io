import React from "react"
// import containerStyles from "./base.module.css"
import Sidenav from "../sidenav"

export default (prop) => (
    <div>
        {/* Compiled and minified CSS */}
        <title>Harmonic Hemispheres</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, i</meta>nitial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        <link rel="icon"
            type="image/png"
            href={"/img/favicon1.png"} />

        {/* Compiled and minified JavaScript  */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

        <div className="grid-container">
            {prop.side}
            <div className="hh-main">
                {prop.children}
            </div>
        </div>
    </div>
)