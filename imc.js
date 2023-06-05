function saltarlinea()  {

    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
} 

function imprimir(frase) {

    document.write(frase);
    saltarlinea();
}


function calcularImc(peso, altura,) {


    imc = peso / (altura * altura);
    return (imc);

}


nombre = prompt("informe su nombre");
pesoInformado = prompt(nombre + ", informe su peso");
alturaInformado = prompt(nombre + ", informe su altura");

imcCalculado = calcularImc(pesoInformado, alturaInformado);

imprimir(nombre + ", el imc calculado es : " + imcCalculado);



if (imcCalculado < 18.5) {

    imprimir("IMC abajo de lo indicado");
}


if (imcCalculado >= 18.5) {

    if (imcCalculado < 25) {

        imprimir("IMC esta dentro del intervalo normal ");

    }

}


if (imcCalculado >= 25) {

    if (imcCalculado < 30) {

        imprimir("IMC considerado como sobrepeso ");

    }

}

if (imcCalculado >= 30) {

    imprimir("IMC considerado como obesidad");
}
