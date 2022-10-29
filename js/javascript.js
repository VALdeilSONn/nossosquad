function Login() {
  var done = 0;
  var usuario = document.getElementsByName('usuario')[0].value;
  usuario = usuario.toLowerCase();
  var senha = document.getElementsByName('senha')[0].value;
  senha = senha.toLowerCase();
  if (usuario == "admin" && senha == "admin") {

    
    //Swal.fire({  
      //icon: 'success',
      //title: 'Logado com sucesso!',
      //showConfirmButton: false,
      //timer: 100
   // });

    window.location = "index.html";
    done = 1;
    swal("Logado com sucesso!", "", "success");

  }
  if (done == 0) {
    swal("Usuário/senha incorreto!", "", "error");
  }
}



let rec = document.getElementById('px');
rec.addEventListener('click',(event) =>{
  event.preventDefault();
  let msg = "um link de recuperação de senha foi enviado ao seu email";
  let mec = "insira um e-mail válido";
  let ml = document.getElementById('xp').value;
  if(ml == "admin@gmail.com" ){
    alert(msg);
  }else{
    alert(mec);
    
  }
})


let pg = document.getElementById('pk');
if(pg.clicked){
    document.getElementById('lkj').style.display = "block";
}
  
pg.addEventListener('click', () =>{
  document.getElementById('lkj').style.display = "block";

})

let telk = document.getElementById('kl');
telk.addEventListener('click', (event) => {
event.preventDefault();
let jj = "um sms foi enviado com as devidas instruções";
let kk = "insira no formato solicitado";
let vtel = document.getElementById('telxd').value;
if(vtel == 2199997777){
  alert(jj);
}else{
  alert(kk);
}


}) 




