import React from 'react'
import './Style.css'

function Disclaimer() {
    return (
        <div className="disclaimer-section">

            <h2>Disclaimer</h2>

            <div className="disclaimer-chunk">

                <div className="disclaimer-chunk-main">
                    Invoices
                </div>
                <div className="disclaimer-chunk-sub">
                    We will call you once you reach out via the contact section and determine precisely what products and support you require.
                </div>
                <div className="disclaimer-chunk-sub">
                    A personal invoice will be put together and emailed to you for payment.
                </div>
                <div className="disclaimer-chunk-sub">
                    After payment has been received a receipt will be emailed for your records.
                </div>

                <div className="disclaimer-chunk-main">
                    Payments
                </div>
                <div className="disclaimer-chunk-sub">
                    All payments must be made through  Zelle, or Venmo.
                </div>

            </div>

            <div className="disclaimer-chunk">

                <div className="disclaimer-chunk-main">
                    Shipping
                </div>

                <div className="disclaimer-chunk-sub">
                    Please state exactly what shipping service you require when filling out the contact form.
                </div>
                <ul className="disclaimer-chunk-sub-list">
                    <li className="disclaimer-chunk-listed">
                        UPS Ground shipping is free
                    </li>
                    <li className="disclaimer-chunk-listed">
                        UPS Overnight shipping is available but cost will be calculated based on your location
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default Disclaimer
