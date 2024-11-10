const fs = require('fs')
const ini = require('ini')

const config = ini.parse(fs.readFileSync('file.ini', 'utf-8'))

config.database.username = 'mongodb'
config.database.password = 'mongodb'

delete config.path

config.database.port = '5432'

fs.writeFileSync('file_modified.ini', ini.stringify(config, { section: '' }))