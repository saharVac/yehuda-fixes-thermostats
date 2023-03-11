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
import pic11 from './pic11.jpeg'

const picRow1 = [pic1, pic2, pic3, pic4]
const picRow2 = [pic5, pic6, pic7, pic8]
const picRow3 = [pic9, pic10, pic11]


function PicturesS30({ setSelectedPic, setPicShown, displayedPic }) {
    return (
        <div className="pictures-S30">
            <div className="pic-choices-row">
                {
                    picRow1.map((pic, index) => <PicChoice displayedPic={displayedPic} setSelectedPic={setSelectedPic} choosePic={() => setPicShown(pic)} src={pic} key={index} picNum={index + 1} />)
                }
            </div>
            <div className="pic-choices-row">
                {
                    picRow2.map((pic, index) => <PicChoice displayedPic={displayedPic} setSelectedPic={setSelectedPic} choosePic={() => setPicShown(pic)} src={pic} key={index} picNum={index + 5} />)
                }
            </div>
            <div className="pic-choices-row">
                {
                    picRow3.map((pic, index) => <PicChoice displayedPic={displayedPic} setSelectedPic={setSelectedPic} choosePic={() => setPicShown(pic)} src={pic} key={index} picNum={index + 9} />)
                }
            </div>
        </div>
    )
}

export default PicturesS30
