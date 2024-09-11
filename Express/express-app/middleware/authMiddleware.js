function authMiddleware(req, res, next){
    console.log('inside the middleware')
    // Code of authorization goes here
        req.user= { id: 1, name: 'John Doe'}
        next()
}

module.exports = authMiddleware
