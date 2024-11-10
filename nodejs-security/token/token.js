import jwt from 'jsonwebtoken';

const chaveSecreta = "chaveSuperSecreta";

const token = jwt.sign(
    {
        apelido: "jm",
        curso: "segurança e node.js"
    }, chaveSecreta
)

console.log(token);

const tokenDecodificado = jwt.verify(token, chaveSecreta);
console.log(tokenDecodificado);

// { apelido: 'jm', curso: 'segurança e node.js', iat: 1688417507 }
// iat = tempo