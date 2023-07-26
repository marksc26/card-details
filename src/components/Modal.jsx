import React from 'react'
import icon from '../assets/images/icon-complete.svg'
import './styles/Modal.css'

const Modal = ({ setShowInputs }) => {



    return (
        <section className='modal-section'>
            <div className='modal-container'>
                <img src={icon} alt="" />
                <h3>THANK YOU!
                </h3>
                <p>We've added your card details</p>
                <div className='button-complete'>
                    <button onClick={() => setShowInputs(true)}>Continue</button>
                </div>
            </div>
        </section>
    )
}

export default Modal