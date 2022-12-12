// info about current user
const os = require('os')
const user = os.userInfo()
console.log(user)

// info about system uptime in seconds
console.log(`the system uptime is ${os.uptime} secs`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)

const path = require('path')
console.log(path.sep)

const filepath = path.join('/Content','subfolder','content.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname,'Content','subfoler','content.txt')
console.log(absolute)

