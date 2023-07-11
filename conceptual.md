### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  Asynchronous code in JavaScript can be managed using techniques such as async/await, Promises, and callbacks.

- What is a Promise?
  A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation.

- What are the differences between an async function and a regular function?
  An async function, denoted by the async keyword, allows writing asynchronous code in a more synchronous style, utilizing the await keyword to pause execution. In contrast, a regular function executes synchronously, proceeding line by line without involving special asynchronous syntax.

- What is the difference between Node.js and Express.js?
Node.js is a runtime environment that allows executing JavaScript outside the browser and is commonly used for building server-side applications. Express.js, on the other hand, is a web application framework built on top of Node.js, providing a set of features and tools for simplifying web application development.

- What is the error-first callback pattern?
The error-first callback pattern is a convention used in Node.js where asynchronous functions take a callback as an argument. The callback is invoked with two parameters: an error object (if an error occurred) and the result of the operation. This pattern helps handle errors in asynchronous operations effectively.

- What is middleware?
Middleware refers to a function or set of functions in Express.js that can be executed in the request-response cycle of an application. It sits between the incoming request and the final response

- What does the `next` function do?
In Express.js middleware, the next function is used to pass control to the next middleware function in the chain.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
  The provided code makes sequential HTTP requests using await, causing each request to wait for the previous one to complete, potentially leading to slower performance. It could be improved by sending the requests concurrently using techniques like Promise.all. Additionally, the code structure could be enhanced by utilizing Promise-based approaches like chaining or async/await. Moreover, more descriptive variable names could be used for better clarity and understanding of the code.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
