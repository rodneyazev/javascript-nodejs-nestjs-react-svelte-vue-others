import { generateKeyPairSync, createSign, createVerify } from 'crypto';


const { privateKey, publicKey } = generateKeyPairSync
    ('rsa',  {
        modulusLength: 2048,

        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        },
    })

//const dados = "Essa string vai ser assinada";

let dados = "Essa string vai ser assinada";



// Assinatura - Assinador

const assinador = createSign('rsa-sha256');
assinador.update(dados);

const assinatura = assinador.sign(privateKey, 'hex');
console.log(`Assinatura: ${assinatura}`);

// Envio desse documento ---------- Documento  + assinatura + chave pública

const verificador = createVerify('rsa-sha256');
verificador.update(dados);

const ehVerificado = verificador.verify(publicKey, assinatura, 'hex');
console.log(ehVerificado);




// Intermediario - vamos dizer que os dados foram interceptado e alterado no meio do caminho por terceiros

dados += " Arquivo alterado";

const verificador2 = createVerify('rsa-sha256');
verificador2.update(dados);

const ehVerificado2 = verificador2.verify(publicKey, assinatura, 'hex');
console.log(ehVerificado2);