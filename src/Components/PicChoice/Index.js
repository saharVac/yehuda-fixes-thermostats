import React from 'react'
import './Style.css'

function PicChoice({ src, choosePic }) {
    return (
        <div className="pic-choice" onClick={choosePic}>
            <img className="choicepic" src={src} alt="" />
        </div>
    )
}

export default PicChoice
