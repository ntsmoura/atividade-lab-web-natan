var form=document.getElementById("form-imc");

function submitForm(event){

    event.preventDefault();
    let inputPeso = document.getElementById("input-peso");
    let inputAltura = document.getElementById("input-altura");
    let inputNome = document.getElementById("input-nome")
    let peso = parseFloat(inputPeso.value);
    let altura = parseFloat(inputAltura.value);
    let nome = inputNome.value

    let borderColor = "#fc7575"

    if (isNaN(altura)){
        inputAltura.style.borderColor = borderColor;
    }
    if (isNaN(peso)){
        inputPeso.style.borderColor = borderColor;
    }
    if (!nome){
        inputNome.style.borderColor = borderColor;
    }

    if (altura && peso && nome){
        imc = peso/Math.pow(altura, 2);
        localStorage.setItem("resultadoImc", imc.toFixed(2));
        localStorage.setItem("nome", nome)
        window.location.href = "resultado.html"
    }

}

form.addEventListener('submit', submitForm);