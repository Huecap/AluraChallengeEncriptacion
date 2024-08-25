


// Obtener texto encriptado 


// Encriptar texto
/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function encriptar(texto){
    // Recorremos la cadena de caracteres, caracter por caracter
    let cadenaAnterior = ""
    let cadenaPosterior = ""
    for (let x=texto.length-1; x >= 0; x--){
        //console.log(texto[x])
        switch(texto[x]){
            case 'e': 
            //console.log('enter');
            cadenaAnterior = texto.slice(0,x)
            cadenaPosterior = texto.slice(x+1)
            texto = cadenaAnterior + 'enter' + cadenaPosterior
            break;
            case 'i': 
            //console.log('imes');
                cadenaAnterior = texto.slice(0,x)
                cadenaPosterior = texto.slice(x+1)
                texto = cadenaAnterior + 'imes' + cadenaPosterior
                break;
                case 'a': 
                //console.log('ai');
                cadenaAnterior = texto.slice(0,x)
                cadenaPosterior = texto.slice(x+1)
                texto = cadenaAnterior + 'ai' + cadenaPosterior
                //console.log(texto)
                break;
                case 'o': 
                //console.log('ober');
                cadenaAnterior = texto.slice(0,x)
                cadenaPosterior = texto.slice(x+1)
                texto = cadenaAnterior + 'ober' + cadenaPosterior
                //console.log(texto)
                break;
                case 'u': 
                //console.log('ufat');
                cadenaAnterior = texto.slice(0,x)
                cadenaPosterior = texto.slice(x+1)
                texto = cadenaAnterior + 'ufat' + cadenaPosterior
                break;
                
            }
        }
        return texto
}

function desencriptar(texto) {
    // Realizamos las sustituciones en el orden inverso a como fueron encriptadas
    // Primero reemplazamos los fragmentos más largos para evitar conflictos

    texto = texto.replace(/ufat/g, 'u');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/enter/g, 'e');

    return texto;
}


console.log(encriptar(texto))
// Des encriptar texto

// Mostrar texto 

function validarMinusculas(input) {
    // Elimina cualquier carácter que no sea una letra minúscula
    input.value = input.value.replace(/[^a-z]/g, ' ');
}

let textoDesEncriptado = document.getElementById("maincontent_output_div_text")
textoDesEncriptado.innerHTML = encriptar(texto)

function encriptarTextoIngresado(){
    let texto = document.getElementById("maintext").value;
    document.getElementById("maincontent_output_div_text").innerHTML = encriptar(texto)
}

function desencriptarTextoIgresado(){
    let texto = document.getElementById("maintext").value;
    document.getElementById("maincontent_output_div_text").innerHTML = desencriptar(texto)
}

function copiarTexto() {
    // Obtén el elemento textarea
    const texto = document.getElementById('maincontent_output_div_text').value;
    
    // Usa el API del portapapeles
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado al portapapeles!');
    }).catch(err => {
        alert('Error al copiar: ' + err);
    });
}