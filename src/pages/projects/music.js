import React from "react"
// import Header from "../components/header"
// import { Link } from "gatsby"
import Single from "../../components/layouts/single"
import Square from "../../components/square"
import SquareURL from "../../components/squareurl"

export default () => (
    <div>
        <Single>
            <div className="main-view">
                <h5>Music Projects</h5>
                I have been playing piano since 2004 and later taught myself mixing and mastering, and delved deep into 
                music production and the world of synthesizers. Below are projects that i write, mix and master for. 
                <a>Harmonic Hemispheres</a> is my personal project however.
                <hr></hr>
                <div className="inline">
                    <Square title="Harmonic Hemispheres"
                        cover={"/img/hh_cover.png"}
                        link="https://soundcloud.com/harmonichemispheres"
                        linecolor={{ 'background-color':'#4360b0'}}
                    ></Square>
                    <SquareURL title="Explor Music"
                        cover="https://i1.sndcdn.com/avatars-000484129155-7k7r3l-t200x200.jpg"
                        link="https://soundcloud.com/explor-music"
                        linecolor={{ 'background-color': '#242424' }}
                    ></SquareURL>
                    <SquareURL title="Clyde Rivers Music"
                        cover="https://i1.sndcdn.com/artworks-000508943832-d1fqq4-t500x500.jpg"
                        link="https://soundcloud.com/clyderiversmusic"
                        linecolor={{ 'background-color': '#391f70' }}
                    ></SquareURL>
                </div>
            </div>
        </Single>
    </div>
)