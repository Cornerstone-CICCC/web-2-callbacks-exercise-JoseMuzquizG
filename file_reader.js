const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  const firstName = data1
  fs.readFile("./lastname.txt", "utf-8", (err, data1) => {
    const lastName = data1
    fs.readFile("./age.txt", "utf-8", (err, data1) => {
      const age = data1
      fs.readFile("./hobbies.txt", "utf-8", (err, data1) => {
        const hobbies = JSON.parse(data1)
        console.log(`${firstName} ${lastName} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`)
      })
    })
  })
})