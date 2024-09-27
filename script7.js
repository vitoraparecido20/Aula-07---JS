let a,b,c,d;
let saida = document.getElementById("saida");
a=50;
b=120;
c=200;
d=(a<=b) && (a<=c);//()&&()= false se operador ! na váriável a será falso, mas se tiver && é true
saida.innerHTML=`AND d = ${d}`;
