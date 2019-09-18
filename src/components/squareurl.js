import React from "react"

// let stylesHeader = {
//     // 'height': '9px',
//     'background': '#13b6d6',
//     // 'margin': '10px'
// }

let stylesImg = {
    'width': '100%',
    'vertical-align': 'middle'
}

export default (prop) => (
    <div style={prop.style} className="hoverable square">
        <a href={prop.link}>
            <div style={prop.linecolor} className='thinline'></div>
            <img style={stylesImg} src={prop.cover}></img>
        </a>
    </div>
)
