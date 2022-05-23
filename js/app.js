
var emailReg = /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/     
var nomeSobrenomeReg = /.*([A-Z][\w-]*(\s+[A-Z][\w]*)+).*/
var cpf = /([0-9]*)[]\.|_|-]*([0-9]*)[]\.|_|-]*([0-9]*)[]\.|_|-]*([0-9]*)[]\.|_|-]*([0-9]*)[]\.|_|-]*/g

// VALIDACAO DE EMAIL
function validacao_email_login() {

    var ipt_email = ipt_email_login.value;
    if (ipt_email.match(emailReg)) {
        ipt_email_login.style.border = '3px solid green';
    } else {
        ipt_email_login.style.border = '3px solid red';
    }
}

// VALIDACAO DE CPF
function validacao_cpf_login() {

    var ipt_cpf = ipt_cpf_login.value;
    if(ipt_cpf.match(cpf)){
        ipt_cpf_login.style.border = '3px solid green'
    } else {
        ipt_cpf_login.style.border = '3px solid red'
    }
}

function validarCPF(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
 
 }


// VALIDACAO DE NOME
function validacao_nome_login(){
    var ipt_nome = ipt_nome_login.value;

    if(ipt_nome.match(nomeSobrenomeReg)) {
        ipt_nome_login.style.border = '3px solid green'
    } else {
        ipt_nome_login.style.border = '3px solid red'
    }
}



// document.querySelector("#id_do_input").addEventListener('input', (e) => {
//     console.log(e.target.value)
//     })


// var regex = /^[A-Z-']+$/;

// function validacao_nome_login(){
//     nomeCadastro.forEach(nome => {
//         let valido = nome.split(/ +/).every(parte => regex.test(parte));
//         console.log(`${nome} = ${valido ? 'válido': 'inválido'}`);
//     });

// }






