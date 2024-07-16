const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', ()=>{
    console.log("started")
})

eventEmitter.emit('start')

const eventEmitter2 = new EventEmitter()

eventEmitter2.on('play', number=> {
    console.log(" this is the number ", number)
})

eventEmitter2.emit('play', 28)