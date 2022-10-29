import React from 'react'
import './Style.css'

function CallForAction() {
    return (
        <div className="call-for-action">
            <p className="call-for-action-title">Get your thermostat repaired for $575</p>
            <ul className="repairs-description">
                <li>Repair time depends on symptoms (3 business days)</li>
                <li>If thermostat isn’t repairable, you get a $50 trade-in (applicable towards an already refurbished thermostat if in stock)</li>
            </ul>
        </div>
    )
}

export default CallForAction