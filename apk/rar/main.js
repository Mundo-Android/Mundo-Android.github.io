var text = document.querySelector(".txt1");
var text2 = document.querySelector(".txt2");
var text3 = document.querySelector(".txt3");
var button = document.querySelector(".button-download");


var arrayText = "Versión apk: 6.10.build104".split("");
var arrayText2 = "Fecha de actualización: 9/2/2022".split("");
var arrayText3 = "Servidor: MediaFire" .split("");



var p = "";
var i = 0;

activar();
function escribir() {
  
  if (i < arrayText.length) {
    
    p = p+arrayText[i];
    text.innerHTML = p;
  
    i += 1;
    activar();
  }else {
    activar2();
  }
}

function activar() {
  setTimeout(escribir, 150);
}





var p2 = "";
var i2 = 0;
function escribir2() {
  
  if (i2 < arrayText2.length) {
    
    p2 = p2+arrayText2[i2];
    text2.innerHTML = p2;
  
    i2 += 1;
    activar2();
  }else {
    activar3();
  }
}
function activar2() {
  setTimeout(escribir2, 150);
}



var p3 = "";
var i3 = 0;
function escribir3() {
  
  if (i3 < arrayText3.length) {
    
    p3 = p3+arrayText3[i3];
    text3.innerHTML = p3;
  
    i3 += 1;
    activar3();
  }else {
    setInterval(cambiarColor, 500);
  }
}
function activar3() {
  setTimeout(escribir3, 150);
  document.querySelector(".href-button-download").setAttribute("href", "https://www.mediafire.com/view/5u9303psdupdam7/Screenshot_com.estrongs.android.pop.pro_1.jpg/file");
}

var b = false;
function cambiarColor() {
  if (b) {
    button.style.borderColor="#000000";
    button.style.color= "#000000";
    b = false;
  }else {
    button.style.borderColor="#1C597D";
    button.style.color= "#1C597D";
    b = true;
  }
}
