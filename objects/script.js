const data = [
    {
        identity: {
            name: "Sima", 
            lastName: "Hedayati", 
            city: "Urmiya", 
            age: 29,
        },
    },
    { skills: ["js", "react.js", "next.js"] },
];

const [identity, skills]=data;

const {
    identity:{name, lastName, city, age}
}=identity;
console.log(name, lastName, city, age);

const{
    skills:[js, react, next]
}=skills;


console.log(js, react, next);