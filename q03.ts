class Calculadora {
    protected operando1: number;
    protected operando2: number;

    constructor(operando1: number, operando2: number) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }

    soma(): number {
        return this.operando1 + this.operando2;
    }
}

class CalculadoraCientifica extends Calculadora {
    exponenciar(): number {
        return Math.pow(this.operando1, this.operando2);
    }
}

const calculadora = new Calculadora(5.0, 7.0);
console.log("A soma é: " + calculadora.soma());

const calculadoraCientifica = new CalculadoraCientifica(2.0, 3.0);
console.log("Resultado da exponenciação " + calculadoraCientifica.exponenciar());
