let pikachu = {
  nome: "Pikachu",
  especie: "Pikachu",
  nivel: 1,
  falar: function () {
    return `${this.nome} ${this.nome}`;
  },
};

let charmander = new Object();
charmander.nome = "Charmander";
charmander.falar = (s) => {
  return s.nome;
};

//alert(`${pikachu.falar()}`);
//alert(`${charmander[`${falar()}`]}`);
alert(`${charmander.falar(charmander)}`);
console.log(`${charmander.falar(charmander)}`);

class Pokemon {
  constructor(nome, especie, nivel = 1) {
    this.nome = nome;
    this.especie = especie;
    this._nivel = nivel;
  }
  falar = () => `${this.nome}`;
}
