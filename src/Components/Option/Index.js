import React from 'react'
import './Style.css'

function Option({ name, updateSelectedDevice, pic }) {
    return (
        <div className="option" onClick={() => updateSelectedDevice(name)}>
            <div className="option-image">
                <img src={pic} />
            </div>
            <div className="option-name">{name}</div>
        </div>
    )
}

export default Option
