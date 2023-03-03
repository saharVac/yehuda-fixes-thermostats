import React from 'react'
import './Style.css'

function PicChoice({ src, choosePic, active }) {
    return (
        <div className={`pic-choice ${active ? "active" : ""}`} onClick={choosePic}>
            <img className="choicepic" src={src} alt="" />
        </div>
    )
}

export default PicChoice
