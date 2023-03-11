import React from 'react'
import './Style.css'

function PicChoice({ src, choosePic, picNum, setSelectedPic, displayedPic }) {
    return (
        <div
            className="pic-choice"
            onClick={() => {
                choosePic()
                setSelectedPic(picNum)
            }}
        >
            <div className={`pic-choice-img-container ${displayedPic === picNum ? "active" : ""}`}>
                <img className="choicepic" src={src} alt="" />
            </div>

        </div>
    )
}

export default PicChoice
