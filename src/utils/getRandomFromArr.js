const getRandomFromArr = (arr) => { //Función que recibe el arreglo y retornar un elemento random
    const indexRandom = Math.floor(Math.random() * arr.length)
    return  arr[indexRandom]

}
export default getRandomFromArr