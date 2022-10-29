document.querySelector('#crc').addEventListener('click', (e) => {
    e.preventDefault();

    if (document.querySelector('#nome').value.length == 0) {
        swal("Por favor digite seu nome");

    } else if (document.querySelector('#tel').value.length == 0) {
        swal("Por favor digite seu telefone");

    } else if (document.querySelector('#mail').value.length == 0) {
        swal("Por favor digite seu e-mail");

    } else if (document.querySelector('#mensagem').value.length == 0) {
        swal("Por favor digite sua mensagem");


    } else {
        swal("Obrigado, entraremos em contato em breve!");



        window.location.href = "obrigado.html";

    }



});





























//var btnenv = document.getElementById('crc');
//btnenv.addEventListener('click', () =>{

// swal("obrigado pelo contato, em breve entraremos em contato");
//}