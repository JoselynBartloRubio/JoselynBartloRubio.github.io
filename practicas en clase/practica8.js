Zepto(function ($) {
    const POKEAPI = "https://pokeapi.co/api/v2/pokemon/";

    let cookies = cookie.all();
        console.log(cookies);

        let ultimo = $("#ultimo");
        ultimo.text(cookie.get("name"));


    let cargar = $("#cargar");

    cargar.click(function () {
        let code = $("#code").val();
//ejercicio 9

function enviarFormulario(){
    let _form = $("#formpizza");
    console.log(_form.serialize());
    $.post(_form.attr("action"), _form.serialize(),function
    (response){
        console.log(response);
    });
}
        

        let _name = $("div#descripcion h2");
        let _img = $("div#descripcion img");
        _img.prop("src", "img/fondo.jpg");
       cargar.prop('disabled', 'true');
        cargar.text("cargando...");

        $.getJSON(POKEAPI + 25, function (data) {

            _name.text((data['name']).toUpperCase());
            cookie.set("name", data['name']);
            _img.prop("src", data['sprites']['front_default']);
            _immg.prop("alt", data['name']);
            cargar.removeAttr('disabled');
            cargar.text("cargar");


            _img.hover(function(){
                _img.prop("src", data['sprites']['back_default']);

            });
        
            $.get(index.html,function(data){
                let_index = $("")
            });
           
                        
       
    });
});
});