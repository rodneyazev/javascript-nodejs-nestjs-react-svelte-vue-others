const fs = require('fs')
const ini = require('ini')

const config = ini.parse(fs.readFileSync('config.ini','utf-8'))

// console.log(config)

config.scope='local'
config.database.database = 'mongodb'
config.paths.default.tmpdir = 'temp'
delete config.paths.default.datadir
config.paths.default.array.push('fourth value')

fs.writeFileSync('config_modified.ini', ini.stringify(config, { section: 'section' }))