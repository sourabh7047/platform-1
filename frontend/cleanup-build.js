const fs = require('fs')
const dir = __dirname

console.log('---------------------------------------------')

console.log(`Running build cleanup` + '\n')

fs.rmSync(`${dir}/build`, { recursive: true, force: true })
fs.rmSync(`${dir}/build.zip`, { recursive: true, force: true })

console.log(`build cleanup completed`)

console.log('---------------------------------------------')
