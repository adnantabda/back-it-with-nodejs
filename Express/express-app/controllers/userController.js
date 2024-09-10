const getUserProfile = (req, res)=>{
    console.log('inside the controller')
    const userId = req.user.id
    const userProfile = {
        id: userId,
        name: 'John Doe',
        email: 'john@example.com',
        level: '2'
    };
    res.json(userProfile)
}

module.exports = {
    getUserProfile,
}