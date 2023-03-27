let js_nome;
let js_sobrenome;
let js_nomecompleto;

function concatena() {
    js_nome = document.FormConcatena.f_nome.value;
    js_sobrenome = document.FormConcatena.f_sobrenome.value;

    js_nomecompleto = js_nome + ' ' + js_sobrenome;


    window.alert ('Olá ' + js_nomecompleto);
}
