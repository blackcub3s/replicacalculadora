
//LES GLOBALS ES LLEGEIXEN NOMÉS UN COP, EN CARREGAR LA PÀGINA
var string_nombre= '';
var string_nombre_operacio = '';
var esborra_pantalla = 0;
var arr_nombres = []; //guardo per ordre els nombres introduits
var arr_operadors = []; //guardo per ordre els operadors
var encesa = 0;


/*
const sinus_correspondencies = {30 : 0.5, 
                                60 :sqrt(3)/2,
                                90 : 1,
                                }
*/
//PRE: Una cadena de caràcters
//POST: True si la seva longitud es inferior a 10.
function tamanyCorrecte(cadena) {
    if (cadena.length < 12) {
        return true;
    }
}

//PRE: passo com a paràmetrel'id del botó que conté un número.
//POST: window.string_nombre ara contindrà l'string de l'ultim nre introduit (0,1,2,..,9).
function posa_nombre(id_clicat) {
    var boto = document.getElementById(id_clicat); //obtinc el botó.
    var string_nombre = boto.value;                //obtinc el número en variable entera!
    if (tamanyCorrecte(window.string_nombre)) {
        window.string_nombre += string_nombre;         //introdueixo un nombre fet string a l'objecte window, per encadelar-lo com a string a dins window.string_nre.
        document.getElementById('pantalleta').innerHTML = window.string_nombre;
    }
    console.log(window.string_nombre);
     
}
//PRE: parametre id
//POST: afegeix el punt a window.string_nombre SI I NOMES SI no hi és dins.
function posa_decimal(id_clicat) {
    var punt = document.getElementById(id_clicat).value; //es el punt, un string
    if (window.string_nombre.indexOf(punt) == "-1") {
        window.string_nombre += punt;
    } 
}

//FUNCIONAMENT: afegeix els operadors i els nombres a les seves respectives arrays ("arr_nombres" i "arr_operadors")
//              que després usarà la funció calcula. Imprimeix per pantalla les variacions
function posa_operador_basic(id_clicat) {
    if (window.string_nombre.length > 0) {
        var boto = document.getElementById(id_clicat);
        var string_operador = boto.value; //+,-,x,/
        window.arr_nombres.push(window.string_nombre);  //empleno l'array del nombre
        window.arr_operadors.push(string_operador);
        
        //////////////////////////////
        //
        // SECCIO ESBORRABLE, NO DEIXEN DE FUNCIONAR BÉ ELS OPERADORS SENZILLS. NOMÉS DEIXEN DE FUNCIONAR ELS OPERADORS COMPLEXOS
        //enretiro l'ultim element de window.arr_nombres, sota el suposit que hi hagi un nombre mes
        // que no pas operador (cas en que previament he demanat una operacio complexa rollo sinus, cosinus
        // codi spaggetti... aixo es una modificació que prové del malfuncionament de la funcio posa_operador_complex
        if (arr_nombres.length - arr_operadors.length == 1) {
            arr_nombres.pop();
        }
        //////////////////////////////////
        window.string_nombre = ''; //buido string nombre, per evitar introduir operadors quan no hi ha nombres a l'entrada ultima
    }
    console.log(window.arr_nombres);
    console.log(window.arr_operadors);
}

//Aquesta funció pren les arr_nombres i arr_operadors, arrays de strings nombre i operadors respectivament, i simplement
//les concatena i les evalua a operació numèrica. 
//NOTEU: sempre tindrem tants elements nombres com operadors més 1.
function calcula_operacio() {
    //CAS EN QUE: no hi ha nombre introduit o nomes hi ha un nombre
    if (window.arr_nombres.length === 0) {
        return;
    }
    // CAS EN QUE: hi ha multiples nombres introduits. Aleshores, vol dir que hi ha tants operadors dins arr_operadors 
    //com nombres dins a arr_nombres i nomes caldra afegir l'ultim nombre, si s'escau (que esta dins window.string_nombre).
    var calc = window.arr_nombres[0];
    var j = 0;
    for (var i = 1; i < window.arr_nombres.length; ++i) {
        calc = calc + window.arr_operadors[j]+ window.arr_nombres[i];
        j = j + 1;
    }

    //agafo ultim operador i string_nombre (perque no esta buit) ex: 123 x 123  
    if (window.string_nombre.length != 0) {  
        calc = eval(calc + window.arr_operadors[arr_operadors.length - 1] + window.string_nombre);
    }
    
    window.string_nombre = String(calc); //per si seguim fent operacions cal guardar el nombre calculat
    document.getElementById('pantalleta').innerHTML = calc;
    
    //buidem les arrays amb operadors i nombres, ja que ja les hem utilitzades i han d'estar buides per properes operacions.
    window.arr_operadors = [];
    window.arr_nombres = [];
}


function posa_operador_complex(id_clicat) {
    var boto = document.getElementById(id_clicat);
    var string_operador = boto.value; //sinus,cosinus,tangent...
    if (id_clicat == "sinus") {
        console.log("sinus clicat");
        var a = Math.sin(window.string_nombre*Math.PI/180);
    }
    else if (id_clicat == "cosinus") {
        console.log("cosinus clicat");
        var a = Math.cos(window.string_nombre*Math.PI/180);        
    }
    else if (id_clicat == "tangent") {
        console.log("tangent clicada");
        var a = Math.tan(window.string_nombre*Math.PI/180);        
    }
    else if (id_clicat == "logaritme") {
        console.log("logaritme decimal clicat");
        var a = Math.log10(window.string_nombre);        
    }     
    else if (id_clicat == "logaritme_neperia") {
        console.log("logaritme neperia clicat");
        var a = Math.log(window.string_nombre);        
    }     
    document.getElementById('pantalleta').innerHTML = a;
    window.arr_nombres.push(a);
   
    console.log(window.arr_nombres);
    console.log(window.arr_operadors);
}


function reinicialitza() {
    string_nombre = '';
    string_nombre_operacio = '';
    esborra_pantalla = 0;
    arr_nombres = []; //guardo per ordre els nombres introduits
    arr_operadors = []; //guardo per ordre els operadors
    encesa = 0;
}


//apagar reinicialitza la funció
function apaga() {
    document.getElementById('pantalleta').innerHTML = "&nbsp";
    console.log("Calculadora apagada i dades reinicialitzades");
    reinicialitza();
}
//encendre també es una manera de reinicialitzar
function encen() {
    reinicialitza();
    posa_nombre("zero");
    reinicialitza();
    console.log("Calculadora encesa i dades reinicialitzades (abans i despres d'apretar el boto)");
}

