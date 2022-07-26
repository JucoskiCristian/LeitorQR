const Fabricantes = ["Esquipesca" , "Bkt"]
const Cores = ["Areia", "Cristal", "Marrom", "Preta"]
const Malhas = ["5 x 5" , "3 x 3"]
const Ganchos = ["Zincado", "Inox"]


const urlParams = new URLSearchParams(window.location.search);

const idParam = urlParams.get("id");

var obj = Object.assign([], idParam)


var data = idParam.substring(4, 12);
var newData = data.slice(0,2)+ "/" + data.slice(2,4) + "/" + data.slice(4,8)

const date = new Date();

const ano = date.getFullYear();
const dia = date.getDate();
const mes = date.getMonth() + 1; 

if((ano - data.slice(4,8) < 5)){
    document.getElementById("valida").innerHTML = "Esta na Validade";
}else if(mes - data.slice(2,4) < 0 ){
    document.getElementById("valida").innerHTML = "Esta na Validade";
}else {
    document.getElementById("invalida").innerHTML = "Esta na Fora da Validade";
}

document.getElementById("fabricante").innerHTML = Fabricantes[obj[0]];
document.getElementById("cor").innerHTML = Cores[obj[1]];
document.getElementById("malha").innerHTML = Malhas[obj[2]];
document.getElementById("gancho").innerHTML = Ganchos[obj[3]];
document.getElementById("data").innerHTML = newData;
