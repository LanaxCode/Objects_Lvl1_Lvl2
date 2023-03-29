let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];
studentData.forEach((i) => {
    console.log(i.name)
    console.log(i.coop)
    console.log(i.emails)
})

let city = studentData.map((i) => { //erstellt neues Array
    return i.address.city
})
console.log(city)

//for Each 
let eachCity = []
studentData.forEach((i) => {
    eachCity.push(i.address.city)
})
console.log(eachCity)



