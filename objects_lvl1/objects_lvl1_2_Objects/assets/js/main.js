let person = {
    name: "Lana",
    alter: 25,
    sagNameAlter: function () {
        alert(`${this.name} ${this.alter}`)
        console.log(`${this.name} ${this.alter}`)
    }
}
person.sagNameAlter()