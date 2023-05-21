const user1 = {
    name: 'Caua',
    age : 18,
    gender: 'M',
}

const user2 = {
    name: 'Beatriz',
    age: 17,
    gender: 'F',
    boyfriend: user1.name
}
user1.girlfriend = user2.name

console.log(user1)