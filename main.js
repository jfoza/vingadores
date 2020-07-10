class Pessoa {
    constructor(nome, altura, peso) {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }
}

class Vingador extends Pessoa {
    constructor(nome,altura, peso, poderes, temArmadura, isMembroFundador) {
        super(nome, altura, peso);
        this.poderes = poderes;
        this.temArmadura = temArmadura;
        this.isMembroFundador = isMembroFundador; 
        alert(this.nome);
    }

    lutar() {
        alert(`${this.nome} que tem altura de ${this.altura}m, peso de ${this.peso} está lutando utilizando ${this.poderes[1]}`)
    }
}


const thor = new Vingador(
    "Thor", 
    1.85, 
    "100kg",
    ["Super Força", "Raio"],
    true, 
    true
);

const capitao_america = new Vingador(
    "Capitão América",
    1.80,
    "95kg",
    ["Super Força"],
    true,
    true
);


document.getElementById("lutar").onclick = function () {
    thor.lutar();
}

class operacoesMatematicas {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        }

        static soma(a, b) {
            return this.a + this.b;
        }
}

const sum = operacoesMatematicas.soma(4, 7);
alert(sum);