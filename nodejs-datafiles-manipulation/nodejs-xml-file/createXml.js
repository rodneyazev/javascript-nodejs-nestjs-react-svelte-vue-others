const { create } = require('xmlbuilder2')

const root = create({version:'1.0', encoding: 'UTF-8', standalone: 'yes'})
             .ele('javascript', {async: 'false', enabled: 'true'})

const item = root.ele('app')

item.att('version','19').txt('NodeJS').up()

const xml = root.end({ prettyPrint: true });
console.log(xml);