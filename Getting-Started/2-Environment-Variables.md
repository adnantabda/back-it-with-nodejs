# How to Read Environment variables from Node.js

the process module provides the env property which hosts all the environment variables that were set at the moment of process was started

```js

const process = require('process')
console.log(process.env) // this will show all the environment variables that set at moment of process was started


```

NOTE : process doesn't require a "require" it is automatically available

we can use --env-file flag to specify an environment file when running nodejs 
```bash
node --env-file=.env 1-Lesson-Code.js"

```

we can provide multiple environment variable file 
```bash
node --env-file=.env --env-file=.development.env app.js
```

subsequent files override pre-existing variables defined in previous files.