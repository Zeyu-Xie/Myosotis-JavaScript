//Basic

console.log("Basic:")

const time=new Date()
console.log(time)

const year=time.getFullYear()
const month=time.getMonth()+1
const date=time.getDate()
console.log(year, month, date)

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day=time.getDay()
console.log(day, daysOfWeek[day])

const hour=time.getHours()
const minute=time.getMinutes()
const second=time.getSeconds()
console.log(`${hour}:${minute}:${second}`)

console.log("\n")

//Certain Position

console.log(address)