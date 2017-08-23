var square = x => x*x
console.log(square(4))

var user = {
  name: "Chandan",
  sayHi: () => {
    console.log(arguments)
    console.log(`Name: ${this.name}`)
  },
  sayHiAlt () {
    console.log(arguments)
    console.log(`Name: ${this.name}`)
  }
};


user.sayHiAlt(1,2,4)
user.sayHi(1,2,4)
