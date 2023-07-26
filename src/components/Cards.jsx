import React, { useEffect } from 'react'
import './styles/Cards.css'
import logo from '../assets/images/card-logo.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Cards = ({ numberCard, nameCard, month, year, cvc }) => {

    useEffect(() => {
        AOS.init({
            duration: 1200,
            delay: 200,
        })
    }, [])


    return (
        <section className='cards-section' data-aos='fade-right'>
            <div className='card1'>
                <div className='card-front' data-aos='fade-right'>

                    <div className='card-logo'>
                        <img src={logo} alt="" />
                    </div>

                    <div className='card-number'>
                        <h3>{numberCard}</h3>
                    </div>

                    <div className='card-name'>
                        <h3>{(nameCard).toUpperCase().substr(0, 24)}</h3>

                    </div>
                    <div className='card-date'>
                        <h3>{month}</h3><p>/</p><h3>{year}</h3>
                    </div>


                </div>
            </div>
            <div className='card2'>
                <div className='card-back' >
                    <div className='back'>
                        <h3>{cvc}</h3>
                    </div>

                </div>
            </div>




        </section>
    )
}

export default Cards