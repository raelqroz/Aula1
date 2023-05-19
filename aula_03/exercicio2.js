divC.style.display = 'none'

const hideInputs = () => {
    let selected = selecTemp.value
    console.log(selected);

    if(selected === 'c') {
        divC.style.display = 'none'
        divF.style.display = 'block'
    } else if (selected === 'f') {
        divF.style.display = 'none'
        divC.style.display = 'block'
    }
}

const toC = (e) => {
    event.preventDefault()
    console.log('para celsius');
    let tempFahrenheit = fahrenheit.value
    let resultado = (tempFahrenheit * 9/5) +32
    
    resultado.innerHTML = resultado
}



const toF = (e) => {
    event.preventDefault()
    console.log('para fahrenheit');
    let tempCelsius = celsius.value
    let tempF = (tempCelsius * 9/5) +32
   
    resultado.innerHTML = tempF
}
