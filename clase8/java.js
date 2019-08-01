
// var limite = 10;

// for (var i=0; i<limite; i++){
//     console.log(i);
// }


var frutas = ["Pera","Manzana","Fresa","Naranja"];
var lista = '';

for(var i=0; i<frutas.length; i++){
    lista+='<li>'+frutas[i]+'</li>'
}

document.getElementById('frutas').innerHTML = lista;
