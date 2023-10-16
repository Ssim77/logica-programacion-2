
do{
    var tempCelci=parseFloat(prompt("Ingrese la temperatura en grados Celcius."))
    
    }while(isNaN(tempCelci));
    
    tempF = (tempCelci * 9/5) +32
    tempK = tempCelci + 273.15
    
    console.log("La temperatura en grados Farenheit es de: "+tempF)
    console.log("La temperatura en grados Kelvin es de: "+tempK)