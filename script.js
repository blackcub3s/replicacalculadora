//variable global:
var string_nombre= '';
var string_nombre_operacio = '';
var esborra_pantalla = 0;
var arr_nombres = []; //guardo per ordre els nombres introduits
var arr_operadors = []; //guardo per ordre els operadors
var encesa = 0;
//introdueix un nombre a l'objecte window, per
//encadelar-lo com a string a dins window.string_nre.
//passo l'id del nombre per obtenri el boto per getElementById

//post: window.string_nombre conte l'string de l'ultim +nre introduit.
function posa_nombre(id_clicat) {
    var boto = document.getElementById(id_clicat);
    var string_nombre = boto.value;
    window.string_nombre += string_nombre;
    document.getElementById('pantalleta').innerHTML = window.string_nombre; 
}

//afegeixo els operadors i els nombres a les seves respectives
//arrays Que deespres usara la funcio calcula.
function posa_operador(id_clicat) {
    if (window.string_nombre.length > 0) {
        var boto = document.getElementById(id_clicat);
        var string_operador = boto.value; //+,-,x,/
        window.arr_nombres.push(window.string_nombre);  //empleno l'array del nombre
        window.arr_operadors.push(string_operador);
        window.string_nombre = ''; //buido string nombre, per evitar introduir operadors quan no hi ha nombres a l'entrada ultima
    }
    console.log(window.arr_nombres);
    console.log(window.arr_operadors)
}

//pren les arr_nombres i arr_operadors i simplement
//les calcula. Noteu que sempre tindrem tants elements
//nombres com operadors més 1. Si fossin
//funcion calcula_operacio()
function calcula_operacio(){
    //no hi ha nombre introduit o nomes hi ha un nombre
    if (window.arr_nombres.length === 0) {
        return;
    }
    //hi ha multiples nombres introduits. Aleshores, vol dir que hi ha
    //tants operadors dins arr_operadors com nombres dins a arr_nombres
    //i nomes caldra afegir l'ultim nombre, si s'escau (que esta dins window.string_nombre)
    
    var calc = window.arr_nombres[0];
    var j = 0;
    for (var i = 1; i < window.arr_nombres.length; ++i) {
        calc = calc + window.arr_operadors[j]+ window.arr_nombres[i];
        j = j + 1;
    }
    
    if (window.string_nombre.length != 0) { //agafo ultim operador i string_nombre (perque no esta buit) ex: 123 x 123   
        calc = eval(calc + window.arr_operadors[arr_operadors.length - 1] + window.string_nombre);
    }
    window.string_nombre = String(calc); //per si seguim fent operacions
    document.getElementById('pantalleta').innerHTML = calc;
    
    window.arr_operadors = [];
    window.arr_nombres = [];
}
       

