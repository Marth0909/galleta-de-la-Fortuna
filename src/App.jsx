
import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json' //ruta relativa para acceder al phrases.json
import getRandomFromArr from './utils/getRandomFromArr'
import Phrase from './components/Phrase'
import Button from './components/Button'
import arrBackgrounds from './utils/backgrounds.json'

//const arrBackgrounds = [1, 2, 3, 4] este arreglo es para que se muestre  un fondo diferente cada que cambie una frase,se elimina porue se pondra en otro archivo y se importará

function App() {
  const initialPhrase = getRandomFromArr(phrases)
  const initialBackground = getRandomFromArr(arrBackgrounds)

  const [quoteRandom, setQuoteRandom] = useState(initialPhrase) //Estado para guardar frase random
  const [backgroundRandom, setBackgroundRandom] = useState(initialBackground) //Estado para guardar fondo

  const objStyle = {
    backgroundImage:   `url(/fondo${backgroundRandom}.png)` 
  }

 console.log(quoteRandom);

  return (
   <div className='app' style={objStyle}>
    <h1 className='app__title'>Galleta de la fortuna</h1>
    <div className='app__card'>
    <Phrase quoteRandom={quoteRandom}/>  
    <Button 
    setQuoteRandom={setQuoteRandom} //Prop para la frase
    setBackgroundRandom={setBackgroundRandom} //Prop para el fondo
    />
    </div>
   </div>
  )
}

export default App
