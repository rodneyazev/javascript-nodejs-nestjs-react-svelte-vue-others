import { createHash } from 'crypto';

class Usuario {
    constructor (nome, senha){
        this.nome = nome;
        this.hash = this.criaHash(senha);
    }

    criaHash(password){
        return createHash('sha256').update(password).digest('hex');
    }

    autentica(nome, senha){
        if(nome === this.nome && this.hash === this.criaHash(senha)){
            console.log("Usuário autenticado com sucesso!");
            return true;
        }
        return false;
    }
}

const usuario = new Usuario('Rodney','1337');

for(let senhaTeste=0; senhaTeste<2000; senhaTeste++){
    if (usuario.autentica("Rodney", senhaTeste.toString()))
    {
        console.log(`A senha do usuário é ${senhaTeste}`);
    }
}