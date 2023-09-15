/*8. Para verificar si un triángulo es equilátero, se deben comprobar que los tres lados del triángulo tienen la misma
longitud.
a. Pedir al usuario los lados y determinar si es equilátero o no*/

let lado1 = parseInt(prompt( " ingrese  la longitud lado 1"));
let lado2 = parseInt(prompt( " ingrese  la longitud lado 2 "));
let lado3 = parseInt(prompt( " ingrese  la longitud lado 3 "));
  
if (lado1 == lado2 && lado2 == lado3) {
    alert (` su triangulo es equilatero ya que los sus lados son : ${lado1} x ${lado2} x ${lado3} ` );

}else {
    alert( " su triangulo no es equilatero")
}