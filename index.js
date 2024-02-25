import {Cliente} from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupança.js";

const nome1 = "Igor";
const CPF1 = 12345678910;
const agencia1 = 1212;
const contaBanco1 = 12345;
const saldoInicialPoupanca = 1000;

const cliente1 = new Cliente(nome1, CPF1);
const contaCorrente1 = new ContaCorrente(agencia1, contaBanco1, cliente1);
const ContaPoupanca1 = new ContaPoupanca(saldoInicialPoupanca, agencia1, contaBanco1, cliente1);

ContaPoupanca1.deposito(500);

console.log(contaCorrente1);
console.log(ContaPoupanca1);
console.log("Total de contas",Conta.numeroDeContas);
console.log("Total de Poupança",ContaPoupanca.numeroDeContas);
console.log("Total de Correntes",ContaCorrente.numeroDeContas);

