import React from 'react'
import PicChoice from '../PicChoice/Index'
import pic1 from './pic1.jpeg'
import pic2 from './pic2.jpeg'
import pic3 from './pic3.jpeg'
import pic4 from './pic4.jpeg'
import pic5 from './pic5.jpeg'
import pic6 from './pic6.jpeg'
import pic7 from './pic7.jpeg'
import pic8 from './pic8.jpeg'
import pic9 from './pic9.jpeg'
import pic10 from './pic10.jpeg'

function PicturesEmergency({ updateDisplayedPic }) {
    return (
        <div className="pictures-emergency">
            <div className="pic-choices-row">
                <PicChoice choosePic={() => updateDisplayedPic(pic1)} src={pic1} />
                <PicChoice choosePic={() => updateDisplayedPic(pic2)} src={pic2} />
                <PicChoice choosePic={() => updateDisplayedPic(pic3)} src={pic3} />
                <PicChoice choosePic={() => updateDisplayedPic(pic4)} src={pic4} />
            </div>
            <div className="pic-choices-row">
                <PicChoice choosePic={() => updateDisplayedPic(pic5)} src={pic5} />
                <PicChoice choosePic={() => updateDisplayedPic(pic6)} src={pic6} />
                <PicChoice choosePic={() => updateDisplayedPic(pic7)} src={pic7} />
                <PicChoice choosePic={() => updateDisplayedPic(pic8)} src={pic8} />
            </div>
            <div className="pic-choices-row">
                <PicChoice choosePic={() => updateDisplayedPic(pic9)} src={pic9} />
                <PicChoice choosePic={() => updateDisplayedPic(pic10)} src={pic10} />
            </div>
        </div>
    )
}

export default PicturesEmergency
