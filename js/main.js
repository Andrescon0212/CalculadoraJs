function agregar(value){
    document.getElementById("pantalla").value+=value;
}
function calcular(){
    try{
        const restul = eval(document.getElementById("pantalla").value);
        document.getElementById("pantalla").value = restul;
    } catch(error) {
        document.getElementById("pantalla").value = "error";
    }
}
function limpiar(){
    document.getElementById("pantalla").value='';   
}
