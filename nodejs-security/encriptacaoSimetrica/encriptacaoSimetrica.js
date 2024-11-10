import { createCipheriv, randomBytes, createDecipheriv } from "crypto";

const mensagem = 'Demonstração de curso';
const chave = randomBytes(32);
const iv = randomBytes(16);

const cifra = createCipheriv('aes256', chave, iv);

const mensagemCifrada = cifra.update(mensagem, 'utf-8', 'hex') + cifra.final('hex');

console.log(mensagemCifrada);

// Transmissão ------------- chave + iv (vetor de inicializacao) + mensagem

// Decifrar mensagem

const decifra = createDecipheriv('aes256', chave, iv);
const mensagemDecifrada = decifra.update(mensagemCifrada, 'hex', 'utf-8') + decifra.final('utf-8');


console.log(`Mensagem decifrada: ${mensagemDecifrada.toString('utf-8')}`);