var palavra = "Pedro Tomaz"

var splitada = palavra.split('')

document.title= " "

x=0

looping = setInterval(function () {
    if(splitada[x] == ' '){
        document.title += "\u205f​​​"
        x++;
    }else{
        document.title += splitada[x++]
    }

    if(x > splitada.length){
        document.title= " "
        x=0
    }
}, 750);