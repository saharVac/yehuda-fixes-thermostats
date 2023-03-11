import React, { useEffect, useState } from 'react'
import './style.css'
import Pictures10F81 from '../Pictures10F81/Index'
import PicturesS30 from '../PicturesS30/Index'
import PicturesEmergency from '../PicturesEmergency/Index'
import content from '../../Content'
import pic10F81 from '../Pictures10F81/pic1.jpeg'
import picEmergency from '../PicturesEmergency/pic1.jpeg'
import picS30 from '../PicturesS30/pic1.jpeg'

function DisplayedImage({ device, setSelectedPic, displayedPic }) {

    const [picShown, setPicShown] = useState(pic10F81)

    const updateDisplayedPic = (pic) => {
        setSelectedPic(pic)
    }

    useEffect(() => {
        setPicShown(
            device === "iComfort Wifi - 10F81" ?
                pic10F81 :
                device === "Emergency Stat - Replaces 10F81" ?
                    picEmergency :
                    picS30
        )
    }, [device])

    // useEffect(() => {
    //     setPicShown(
    //         device === "iComfort Wifi - 10F81" ?
    //             pic10F81 :
    //             device === "Emergency Stat - Replaces 10F81" ?
    //                 picEmergency :
    //                 picS30
    //     )
    // }, [picShown])

    return (
        <div className="picture-area">

            <img
                className="chosen-picture"
                src={picShown}
                alt="main-picture"
            />

            <h2 className="device-name">{content[device].title}</h2>

            <div className="picture-choices">

                <div className="choice-instructions">Choose picture to view:</div>

                {
                    device === "iComfort Wifi - 10F81" ?
                        <Pictures10F81
                            updateDisplayedPic={updateDisplayedPic}
                            setSelectedPic={setSelectedPic}
                            setPicShown={setPicShown}
                            displayedPic={displayedPic}
                        /> :
                        device === "Emergency Stat - Replaces 10F81" ?
                            <PicturesEmergency
                                updateDisplayedPic={updateDisplayedPic}
                                setSelectedPic={setSelectedPic}
                                setPicShown={setPicShown}
                                displayedPic={displayedPic}
                            /> :
                            <PicturesS30
                                updateDisplayedPic={updateDisplayedPic}
                                setSelectedPic={setSelectedPic}
                                setPicShown={setPicShown}
                                displayedPic={displayedPic}
                            />
                }

            </div>

        </div>
    )
}

export default DisplayedImage
