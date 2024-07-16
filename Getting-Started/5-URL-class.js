const githubUrl = new URL('https://github.com/adantabda/foo#bar')

console.log(githubUrl.protocol)
console.log(githubUrl.search)
console.log(githubUrl.href)
console.log(githubUrl.hostname)
console.log(githubUrl.hash)
githubUrl.port = 800
// default ports for protocol will converted to empty string 

console.log(githubUrl.port)

