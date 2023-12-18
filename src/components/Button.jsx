import getRandomFromArr from "../utils/getRandomFromArr"
import phrases from "../utils/phrases.json"
import arrBackgrounds from '../utils/backgrounds.json'


const Button = ({ setQuoteRandom, setBackgroundRandom }) => { //Función que va cambiar la frase al darle click al botón,para esto se cambiará el valor del estado en el compontente Button del App.jsx, se usaremos onClick y le pasaremos la función como valor
    
    const handleChangePhrase = () => {
        setQuoteRandom(getRandomFromArr(phrases)) //va retornar un elemento diferentete del arreglo de objetos phrases del archivo phrases.json
        setBackgroundRandom(getRandomFromArr(arrBackgrounds))
    }

    return ( 
        <button className="app__btn" onClick={handleChangePhrase}>Ver otra frase</button>
    )
}

export default Button