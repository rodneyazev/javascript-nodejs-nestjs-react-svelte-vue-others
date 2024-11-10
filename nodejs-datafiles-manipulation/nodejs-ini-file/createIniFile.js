const fs = require('fs')
const ini = require('ini')
const fd = fs.openSync('file.ini', 'w+')

const comment = '; Example how to create a ini data file\n'

fs.writeFileSync(fd,
    comment
)

fs.writeFileSync(fd,
    ini.stringify(
        {'username':'username', 'password':'password', 'database':'mongodb'},
        { section: 'database' }
    )
)

fs.writeFileSync(fd,
    ini.stringify(
        {'hostname':'127.0.0.1', 'mask':'192.168.0.1/24'},
        { section: 'network'}
    )
)

fs.writeFileSync(fd,
    ini.stringify(
        {'datadir':'/tmp', 'file':'file.ini'},
        { section: 'path'}
    )
)