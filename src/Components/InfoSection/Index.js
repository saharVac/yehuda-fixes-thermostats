import React from 'react'
import './Style.css'
import content from '../../Content'

function InfoSection({ device }) {

    return (
        <div className="info-section">

            <h2 className="info-chunk">What You Get</h2>
            <ol type="1" className="what-you-get-list">
                {
                    content[device].get.map(youGet => {
                        if (typeof youGet == "object") {
                            return <ul key={youGet}>
                                {
                                    youGet.map(sub => <li key={sub} className="sub-info">{sub}</li>)
                                }
                            </ul>
                        }
                        return <li key={youGet}>{youGet}</li>
                    })
                }
            </ol>

            {
                content[device].refund ?
                    <>
                        <h2 className="info-chunk">Core Refund</h2>
                        <ul>
                            {
                                content[device].refund.map(piece => <li key={piece}>{piece}</li>)
                            }
                        </ul>
                    </> :
                    ""
            }


            {
                content[device].warranty ?
                    <>
                        <h2 className="info-chunk">Warranty</h2>
                        <p>{content[device].warranty}</p>
                    </> :
                    ""
            }

            {
                content[device].warning ?
                    <>
                        <h2 className="info-chunk warning">Warning</h2>
                        <ul className="warning-list">
                            {
                                content[device].warning.map(item => <li key={item}>{item}</li>)
                            }
                        </ul>
                    </> :
                    ""
            }

        </div>
    )
}

export default InfoSection