# Introduction 

the nodejs site declares node as 

```
An asynchronous event drive Javascript runtime, Node is designed to build scalable network applications 

```

- when javascript first created, it was designed to run on the browser. 
- node js brings js outside of the browser.

in simple term node js allows us to run javascript code on a machine or server without having to go through a web browser.

To facilitate this, Node has some added functionality that is not found in browser-based JavaScript, such as the ability to read and write local files, create http connections and listen to network requests.


#  Event Driven

- **asynchronous event driven** JavaScript runtime.

  In this context asynchronous means that when you write your code you do not try to predict the exact sequence in which every line will run. Instead you write your code as a collection of smaller functions that get called in response to specific events such as a network request (event driven).

This process is just like what we used to do on the browser to wait for a user action such as a mouse-click or keyboard press. 
The main difference is that the events are going to be things such as network requests and database queries.

```js


const btn = document.querySelector('button')
btn.addEventListener('click', ()=>{
  // do something 
})


```