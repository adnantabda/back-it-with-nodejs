const express = require('express')
// ...all imports & requires here

const app = express()
const PORT = 3000

// add middlewares
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(fileUpload())

// add router middlewares
protectedRouter.use(authMiddleware())
adminRouter.use(adminMiddleware())

// add routers
app.use('/', publicRouter)
app.use('/protected', protectedRouter)
app.use('/admin', adminRouter)

// register APIs
registerApis(publicRouter, protectedRouter, adminRouter)

// add error handlers
app.use(errorHandler404)
app.use(notifyErrorHandler)
app.use(globalErrorHandler)

app.listen(PORT, () => console.log(`Realworld app listening on port ${port}!`))


// https://medium.com/@viral_shah/express-middlewares-demystified-f0c2c37ea6a1