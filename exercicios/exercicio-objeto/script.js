
let perfil = {
    nome: "Eronar",
    idade: 15,
    cidade: "Rio de Janeiro"

}

//

perfil.time = "Fluminense"

//

delete perfil.nome

//

console.log(perfil)

//

let cadastro = [
    {
        nome: "Eronar",
        idade: 15,
        telefone: 123456789,
        amigos: ["Gustavo", "Adriely", "Gabriela", "João"]
    },
    {
        nome: "Jonas",
        idade: 21,
        telefone: 123456789,
        amigos: ["Didico", "Pedro", "Alexandro", "João"]
    },
    {
        nome: "Marina",
        idade: 24,
        telefone: 123456789,
        amigos: ["Renan", "Gabriel", "Joana", "Vitor"]
    },
    {
        nome: "Veriano",
        idade: 24,
        telefone: 123456789,
        amigos: ["Sarah", "Felipe", "Flavia", "Daniel"]
    },{
        nome: "Gustavo",
        idade: 18,
        telefone: 123456789,
        amigos: ["Cris", "Ronaldo", "Jonatan", "Kayke"]
    }
]

console.log(cadastro[0].amigos[1])
console.log(cadastro[1].amigos[0])
console.log(cadastro[2].amigos[0])
console.log(cadastro[3].amigos[0])
console.log(cadastro[4].amigos[3])