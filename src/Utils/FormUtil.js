import React from "react";
/*
retorna un objeto con el contenido especificado por data
data: un objeto con referencia a componentes
 */
const urlApi = "http://localhost:4000/api";
function CreateReferencies(data) {
    for (var prop in data) {
        if (Object.prototype.hasOwnProperty.call(data, prop)) {
            data[prop] = React.createRef();
        }
    }
}
/*
Crea una referencia para cada propiedad de data
*/
function CaptureForm(data){
    var obj = {};
    for (var prop in data) {
        if (Object.prototype.hasOwnProperty.call(data, prop)) {
            //console.log(prop, data[prop].current);
            obj[prop] = data[prop].current.value;
        }
    }
    console.log(obj);
    return obj;
}
export {CreateReferencies, CaptureForm, urlApi};