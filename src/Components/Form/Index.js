import React from 'react'
import './Style.css'

function Form() {
    return (
        <form action="#">
            <div className="name-area form-row">
                <div className="input-group name-input" id="first-name">
                    First Name: <input type="text"/>
                </div>
                <div className="input-group name-input">
                    Last Name: <input type="text"/>
                </div>
            </div>
            <div className="input-group form-row">
                Email: <input type="email"/>
            </div>
            <div className="input-group form-row">
                Phone Number: <input type="tel"/>
            </div>
            <div className="input-group form-row">
                Symptoms: <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button className="submit">Contact</button>
        </form>
    )
}

export default Form
