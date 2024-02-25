import {Cliente} from "./Cliente.js";

export class Conta
{
    static numeroDeContas = 0;

    constructor(agencia, conta, cliente) {
        this._cliente = cliente;
        this._saldo = 0;
        this.agencia = agencia;
        this.conta = conta;
        Conta.numeroDeContas += 1;
    }

    set cliente (novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente () {
        return this._cliente;
    }

    get saldo () {
        return this._saldo;
    }

    sacar(valor)
    {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    deposito(valor)
    {
        if(valor > 0) {
            this._saldo += valor; 
            return valor;
        }        
    }

    transferir(valor, conta) 
    {
        if(this._saldo > valor) {
            const valorSacado = this.sacar(valor);
            conta.deposito(valorSacado);
        }
    }
}

