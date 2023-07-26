import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Inputs from './components/Inputs'
import Modal from './components/Modal'

function App() {

  const [numberCard, setNumberCard] = useState("0000 0000 0000 0000")
  const [nameCard, setNameCard] = useState("JANE APPLESSED")
  const [month, setMonth] = useState("0")
  const [year, setYear] = useState("0")
  const [cvc, setCvc] = useState("000")
  const [showInputs, setshowInputs] = useState(true)


  return (
    <main className='main'>
      <Cards
        numberCard={numberCard}
        nameCard={nameCard}
        month={month}
        year={year}
        cvc={cvc}
      />

      {
        showInputs ?
          <Inputs
            setShowInputs={setshowInputs}
            setNameCard={setNameCard}
            setNumberCard={setNumberCard}
            setMonth={setMonth}
            setYear={setYear}
            setCvc={setCvc}
          /> :
          <Modal
            setShowInputs={setshowInputs}
          />
      }


    </main>
  )
}

export default App
