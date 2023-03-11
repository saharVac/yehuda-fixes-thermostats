import React from 'react'
import PicChoice from '../PicChoice/Index'
import pic1 from './pic1.jpeg'
import pic2 from './pic2.png'
import pic3 from './pic3.png'
import pic4 from './pic4.png'

const pics = [pic1, pic2, pic3, pic4]

function Pictures10F81({ setSelectedPic, setPicShown, displayedPic }) {
    return (
        <div className="pictures-10F81">
            <div className="pic-choices-row">
                {
                    pics.map((pic, index) => <PicChoice displayedPic={displayedPic} setSelectedPic={setSelectedPic} choosePic={() => setPicShown(pic)} src={pic} key={index} picNum={index + 1} />)
                }
            </div>
        </div>
    )
}

export default Pictures10F81
