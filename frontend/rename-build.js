var fs = require('fs')

console.log('---------------------------------------------')
console.log(`Running build rename` + '\n')

var read_package = fs.readFileSync(`${__dirname}/package.json`)
var name = JSON.parse(read_package).name
var version = JSON.parse(read_package).version
var build_name = name + '_' + version

fs.rename(`${__dirname}/${build_name}.zip`, './build.zip', function (err) {
  if (err) console.log('BUILD RENAME ERROR: ' + err)
})

console.log(`build rename completed`)
console.log('---------------------------------------------')
