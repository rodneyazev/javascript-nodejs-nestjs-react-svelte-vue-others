import { scryptSync, randomBytes, timingSafeEqual } from "crypto";

function criaHashComSal(senha){
    const sal = randomBytes(16).toString('hex');
    const senhaHasheada = scryptSync(senha, sal, 64).toString('hex');
    return `${sal}:${senhaHasheada}`;
}


class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        [this.sal, this.hash] = criaHashComSal(senha).split(':');
    }
    autentica(nome, senha) { 
        if(nome === this.nome){
            const testeHash = scryptSync(senha, this.sal, 64);
            const hashReal = Buffer.from(this.hash, 'hex');
            const hashesCorrespondem = timingSafeEqual(testeHash, hashReal);
            if(hashesCorrespondem){
                return "Usuário autenticado com sucesso.";
            }
        }
        return "Usuário ou senha incorreta.";
    }
}

const jm = new Usuario('Rodney','password');
console.log(jm);

// Teste de Sucesso
console.log(jm.autentica('Rodney','password'));

// Teste falhou
console.log(jm.autentica('Rodney','password1'));