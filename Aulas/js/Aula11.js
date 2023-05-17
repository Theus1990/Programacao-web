function exemplo(a, b) {
  return a * b;
}

console.log(exemplo.length);
console.log(exemplo.constructor);

const square = function (number) {
  return number * number;
};
let x = square(5);
//alert(x);

/*let y = soma(1, 123, 500, 115, 44, 88);

function soma(...args) {
  let soma = 0;
  for (let arg of args) soma += args;
  return soma;
}

alert(y);*/

function soma(x, y = 10) {
  return x + y;
}
//alert(soma(5));

(function () {
  let z = "Oi, tudo bem?";
});

const a = ["Hydrogen", "Helium", "lithium", "Beryllium"];

const a2 = a.map((s) => s.length);
//alert(a2);

const a3 = a.map(function (s) {
  return s.length;
});

function asa(a, b) {
  return a + b;
}
(a, b) => {
  return a + b;
};

let soma2 = (a, b) => a + b;

alert(soma2(2, 3));
