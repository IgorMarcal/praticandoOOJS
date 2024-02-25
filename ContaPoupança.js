import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {

    static numeroDeContas = 0;

    constructor (saldoInical, cliente, agencia, conta) {
        super(agencia, conta, cliente);
        this._saldo = saldoInical;
        ContaPoupanca.numeroDeContas += 1;
    }
}