// Get concrete time and date info

console.log("1. Get concrete time and date info:")

const now = new Date()
console.log(now)

const year = now.getFullYear()
const month = now.getMonth() + 1
const date = now.getDate()
console.log(year, month, date)

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day = now.getDay()
console.log(day, daysOfWeek[day])

const hour = now.getHours()
const minute = now.getMinutes()
const second = now.getSeconds()
console.log(`${hour}:${minute}:${second}`)

console.log("\n")

// Yesterday

console.log("2. Yesterday:")

const yesterday = new Date(now - 24 * 60 * 60 * 1000)
console.log(yesterday)

console.log("\n")

// Customize Time Zone

console.log("3. Customize Time Zone: (Europe/Stockholm)")

const timeZone = 'Europe/Stockholm';
const options = { timeZone, hour12: false, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
const formatter = new Intl.DateTimeFormat('en-US', options);
const formattedDate = formatter.format(now);

console.log(formattedDate)
console.log("\n")