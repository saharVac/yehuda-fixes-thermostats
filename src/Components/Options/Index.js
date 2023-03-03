import React from 'react'
import './Style.css'
import Option from '../Option/Index'
import pic10F81 from '../Pictures10F81/pic1.jpeg'
import picEmergency from '../PicturesEmergency/pic1.jpeg'
import picS30 from '../PicturesS30/pic1.jpeg'

// TODO: Add effect to chosen device

function Options({ setSelectedDevice, displayedDevice }) {
    return (
        <div className="options">

            <div className="instructions">Choose your device:</div>

            <div className="options-container">

                <div className="options-pics-row">
                    <Option
                        name="iComfort Wifi - 10F81"
                        updateSelectedDevice={setSelectedDevice}
                        pic={pic10F81}
                        active={displayedDevice == "iComfort Wifi - 10F81"}
                    />
                    <Option
                        name="Emergency Stat - Replaces 10F81"
                        updateSelectedDevice={setSelectedDevice}
                        pic={picEmergency}
                        active={displayedDevice == "Emergency Stat - Replaces 10F81"}
                    />
                    <Option
                        name="Lennox S30 Display and Hub"
                        updateSelectedDevice={setSelectedDevice}
                        pic={picS30}
                        active={displayedDevice == "Lennox S30 Display and Hub"}
                    />
                </div>

                <div className="device-labels">
                    <div className="device-label">
                        iComfort Wifi- 10F81
                    </div>
                    <div className="device-label">
                        Emergency Stat- Replaces 10F81
                    </div>
                    <div className="device-label">
                        Lennox S30 Display and Hub
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Options
