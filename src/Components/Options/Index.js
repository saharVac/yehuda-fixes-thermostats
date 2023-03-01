import React from 'react'
import './Style.css'
import Option from '../Option/Index'
import pic10F81 from '../Pictures10F81/pic1.jpeg'
import picEmergency from '../PicturesEmergency/pic1.jpeg'
import picS30 from '../PicturesS30/pic1.jpeg'

// TODO: Add effect to chosen device

function Options({ setSelectedDevice }) {
    return (
        <div className="options">

            <div className="instructions">Choose your device:</div>

            <div className="options-container">
                <Option
                    name="iComfort Wifi - 10F81"
                    updateSelectedDevice={setSelectedDevice}
                    pic={pic10F81}
                />
                <Option
                    name="Emergency Stat - Replaces 10F81"
                    updateSelectedDevice={setSelectedDevice}
                    pic={picEmergency}
                />
                <Option
                    name="Lennox S30 Display and Hub"
                    updateSelectedDevice={setSelectedDevice}
                    pic={picS30}
                />
            </div>

        </div>
    )
}

export default Options
