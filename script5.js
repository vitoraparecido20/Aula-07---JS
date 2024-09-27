let a,b,c;
let saida = document.getElementById("saida");
a=10; // a < que b acaba sendo falso pelo sinal de <, aí ele passa a ser string
b=10;
c=11;
saida.innerHTML="Menor = "+(a<b)+"<br>";//false
saida.innerHTML+="Menor ou igual = "+(a<=b)+"<br>";//True
saida.innerHTML+="Maior = "+(c>b)+"<br>";//True
saida.innerHTML+="Maior ou igual = "+(c>=b)+"<br>";//True