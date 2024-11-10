import { createHash } from 'crypto';

function criaHash(password){
    return createHash('sha256').update(password).digest('hex');
}

console.log(criaHash("Uma String Qualquer"));

class Usuario {
    constructor (nome, senha){
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autentica(nome, senha){
        if(nome === this.nome && this.hash === criaHash(senha)){
            return "Usuário autenticado com sucesso";
        }
        return "Usuário ou senha incorreto.";
    }
}

const usuario = new Usuario('Rodney','password');

console.log(usuario);

//Caso de sucesso
console.log(usuario.autentica('Rodney','password'));

//Caso falhou
console.log(usuario.autentica('Rodney','p4ssword'));