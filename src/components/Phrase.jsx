

const Phrase = ({ quoteRandom }) => { //aquí se reciben las props, y como se envian en un objeto,se tienen que desestructurar
    
    return (
        <p className="app__phrase">{quoteRandom.phrase}</p>
        
    )
}

export default Phrase 