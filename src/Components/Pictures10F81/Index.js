import React from 'react'
import PicChoice from '../PicChoice/Index'
import pic1 from './pic1.jpeg'
import pic2 from './pic2.png'
import pic3 from './pic3.png'
import pic4 from './pic4.png'

function Pictures10F81({ updateDisplayedPic }) {
    return (
        <div className="pictures-10F81">
            <div className="pic-choices-row">
                <PicChoice active choosePic={() => updateDisplayedPic(pic1)} src={pic1} />
                <PicChoice choosePic={() => updateDisplayedPic(pic2)} src={pic2} />
                <PicChoice choosePic={() => updateDisplayedPic(pic3)} src={pic3} />
                <PicChoice choosePic={() => updateDisplayedPic(pic4)} src={pic4} />
            </div>
        </div>
    )
}

export default Pictures10F81
