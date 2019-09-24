
document.getElementById('subscribe').addEventListener('click', restCall);
function restCall() {
    var email = document.getElementById("mc-email").value;

    let Data =
    {
        "toEmails": [
            "cts.prescriptiva@carvajal.com"],
        "subject": "Ventures - Contacto",
        "message": "Deseo que se contacte con nosotros por favor,  mi email es el siguiente " + email
    }




    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Data)
    }

    if (email == "") {
        location.reload();
    } else {
        fetch('https://0gqxxhb0wb.execute-api.us-east-1.amazonaws.com/Prod/send/', options)
            .then(function (response) {
                $('#exampleModal').modal('show');
            })
    }




}


