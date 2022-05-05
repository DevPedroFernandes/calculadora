function insert(nun){
    var numero = document.getElementById('resultado').innerHTML ;
    document.getElementById('resultado').innerHTML = numero + nun;     
}
function clean(){
    document.getElementById('resultado').innerHTML =""
}
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}