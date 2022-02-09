
const nomes = ["Eronar", "Jonas", "Marina", "Antonia", "Stela"]

console.log(nomes)

//

nomes.pop()

console.log(nomes)

//

nomes.unshift("Dan")

console.log(nomes)

//

nomes.push("Leandro", "Gabriel")

console.log(nomes)

//

nomes.shift()


console.log(nomes)

//

const numbers = [7,5,6,3,8,9,2,1,4]

let sorted = numbers.sort((a,b)=> {
    return a-b;
})

console.log(numbers)