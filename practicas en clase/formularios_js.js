Zepto (function ($){

    let costo = 0;
    let masas = {
    cl: 50,
    cr: 75,
    li:45,
    };
    let sizes = {
        t_chica: 50,
        t_mediana: 70,
        t_grande: 90,
    };
    const ppi = 5;//precio por ingrediente
    const ppie = 7;//precio por ingrediente extra
    
    function enviarFormulario(){
        let _form = $("#formpizza");
        console.log(_form.serialize());
        $.post(_form.attr("action"), _form.serialize(),function
        (response){
            console.log(response);
        });}
    let masa = $("#masa");
    let size = $("input[name-tamano]").filter(checked);
    let ingredientes = $(".ingrediente").filter(checked);
    console.log(ingredientes);
    
    
    costo += sizes[size.attr("id")];
    costo += masas[masa.val()];
    costo += ingredientes.length * ppi;
    costo += iex.length * ppie;
    _costo.val = ("$" + costo);
    
    });


let sendBtn = $("sendBtn");
sendBtn.click(function(e){
    e.preventDefault();
    calcularCosto();
});

let checked = function () { return
this.checked;
}

let selected = function () {return
    this.selected;
}