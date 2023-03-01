import React, { useRef } from 'react'
import './Style.css'
import Axios from 'axios'

// TODO: Add option to select device which gets added to email text
// TODO: Form disappers with success message

function Form() {

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const emailRef = useRef()
    const phoneNumberRef = useRef()
    const symptomsRef = useRef()

    const sendMail = () => {
        // TODO: update the API endpoint once new one created
        Axios.post("http://svac-shopping-list.herokuapp.com/send-contact-email", { firstName: firstNameRef.current.value, lastName: lastNameRef.current.value, email: emailRef.current.value, phoneNumber: phoneNumberRef.current.value, symptoms: symptomsRef.current.value }).then(response => {
            // Clear form and indicate message was sent
        }).catch(err => console.log(err))
    }

    return (
        <form action="#">
            <div className="name-area form-row">
                <div className="input-group name-input" id="first-name">
                    First Name: <input type="text" ref={firstNameRef} />
                </div>
                <div className="input-group name-input">
                    Last Name: <input type="text" ref={lastNameRef} />
                </div>
            </div>
            <div className="input-group form-row">
                Email: <input type="email" ref={emailRef} />
            </div>
            <div className="input-group form-row">
                Phone Number: <input type="tel" ref={phoneNumberRef} />
            </div>
            <div className="input-group form-row">
                Symptoms: <textarea ref={symptomsRef} cols="30" rows="10"></textarea>
            </div>
            <button onClick={() => sendMail()} className="submit">Contact</button>
        </form>
    )
}

export default Form
