import React from 'react'
import './Style.css'

function Option({ name, updateSelectedDevice, pic, active }) {
    return (
        <div
            className={`option`}
            onClick={() => updateSelectedDevice(name)}
        >
            <div className={`option-image ${active ? "active" : ""}`}>
                <img src={pic} />
            </div>
        </div>
    )
}

export default Option
