import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta
{
    static numeroDeContas = 0;

    constructor(agencia, conta, cliente) {
        super(agencia, conta, cliente);
        ContaCorrente.numeroDeContas += 1;
    }


}

