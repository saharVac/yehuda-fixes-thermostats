import React from 'react'
import './Style.css'

function Disclaimer() {
    return (
        <div className="disclaimer-section">

            <h2>Disclaimer</h2>

            <div className="disclaimer-chunk">

                <div className="disclaimer-chunk-main">
                    Invoices and Payments
                </div>

                <div className="disclaimer-chunk-sub">
                    All  are done off site.
                </div>
                <div className="disclaimer-chunk-sub">
                    Must be made through Zelle, PayPal, or Venmo
                </div>
                <div className="disclaimer-chunk-sub">
                    Receipts will be sent through email
                </div>

            </div>

            <div className="disclaimer-chunk">

                <div className="disclaimer-chunk-main">
                    Shipping
                </div>

                <div className="disclaimer-chunk-sub">
                    UPS Ground shipping is free
                </div>
                <div className="disclaimer-chunk-sub">
                    Overnight shipping is available but extra.
                </div>

            </div>

        </div>
    )
}

export default Disclaimer
