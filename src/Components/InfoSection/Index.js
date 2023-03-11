import React from 'react'
import './Style.css'
import content from '../../Content'

function InfoSection({ device }) {

    return (
        <div className="info-section">

            <h2 className="info-chunk">Price</h2>
            <div className="price-chunk">

                <div className="price-group">
                    {
                        device === "Lennox S30 Display and Hub" ?
                            <div className="price-type">Display</div> :
                            ""
                    }
                    <div className="price">{content[device].price["Display"]}</div>
                </div>

                {
                    content[device].price["Hub"] ?
                        <>
                            <div className="price-group">
                                <div className="price-type">Hub</div>
                                <div className="price">{content[device].price["Hub"]}</div>
                            </div>
                        </> :
                        ""
                }
                {
                    content[device].price["Bundle Both"] ?
                        <>
                            <div className="price-group">
                                <div className="price-type">Bundle Both</div>
                                <div className="price">{content[device].price["Bundle Both"]}</div>
                            </div>
                        </> :
                        ""
                }
            </div>

            <h2 className="info-chunk">What You Get</h2>
            <div type="1" className="what-you-get-list">
                {
                    content[device].get.map(youGet => {
                        if (typeof youGet == "object") {
                            return <div className="sub-info" key={youGet}>
                                {
                                    youGet.map(sub => <li className="item" key={sub}>{sub}</li>)
                                }
                            </div>
                        }
                        return <li key={youGet}>{youGet}</li>
                    })
                }
            </div>

            {
                content[device].refund ?
                    <>
                        <h2 className="info-chunk">Core Refund</h2>
                        <div>
                            {
                                content[device].refund.map(piece => <li className="item" key={piece}>{piece}</li>)
                            }
                        </div>
                    </> :
                    ""
            }


            {
                content[device].warranty ?
                    <>
                        <h2 className="info-chunk">Warranty</h2>
                        <p className="item">{content[device].warranty}</p>
                    </> :
                    ""
            }

            {
                content[device].warning ?
                    <>
                        <h2 className="info-chunk warning">Warning</h2>
                        <div className="warning-list">
                            {
                                content[device].warning.map(item => <li className="item" key={item}>{item}</li>)
                            }
                        </div>
                    </> :
                    ""
            }

        </div>
    )
}

export default InfoSection
