const animal = [
    {
        name: "Lion",
        type : "Mammal",
        color: "Yellow"
    },
    {
        name: "Tiger",
        type : "Mammal",
        color: "Black"
    },
    {
        name: "Elephant",
        type : "Mammal",
        color: "Gray"
    },
    {
        name: "Snake",
        type : "Reptile",
        color: "Green"
    },
    {
        name: "Lizard",
        type : "Reptile",
        color: "Green"
    },
    {
        name: "Catfish",
        type : "Fish",
        color: "Gold"
    },
    {
        name: "Shark",
        type : "Fish",
        color: "Red"
    }
]

isThereFish = animal.some(animal => animal.type === "Fish");
console.log(isThereFish);

isThereMammal = animal.some(animal => animal.type === "Mammal");
console.log(isThereMammal);

isAllMammal = animal.every(animal => animal.type === "Mammal");
console.log(isAllMammal);

animal2 = animal.map(({name}) => name);
console.log(animal2);
