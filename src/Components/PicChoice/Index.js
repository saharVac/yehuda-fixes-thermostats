import React from 'react'
import './Style.css'

function PicChoice({ src, choosePic, picNum, setSelectedPic, displayedPic }) {
    return (
        <div
            className={`pic-choice ${displayedPic === picNum ? "active" : ""}`}
            // className={`pic-choice`}
            onClick={() => {
                choosePic()
                setSelectedPic(picNum)
            }}
        >
            <img className="choicepic" src={src} alt="" />
        </div>
    )
}

export default PicChoice
