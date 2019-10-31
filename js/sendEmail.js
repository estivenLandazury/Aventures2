const spinner = document.getElementById("spinner");

document.getElementById('subscribe').addEventListener('click', restCall);
function restCall() {
    var email = document.getElementById("mc-email").value;
    var name = document.getElementById("name").value;
    var Company = document.getElementById("company").value;
    var location = document.getElementById("location").value;
    var Objective = document.getElementById("objective").value;




    let Data =
    {
        "toEmails": [
            "cts.prescriptiva@carvajal.com"],
        "subject": "Ventures - Contacto",
        "message": "Deseo que se contacte con nosotros, mi compañia se llama " + Company + " Mi nombre es " + name + " Mi Correo electrónico es  " + email + " Y estamos ubicados en " + location + " Objetivo: " + Objective
    }




    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Data)
    }

    if (email == "" || name == "" || Company == "" || location == "" || Objective == "") {

        console.log("No se puede enviar mensaje ")
        
        message()
    } else {
        spinner.removeAttribute('hidden');

        fetch('https://0gqxxhb0wb.execute-api.us-east-1.amazonaws.com/Prod/send/', options)
            .then(function (response) {
                /* $('#exampleModal').modal('show');*/
                console.log(response.status)
                message1()
                spinner.setAttribute('hidden', '');

            })
    }




}

function message() {
    window.alert("Ingrese los campos requeridos")
}

function message1() {
    window.alert("Menssaje Enviado Correctamente")

    var email = document.getElementById("mc-email").value="";
    var name = document.getElementById("name").value="";
    var Company = document.getElementById("company").value="";
    var location = document.getElementById("location").value="";
    var Objective = document.getElementById("objective").value="";
}


