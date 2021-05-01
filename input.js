$('#texto').mask('0000000-00.0000.0.00.0000')

$('#button').click( function() {
    var str0 = $('#texto').val();
    ClearAlert();
    //Verifica o tamanho da string para ver se é um numero da AOB ou um numero de processo
if(OnlyNumbers(str0).length == 4){

    //Avisa que é um numero da AOB apenas para referencia
    ShowAlert('É um numero da AOB');
    ShowAlert(`Numero pleno: ${OnlyNumbers(str0)}`)
    //Se estiver entre 8000 e 8999 é um numero da AOB de AC
    //Se estiver entre 9000 e 9999 é um numero da AOB de AM
    if(parseInt(str0) >= 8000 && parseInt(str0) <=8999){
        ShowAlert('AC');
    }else if(parseInt(str0) >= 9000 && parseInt(str0) <=9999){
        ShowAlert('AM');
    }else{
        ShowAlert('Origem não identificada')
    }

    //Verifica se é um numero de processo
}else if(OnlyNumbers(str0).length==20 ){
    //Notifica que é um numero de processo
    ShowAlert('É um numero de processo!')
    ShowAlert(`Numero pleno: ${OnlyNumbers(str0)}`)
//Caso seja verifica se é um numero de processo amazonense
if(str0.indexOf('8.04') != -1){
    ShowAlert('é um processo amazonense')
}else{
    //Caso não seja notifica
    ShowAlert('Não é um processo amazonense')
}
}else{
    //Caso não seja um numero da aob ou numero de processo notifica o usuario
    
    ShowAlert('Não encontramos nada relácionado ao numero digitado, verifique os numeros e tente novamente')
}
})


//Função usando regex para retornar apenas os numeros
function OnlyNumbers(s){
    return s.replace(/([^\d])+/gim, '')
}

function ShowAlert(s){
    var alerta = document.getElementById('alerta')
    var p = document.createElement('p');
    p.innerHTML = s;
    alerta.appendChild(p);
}

function ClearAlert(){
    var alerta = document.getElementById('alerta').innerText=''
}