const express = require('express')
const app = express()
const port = 3000

const appController = require('./src/app/controllers/appController')
app.use(express.json())

app.get('/',appController.getUsers)
app.get('/:id',appController.getUser)
app.post('/', appController.postUser)
app.put('/:id', appController.putUser)
app.delete('/:id', appController.deleteUser)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})




/*=== Using Router example

const express = require('express')
const app = express()
const port = 3000

const appController = require('./src/app/controllers/appController')
app.use(express.json())

const appRouter = express.Router()

appRouter
    .route('/api')
    .get(appController.get)
    .post(appController.post)
    .put(appController.put)
    .delete(appController.delete)

app.use(appRouter)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

=====================================*/