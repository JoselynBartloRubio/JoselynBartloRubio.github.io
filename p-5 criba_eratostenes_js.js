var numero = prompt('Indica un numero mayor o igual a 20');

alert('Tu decidiste: ' + numero);

//genero mis variables
let mult2 = document.getElementById("mul2");
let mult3 = document.getElementById("mul3");
let mult4 = document.getElementById("mul4");
let mult5 = document.getElementById("mul5");
let mult6 = document.getElementById("mul6");
let mult7 = document.getElementById("mul7");
let mult8 = document.getElementById("mul8");
let mult9 = document.getElementById("mul9");
let primos = document.getElementById("primos");
let limpiars = document.getElementById("limpiar");
//funcion para crea botones
function botones(){
    for (i = 1; i <= numero; i++) {
        let boton = document.createElement("input");
        boton.id = "boton_" + i;
        boton.type = "button";
        boton.value = "" + i;
        //propiedades para mi boton
        document.getElementById("cboton").appendChild(boton);
        document.getElementById("boton_" + i).style.height = "45px";
        document.getElementById("boton_" + i).style.width = "45px";
        document.getElementById("boton_" + i).style.background = "#4DB6AC";
        document.getElementById("boton_" + i).style.border = "0px";
        document.getElementById("boton_" + i).style.marginLeft = "2px";
        document.getElementById("boton_" + i).style.marginBottom = "2px";
    }
}
let ocupados = [];
let primos_O = [];
//mando llamar mi funcion
botones();
//programar botones



mult2.onclick = function(){
    for(i = 1; i <= numero; i++){
      if (i % 2 ==0 && ocupados.includes(i)== false) {
        document.getElementById("boton_" + i).style.background = "#00FF7F";   
        ocupados.push(i);
      } 
    }
}

mult3.onclick = function(){
    for(i = 1; i <= numero; i++){
      if (i % 3 ==0 && ocupados.includes(i)== false) {
        document.getElementById("boton_" + i).style.background = "#8B814C";
        ocupados.push(i);   
      } 
    }
}
mult4.onclick = function(){
    for(i = 1; i <= numero; i++ ){
      if (i % 4 ==0 && ocupados.includes(i)== false) {
        document.getElementById("boton_" + i).style.background = "#FFFF00";   
        ocupados.push(i);
      } 
    }
}
mult5.onclick = function(){
    for(i = 1; i <= numero; i++){
      if (i % 5 ==0 && ocupados.includes(i)== false) {
        document.getElementById("boton_" + i).style.background = "#CD5555";  
        ocupados.push(i); 
      } 
    }
}
mult6.onclick = function(){
    for(i = 1; i <= numero; i++){
      if (i % 6 ==0 && ocupados.includes(i)== false) {
        document.getElementById("boton_" + i).style.background = "#8B4513";
        ocupados.push(i);   
      } 
    }
}
mult7.onclick = function(){
    for(i = 1; i <= numero; i++){
      if (i % 7 ==0 && ocupados.includes(i)== false) {
        document.getElementById("boton_" + i).style.background = "#8B1A1A";  
        ocupados.push(i); 
      } 
    }
}
mult8.onclick = function(){
    for(i = 1; i <= numero; i++){
      if (i % 8 ==0 && ocupados.includes(i)== false) {
        document.getElementById("boton_" + i).style.background = "#FF1493";   
        ocupados.push(i);
      } 
    }
}
mult9.onclick = function(){
    for(i = 1; i <= numero; i++){
      if (i % 9 ==0  && ocupados.includes(i)== false) {
        document.getElementById("boton_" + i).style.background = "#8B636C";  
        ocupados.push(i); 
      } 
    }
}
let j = 0;
let numac = 0; 

primos.onclick = function(){
    for(i = 2; i <= numero; i++){
        numac = i;
        for( k = 1; k <= numac; k++ ){
            if (i % k == 0){
                j++;
            }
        }
        if(j == 2  && primos_O.includes(i)==false){
            j=0;
            document.getElementById("boton_" + i).style.background = "#000";
            primos_O.push(i);
            ocupados.push(i);  
        }else if(j>2){
            j = 0;
        }
    }

}

limpiars.onclick = function(){
    for(i = 1; i <= numero; i++){
        document.getElementById("boton_" + i).style.background = "#4DB6AC";
        ocupados.splice(0,numero);
        primos_O.splice(0,numero);
        
    }
    document.getElementById("boton_1").style.background = "fff";
}
