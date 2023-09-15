let x = numero =>{
    if(numero <=1)return 1;
    return x (numero-1)+ x(numero -2);
}
let numero = 10;
for (let i = 0; i <=numero; i++) {
    console.log(x(i));

}



