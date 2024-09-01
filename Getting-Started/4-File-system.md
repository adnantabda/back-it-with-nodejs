# File system

the fs module provides a way to interact with files both asynchronously and synchronously. it can be used simply by requiring it 

```js

const file = require('fs')
```

rename a file 

```js

const fs = require('fs');

fs.rename('before.json', 'after.json', err => {
  if (err) {
    return console.error(err);
  }

  // done
});

```

