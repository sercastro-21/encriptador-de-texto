const textArea = document.getElementById ("textArea");
const botonEncriptar = document.getElementById ("botonEncriptar");
const botonDesencriptar = document.getElementById ("botonDesencriptar");
const botonCopiar = document.getElementById ("botonCopiar");
const mensajeFinal = document.getElementById ("mensajeFinal");
const muneco = document.getElementById ("muneco");
const frase2 = document.getElementById ("frase2");
const right = document.getElementById ("right");

//e - enter
//o - ober
//i - imes
//a - ai
//u - ufat

let reemplazar = [
["e","enter"],
["o","ober"],
["i","imes"],
["a","ai"],
["u","ufat"],

]

const remplace = (nuevoValor) =>{
    mensajeFinal.innerHTML = nuevoValor;

    muneco.style.display = "none";
    textArea.value= "";
    frase2.style.display = "none";
    botonCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");

}

botonEncriptar.addEventListener("click", () =>{
    const texto = textArea.value.toLowerCase();
    function encriptar(newText){
        for(let i = 0; i < reemplazar.length; i++){
            if(newText.includes(reemplazar[i][0])){
                newText=newText.replaceAll(reemplazar[i][0], reemplazar[i][1])
            };
        };
        return newText
    }

    //const textoEncriptado=encriptar(texto);

    remplace(encriptar(texto));



})

botonDesencriptar.addEventListener("click", () =>{
    const texto = textArea.value.toLowerCase();
    function desencriptar (newText){
        for(let i = 0; i<reemplazar.length; i++){
            if(newText.includes(reemplazar[i][1])){
                newText=newText.replaceAll(reemplazar[i][1], reemplazar[i][0])  
        };
    };
    return newText
    }

    remplace(desencriptar(texto));
})

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    texto.select();
    document.execCommand("copy")


})


