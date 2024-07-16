# The Node.js Event emitter

the event module offers EventEmitter class which we use to handle our events.

the object created from this class exposes  the

- on ( is used to trigger an event )
- emit methods ( is used to add callback function that's going to be executed when the event is triggered )

it also exposes several other factors 

- once()  add a one time listener
- removerListener / off()  remover an event listener from an event 
- removeAllListeners() -> remove all listeners for an event 

```js
const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();
```
