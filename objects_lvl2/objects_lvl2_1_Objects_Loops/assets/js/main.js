let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];

let nameMetall = []
edelMetallPreise.forEach((element) => {
    nameMetall.push(element.name)
})
console.log(nameMetall)


const nameMetallMap = edelMetallPreise.map((element) => {
    return element.name
})

console.log(nameMetallMap)

let arrPreise = []
edelMetallPreise.forEach((element) => {
    arrPreise.push(element.preiseGramEuro)
})
console.log(arrPreise)

const Preise = edelMetallPreise.map((element) => {
    return element.preiseGramEuro
})
console.log(Preise)

let veraenderungArr = []
edelMetallPreise.forEach((element) => {
    arrPreise.push(element.veraenderung)
})
console.log(veraenderungArr)

const veraenderungMap = edelMetallPreise.map((element) => {
    return element.veraenderung
})
console.log(veraenderungMap)

const filterPreis = edelMetallPreise.filter((element) => {
    if (element.preiseGramEuro <= 50) {
        return element
    }
})
console.log(filterPreis)

// let table = '<table><tr><td><h3>Name</td><td><h3>PreiseGramEuro</td><td><h3>Veranderung</td></tr>'

// edelMetallPreise.forEach((element) => {
//     table += `<tr><td>${element.name}</td><td>${element.preiseGramEuro}</td><td>${element.veraenderung}</td></tr>`;
// });
// document.body.innerHTML = table;

const table = document.querySelector("table")
edelMetallPreise.forEach((element) => {
    table.innerHTML +=
        `<tr>
        <td>${element.name}</td>
        <td>${element.preiseGramEuro}</td>
        <td>${element.veraenderung}</td>  
    </tr>`
})