import React, { useEffect } from 'react'
import './styles/Inputs.css'
import { useForm } from 'react-hook-form'
import AOS from 'aos'
import 'aos/dist/aos.css'




const Inputs = ({ setShowInputs, setNameCard, setNumberCard, setCvc, setMonth, setYear }) => {

    const { handleSubmit, register, formState: { errors } } = useForm()


    const submitForm = () => {
        setShowInputs(false)
    }

    const handleCardNumber = (e) => {
        const input = e.target.value
        const formattedInput = input.replace(/\s/g, '')
            .substr(0, 16)
            .replace(/(\d{4})(?=\d)/g, '$1 ')

        if (formattedInput.length >= 16) {
            setNumberCard(formattedInput)
        }


    }

    const filterNumericInput = (e) => {
        const charCode = e.which ? e.which : e.keyCode;
        const allowedCharacters = [8, 9, 46]; // Permitir Backspace (8)  Tab (9) y Delete (46)

        // Permitir solo dígitos numéricos (códigos de caracteres 48-57)
        if (charCode < 48 || charCode > 57) {
            if (!allowedCharacters.includes(charCode)) {
                e.preventDefault();
            }
        }

    };

    const handleMonth = (e) => {
        if (e.target.value >= 1 && e.target.value <= 12) {
            setMonth(e.target.value)
        }
    }

    const handleYear = (e) => {
        if (e.target.value >= 23) {
            setYear(e.target.value)
        }
    }

    const handleKeyPress = (e) => {
        const charCode = e.which ? e.which : e.keyCode;
        if (charCode >= 48 && charCode <= 57) {
            // Si el carácter es un número (0-9), evita que se ingrese en el campo
            e.preventDefault()
        }
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 200,

        })
    }, [])


    return (
        <section className='inputs-section'>

            <div className='form-container' data-aos='fade-down'>
                <form onSubmit={handleSubmit(submitForm)} action="">
                    <div className='name'>
                        <label htmlFor="">CARDHOLDER NAME</label>
                        <input onKeyUp={(e) => setNameCard(e.target.value)} type="text" name='name' {...register('name', { required: true })} maxLength='28' onKeyDown={handleKeyPress} />
                        {errors.name && <span>Can't be blank</span>}
                    </div>
                    <div className='number'>
                        <label htmlFor="">CARD NUMBER</label>
                        <input onKeyUp={(e) => handleCardNumber(e)} type="text" name='text' {...register('number', { required: true })} minLength='16' maxLength='16' onKeyDown={filterNumericInput} />
                        {errors.number && <span>Can't be blank</span>}
                    </div>
                    <div className='date-cvc'>
                        <div className='date'>
                            <label>EXP. DATE</label>
                            <div className='inputs-date'>
                                <select className='months' onClick={handleMonth} type='text' name='month' {...register('month', { required: true })}>
                                    <option value="">MM</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <select onClick={handleYear} placeholder='YY' type='text' name='year' {...register('year', { required: true })}>
                                    <option value="">YY</option>
                                    <option value="23">2023</option>
                                    <option value="24">2024</option>
                                    <option value="25">2025</option>
                                    <option value="26">2026</option>
                                    <option value="27">2027</option>
                                    <option value="28">2028</option>
                                </select>

                            </div>
                            {(errors.month || errors.year) && (<span>Can't be blank</span>)}
                        </div>
                        <div className='cvc'>
                            <label htmlFor="">CVC</label>
                            <input placeholder='000' onKeyUp={(e) => setCvc(e.target.value)} type="text" name='cvc' {...register('cvc', { required: true })} maxLength='3' minLength='3' onKeyDown={filterNumericInput} />
                            {errors.cvc && <span>Can't be blank</span>}
                        </div>
                    </div>
                    <div className='button'>
                        <button type='submit'>Confirm</button>
                    </div>
                </form>
            </div>



        </section>
    )
}

export default Inputs