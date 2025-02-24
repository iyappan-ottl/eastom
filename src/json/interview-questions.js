const InterviewQuestions = [
  {
    slug: 'javascript-interview-questions',
    mcqs: [
      {
        title: '35 Easy-Level JavaScript Interview Questions and Answers',
        fragment: 'easy-level',
        mcq: [
          {
            "question": "What is JavaScript?",
            "answer": "JavaScript is a high-level, interpreted programming language used primarily for web development. It enables dynamic interactivity on websites by manipulating the DOM, handling events, and performing asynchronous operations."
          },
          {
            "question": "How do you declare variables in JavaScript?",
            "answer": "Variables can be declared using <code class='language-javascript'>var</code>, <code class='language-javascript'>let</code>, or <code class='language-javascript'>const</code>. <code class='language-javascript'>var</code> is function-scoped (legacy), <code class='language-javascript'>let</code> is block-scoped and allows reassignment, and <code class='language-javascript'>const</code> is block-scoped but cannot be reassigned."
          },
          {
            "question": "What are the differences between <code>var</code>, <code>let</code>, and <code>const</code>?",
            "answer": "<table class='min-w-full bg-gray-100 border border-gray-300 mt-2'><thead><tr><th class='border border-gray-400 px-4 py-2'>Feature</th><th class='border border-gray-400 px-4 py-2'>var</th><th class='border border-gray-400 px-4 py-2'>let</th><th class='border border-gray-400 px-4 py-2'>const</th></tr></thead><tbody><tr><td class='border border-gray-400 px-4 py-2'>Scope</td><td class='border border-gray-400 px-4 py-2'>Function-scoped</td><td class='border border-gray-400 px-4 py-2'>Block-scoped</td><td class='border border-gray-400 px-4 py-2'>Block-scoped</td></tr><tr><td class='border border-gray-400 px-4 py-2'>Reassignment</td><td class='border border-gray-400 px-4 py-2'>Allowed</td><td class='border border-gray-400 px-4 py-2'>Allowed</td><td class='border border-gray-400 px-4 py-2'>Not allowed</td></tr><tr><td class='border border-gray-400 px-4 py-2'>Hoisting</td><td class='border border-gray-400 px-4 py-2'>Hoisted to undefined</td><td class='border border-gray-400 px-4 py-2'>Hoisted but not initialized</td><td class='border border-gray-400 px-4 py-2'>Hoisted but not initialized</td></tr></tbody></table>"
          },
          {
            "question": "What is the difference between <code>==</code> and <code>===</code>?",
            "answer": "<code class='language-javascript'>==</code> (loose equality) compares values after type coercion, while <code class='language-javascript'>===</code> (strict equality) compares both value and type without coercion."
          },
          {
            "question": "What is the purpose of the <code>typeof</code> operator?",
            "answer": "The <code>typeof</code> operator returns the data type of a variable or expression as a string (e.g., <code>number</code>, <code>string</code>, <code>object</code>)."
          },
          {
            "question": "What are the primitive data types in JavaScript?",
            "answer": "The primitive data types are: <code>String</code>, <code>Number</code>, <code>Boolean</code>, <code>Undefined</code>, <code>Null</code>, <code>BigInt</code>, and <code>Symbol</code>."
          },
          {
            "question": "How do you convert a string to a number in JavaScript?",
            "answer": "Use <code class='language-javascript'>parseInt()</code>, <code class='language-javascript'>parseFloat()</code>, or the <code class='language-javascript'>Number()</code> constructor. Example:<br><pre><code class='language-javascript'>parseInt('42'); // 42\nNumber('42'); // 42\n</code></pre>"
          },
          {
            "question": "What is the difference between <code>null</code> and <code>undefined</code>?",
            "answer": "<code class='language-javascript'>undefined</code> means a variable has been declared but not assigned a value, while <code class='language-javascript'>null</code> represents an intentional absence of any object value."
          },
          {
            "question": "What is hoisting in JavaScript?",
            "answer": "Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope during compilation. However, only declarations are hoisted, not initializations.<br><pre><code class='language-javascript'>console.log(x); // undefined\nvar x = 10;\n</code></pre>"
          },
          {
            "question": "What is the DOM?",
            "answer": "The DOM (Document Object Model) is a tree-like structure representing the HTML document. It allows JavaScript to dynamically manipulate the content, structure, and style of a webpage.<br><pre><code class='language-javascript'>document.getElementById('btn').addEventListener('click', () => {\n  console.log('Button clicked!');\n});\n</code></pre>"
          },
          {
            "question": "How do you add an event listener in JavaScript?",
            "answer": "Use the <code class='language-javascript'>addEventListener</code> method. Example:<br><pre><code class='language-javascript'>document.getElementById('btn').addEventListener('click', () => {\n  console.log('Button clicked!');\n});\n</code></pre>"
          },
          {
            "question": "What is the difference between <code>slice()</code> and <code>splice()</code>?",
            "answer": "<code class='language-javascript'>slice(start, end)</code> returns a shallow copy of a portion of an array without modifying the original array, while <code class='language-javascript'>splice(start, deleteCount, items)</code> changes the contents of an array by removing, replacing, or adding elements.<br><pre><code class='language-javascript'>let arr = [1, 2, 3, 4];\nconsole.log(arr.slice(1, 3)); // [2, 3]\narr.splice(1, 2, 5); // Removes 2 elements, adds 5\nconsole.log(arr); // [1, 5, 4]\n</code></pre>"
          },
          {
            "question": "What is a callback function?",
            "answer": "A callback function is a function passed as an argument to another function and executed after some operation is completed.<br><pre><code class='language-javascript'>function greet(name, callback) {\n  console.log('Hello', name);\n  callback();\n}\ngreet('Alice', () => console.log('Callback executed'));\n</code></pre>"
          },
          {
            "question": "What is the <code>this</code> keyword in JavaScript?",
            "answer": "<code class='language-javascript'>this</code> refers to the context in which a function is executed. Its value depends on how the function is called: in global scope (<code>window</code>), in a method (the object owning the method), or in an arrow function (inherits from the enclosing lexical scope)."
          },
          {
            "question": "What is the difference between <code>setTimeout</code> and <code>setInterval</code>?",
            "answer": "<code class='language-javascript'>setTimeout</code> executes a function once after a specified delay, while <code class='language-javascript'>setInterval</code> executes a function repeatedly at specified intervals.<br><pre><code class='language-javascript'>setTimeout(() => console.log('Once'), 1000);\nsetInterval(() => console.log('Repeated'), 1000);\n</code></pre>"
          },
          {
            "question": "What is the output of <code>console.log(typeof NaN)</code>?",
            "answer": "The output is <code>'number'</code> because <code>NaN</code> stands for 'Not-a-Number,' but its type is still <code>'number'</code>."
          },
          {
            "question": "What is the output of <code>console.log([] + [])</code>?",
            "answer": "The output is an empty string (<code>''</code>) because arrays are converted to strings and concatenated."
          },
          {
            "question": "What is the output of <code>console.log(+'123')</code>?",
            "answer": "The output is <code>123</code> because the unary <code>+</code> operator converts a string to a number."
          },
          {
            "question": "What is the difference between <code>push()</code> and <code>unshift()</code>?",
            "answer": "<code class='language-javascript'>push()</code> adds one or more elements to the end of an array, while <code class='language-javascript'>unshift()</code> adds one or more elements to the beginning of an array.<br><pre><code class='language-javascript'>let arr = [1, 2];\narr.push(3); // [1, 2, 3]\narr.unshift(0); // [0, 1, 2, 3]\n</code></pre>"
          },
          {
            "question": "How do you check if a variable is an array?",
            "answer": "Use <code class='language-javascript'>Array.isArray()</code>. Example:<br><pre><code class='language-javascript'>let arr = [1, 2, 3];\nconsole.log(Array.isArray(arr)); // true\n</code></pre>"
          },
          {
            "question": "What is the output of <code>console.log(0.1 + 0.2 === 0.3)</code>?",
            "answer": "The output is <code>false</code> due to floating-point precision issues in JavaScript."
          },
          {
            "question": "What is the difference between <code>for...in</code> and <code>for...of</code>?",
            "answer": "<code class='language-javascript'>for...in</code> iterates over the enumerable properties of an object (keys), while <code class='language-javascript'>for...of</code> iterates over iterable objects like arrays, strings, etc. (values).<br><pre><code class='language-javascript'>let arr = [1, 2, 3];\nfor (let key in arr) console.log(key); // 0, 1, 2\nfor (let value of arr) console.log(value); // 1, 2, 3\n</code></pre>"
          },
          {
            "question": "What is the output of <code>console.log(!!'false')</code>?",
            "answer": "The output is <code>true</code> because non-empty strings are truthy."
          },
          {
            "question": "What is the difference between <code>map()</code> and <code>forEach()</code>?",
            "answer": "<code class='language-javascript'>map()</code> returns a new array with the results of applying a callback function to each element, while <code class='language-javascript'>forEach()</code> executes a callback function for each element but does not return anything.<br><pre><code class='language-javascript'>let arr = [1, 2, 3];\nconsole.log(arr.map(x => x * 2)); // [2, 4, 6]\narr.forEach(x => console.log(x)); // 1, 2, 3\n</code></pre>"
          },
          {
            "question": "What is the output of <code>console.log(3 + '3')</code>?",
            "answer": "The output is <code>'33'</code> because the number <code>3</code> is converted to a string, and concatenation occurs."
          },
          {
            "question": "What is the difference between <code>null</code> and <code>undefined</code> in terms of type?",
            "answer": "<code class='language-javascript'>typeof null</code> returns <code>'object'</code> (a quirk of JavaScript), while <code class='language-javascript'>typeof undefined</code> returns <code>'undefined'</code>."
          },
          {
            "question": "How do you remove duplicates from an array?",
            "answer": "Use <code class='language-javascript'>Set</code>:<br><pre><code class='language-javascript'>let arr = [1, 2, 2, 3];\nlet unique = [...new Set(arr)];\nconsole.log(unique); // [1, 2, 3]\n</code></pre>"
          },
          {
            "question": "What is the output of <code>console.log([10] == 10)</code>?",
            "answer": "The array <code>[10]</code> is coerced into a string <code>'10'</code>, which is then coerced into the number <code>10</code>. The output is <code>true</code>."
          },
          {
            "question": "What is the difference between <code>substring()</code> and <code>substr()</code>?",
            "answer": "<code class='language-javascript'>substring(start, end)</code> extracts characters between two indices, while <code class='language-javascript'>substr(start, length)</code> extracts characters starting at an index for a specified length.<br><pre><code class='language-javascript'>let str = 'hello';\nconsole.log(str.substring(1, 3)); // 'el'\nconsole.log(str.substr(1, 3)); // 'ell'\n</code></pre>"
          },
          {
            "question": "What is the output of <code>console.log(Boolean(''))</code>?",
            "answer": "An empty string is falsy. The output is <code>false</code>."
          },
          {
            "question": "What is the difference between <code>JSON.stringify()</code> and <code>JSON.parse()</code>?",
            "answer": "<code class='language-javascript'>JSON.stringify()</code> converts a JavaScript object into a JSON string, while <code class='language-javascript'>JSON.parse()</code> parses a JSON string into a JavaScript object.<br><pre><code class='language-javascript'>let obj = { name: 'Alice' };\nlet str = JSON.stringify(obj);\nconsole.log(str); // '{\"name\":\"Alice\"}'\nconsole.log(JSON.parse(str)); // { name: 'Alice' }\n</code></pre>"
          },
          {
            "question": "What is the output of <code>console.log(!!null)</code>?",
            "answer": "<code>null</code> is falsy, so <code>!!null</code> evaluates to <code>false</code>."
          },
          {
            "question": "What is the difference between <code>alert()</code> and <code>confirm()</code>?",
            "answer": "<code class='language-javascript'>alert()</code> displays a message box with an OK button, while <code class='language-javascript'>confirm()</code> displays a message box with OK and Cancel buttons, returning <code>true</code> or <code>false</code>."
          },
          {
            "question": "What is the output of <code>console.log(5 < 6 < 7)</code>?",
            "answer": "The comparison is evaluated left-to-right. <code>5 < 6</code> evaluates to <code>true</code>, which is coerced to <code>1</code>. Then <code>1 < 7</code> evaluates to <code>true</code>."
          },
          {
            "question": "How do you stop an interval timer?",
            "answer": "Use <code class='language-javascript'>clearInterval()</code> with the ID returned by <code class='language-javascript'>setInterval()</code>.<br><pre><code class='language-javascript'>let id = setInterval(() => console.log('Tick'), 1000);\nsetTimeout(() => clearInterval(id), 5000); // Stops after 5 seconds\n</code></pre>"
          }
        ]
      }, {
        title: "35 Medium-Level JavaScript Interview Questions and Answers",
        fragment: 'medium-level',
        mcq: [
          {
            question: "What is a closure in JavaScript?",
            answer:
              "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. Closures are commonly used for encapsulation and creating private variables.<br><pre><code class='language-javascript'>function outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    return count;\n  };\n}\nconst counter = outer();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\n</code></pre>",
          },
          {
            question: "What is event delegation?",
            answer:
              "Event delegation involves attaching a single event listener to a parent element to handle events for all its child elements. This improves performance and simplifies event management.<br><pre><code class='language-javascript'>document.getElementById('parent').addEventListener('click', (e) => {\n  if (e.target.tagName === 'BUTTON') {\n    console.log('Button clicked');\n  }\n});\n</code></pre>",
          },
          {
            question: "What is the prototype chain?",
            answer:
              "The prototype chain is a mechanism in JavaScript where objects inherit properties and methods from their prototype. Each object has a hidden <code>[[Prototype]]</code> property pointing to its prototype.<br><pre><code class='language-javascript'>let obj = {};\nconsole.log(obj.__proto__ === Object.prototype); // true\n</code></pre>",
          },
          {
            question: "What is the difference between <code>call</code>, <code>apply</code>, and <code>bind</code>?",
            answer:
              "<code>call</code>: Invokes a function with a specific <code>this</code> value and arguments provided individually.<br><code>apply</code>: Similar to <code>call</code>, but arguments are passed as an array.<br><code>bind</code>: Returns a new function with a bound <code>this</code> value.<br><pre><code class='language-javascript'>function greet(greeting, punctuation) {\n  return greeting + this.name + punctuation;\n}\nconst person = { name: 'Alice' };\nconsole.log(greet.call(person, 'Hello', '!')); // 'Hello, Alice!'\nconsole.log(greet.apply(person, ['Hi', '?'])); // 'Hi, Alice?'\nconst boundGreet = greet.bind(person, 'Hey');\nconsole.log(boundGreet('!')); // 'Hey, Alice!'\n</code></pre>",
          },
          {
            question: "What is the event loop in JavaScript?",
            answer:
              "The event loop is a mechanism that allows JavaScript to perform non-blocking operations by managing the execution of tasks in the call stack, microtask queue, and macrotask queue.",
          },
          {
            question: "What is async/await?",
            answer:
              "<code>async/await</code> is syntactic sugar for working with promises. It makes asynchronous code look synchronous.<br><pre><code class='language-javascript'>async function fetchData() {\n  try {\n    const response = await fetch('https://api.example.com/data');\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error(error);\n  }\n}\n</code></pre>",
          },
          {
            question: "What is the difference between <code>Promise.all</code> and <code>Promise.allSettled</code>?",
            answer:
              "<code>Promise.all</code>: Rejects immediately if any promise rejects.<br><code>Promise.allSettled</code>: Waits for all promises to settle, regardless of success or failure.<br><pre><code class='language-javascript'>Promise.all([Promise.resolve(1), Promise.reject(2)])\n  .then(console.log)\n  .catch(console.error); // Error: 2\n\nPromise.allSettled([Promise.resolve(1), Promise.reject(2)]).then(console.log);\n// [{ status: 'fulfilled', value: 1 }, { status: 'rejected', reason: 2 }]\n</code></pre>",
          },
          {
            question: "What is debouncing?",
            answer:
              "Debouncing limits the rate at which a function is executed by delaying its invocation until after a certain period of inactivity.<br><pre><code class='language-javascript'>function debounce(fn, delay) {\n  let timer;\n  return function (...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn.apply(this, args), delay);\n  };\n}\n</code></pre>",
          },
          {
            question: "What is throttling?",
            answer:
              "Throttling ensures a function is executed at most once in a specified time interval.<br><pre><code class='language-javascript'>function throttle(fn, limit) {\n  let lastCall = 0;\n  return function (...args) {\n    const now = Date.now();\n    if (now - lastCall >= limit) {\n      lastCall = now;\n      fn.apply(this, args);\n    }\n  };\n}\n</code></pre>",
          },
          {
            question: "What is currying in JavaScript?",
            answer:
              "Currying is a technique where a function takes multiple arguments one at a time, returning a series of functions.<br><pre><code class='language-javascript'>function curry(fn) {\n  return function curried(...args) {\n    if (args.length >= fn.length) {\n      return fn.apply(this, args);\n    } else {\n      return function (...nextArgs) {\n        return curried.apply(this, args.concat(nextArgs));\n      };\n    }\n  };\n}\n\nfunction add(a, b, c) {\n  return a + b + c;\n}\nconst curriedAdd = curry(add);\nconsole.log(curriedAdd(1)(2)(3)); // 6\n</code></pre>",
          },
          {
            question: "What is memoization?",
            answer:
              "Memoization is an optimization technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again.<br><pre><code class='language-javascript'>function memoize(fn) {\n  const cache = {};\n  return function (...args) {\n    const key = JSON.stringify(args);\n    if (cache[key]) {\n      return cache[key];\n    }\n    const result = fn.apply(this, args);\n    cache[key] = result;\n    return result;\n  };\n}\n</code></pre>",
          },
          {
            question: "What is the difference between <code>Object.freeze()</code> and <code>Object.seal()</code>?",
            answer:
              "<code>Object.freeze()</code>: Makes an object immutable—no properties can be added, removed, or modified.<br><code>Object.seal()</code>: Prevents adding or removing properties but allows modifying existing properties.<br><pre><code class='language-javascript'>const obj = { a: 1 };\nObject.freeze(obj);\nobj.a = 2; // No effect\nconsole.log(obj.a); // 1\n\nconst sealedObj = { b: 2 };\nObject.seal(sealedObj);\nsealedObj.b = 3; // Allowed\nconsole.log(sealedObj.b); // 3\n</code></pre>",
          },
          {
            question: "What is the output of <code>console.log(1 < 2 < 3)</code>?",
            answer:
              "The comparison is evaluated left-to-right. <code>1 < 2</code> evaluates to <code>true</code>, which is coerced to <code>1</code>. Then <code>1 < 3</code> evaluates to <code>true</code>.<br><pre><code class='language-javascript'>console.log(1 < 2 < 3); // true\n</code></pre>",
          },
          {
            question: "What is the difference between <code>map()</code> and <code>reduce()</code>?",
            answer:
              "<code>map()</code>: Transforms each element of an array and returns a new array.<br><code>reduce()</code>: Reduces an array to a single value by applying a function.<br><pre><code class='language-javascript'>const arr = [1, 2, 3];\nconsole.log(arr.map(x => x * 2)); // [2, 4, 6]\nconsole.log(arr.reduce((acc, curr) => acc + curr, 0)); // 6\n</code></pre>",
          },
          {
            question: "What is the difference between <code>null</code> and <code>undefined</code> in terms of type coercion?",
            answer:
              "<code>null == undefined</code> evaluates to <code>true</code>.<br><code>null === undefined</code> evaluates to <code>false</code>.<br><pre><code class='language-javascript'>console.log(null == undefined); // true\nconsole.log(null === undefined); // false\n</code></pre>",
          },
          {
            question: "What is the difference between <code>for...of</code> and <code>forEach()</code>?",
            answer:
              "<code>for...of</code>: Iterates over iterable objects like arrays, strings, etc.<br><code>forEach()</code>: Executes a callback for each array element but does not support <code>break</code> or <code>continue</code>.<br><pre><code class='language-javascript'>const arr = [1, 2, 3];\nfor (let val of arr) {\n  if (val === 2) break; // Works\n  console.log(val);\n}\n\narr.forEach(val => {\n  if (val === 2) break; // Error\n  console.log(val);\n});\n</code></pre>",
          },
          {
            question: "What is the output of <code>console.log(typeof [])</code>?",
            answer:
              "The output is <code>'object'</code> because arrays are objects in JavaScript.<br><pre><code class='language-javascript'>console.log(typeof []); // 'object'\n</code></pre>",
          },
          {
            question: "What is the difference between <code>Promise.resolve()</code> and <code>new Promise()</code>?",
            answer:
              "<code>Promise.resolve()</code>: Creates a resolved promise immediately.<br><code>new Promise()</code>: Allows custom logic for resolving or rejecting.<br><pre><code class='language-javascript'>Promise.resolve(42).then(console.log); // 42\n\nnew Promise((resolve, reject) => {\n  resolve(42);\n}).then(console.log); // 42\n</code></pre>",
          },
          {
            question: "What is the output of <code>console.log([] == ![])</code>?",
            answer:
              "The output is <code>true</code>. The empty array <code>[]</code> is coerced to <code>0</code>, and <code>![]</code> evaluates to <code>false</code>, which is coerced to <code>0</code>.<br><pre><code class='language-javascript'>console.log([] == ![]); // true\n</code></pre>",
          },
          {
            question: "What is the difference between <code>setTimeout</code> and <code>requestAnimationFrame</code>?",
            answer:
              "<code>setTimeout</code>: Executes a function after a specified delay.<br><code>requestAnimationFrame</code>: Optimized for animations, syncing with the browser's repaint cycle.<br><pre><code class='language-javascript'>setTimeout(() => console.log('Timeout'), 1000);\n\nfunction animate() {\n  console.log('Animation frame');\n  requestAnimationFrame(animate);\n}\nrequestAnimationFrame(animate);\n</code></pre>",
          },
          {
            question: "What is the output of <code>console.log(!![])</code>?",
            answer:
              "The output is <code>true</code> because arrays are truthy.<br><pre><code class='language-javascript'>console.log(!![]); // true\n</code></pre>",
          },
          {
            question: "What is the difference between <code>Object.assign()</code> and the spread operator (<code>...</code>)?",
            answer:
              "Both copy properties, but:<br><code>Object.assign()</code>: Copies enumerable own properties.<br>Spread operator: Creates a shallow copy.<br><pre><code class='language-javascript'>const obj1 = { a: 1 };\nconst obj2 = { b: 2 };\nconsole.log(Object.assign({}, obj1, obj2)); // { a: 1, b: 2 }\nconsole.log({ ...obj1, ...obj2 }); // { a: 1, b: 2 }\n</code></pre>",
          },
          {
            question: "What is the output of <code>console.log(+'Infinity')</code>?",
            answer:
              "The output is <code>Infinity</code> because the unary <code>+</code> operator converts the string <code>'Infinity'</code> to a number.<br><pre><code class='language-javascript'>console.log(+'Infinity'); // Infinity\n</code></pre>",
          },
          {
            question: "What is the difference between <code>Array.prototype.map()</code> and <code>Array.prototype.flatMap()</code>?",
            answer:
              "<code>map()</code>: Transforms each element and returns a new array.<br><code>flatMap()</code>: Maps each element and flattens the result into a single array.<br><pre><code class='language-javascript'>const arr = [[1], [2], [3]];\nconsole.log(arr.map(x => x)); // [[1], [2], [3]]\nconsole.log(arr.flatMap(x => x)); // [1, 2, 3]\n</code></pre>",
          },
          {
            question: "What is the output of <code>console.log(1 + '1' - 1)</code>?",
            answer:
              "The output is <code>10</code>. The string <code>'1'</code> is concatenated with <code>1</code>, resulting in <code>'11'</code>, which is then coerced to a number and subtracted by <code>1</code>.<br><pre><code class='language-javascript'>console.log(1 + '1' - 1); // 10\n</code></pre>",
          },
          {
            question: "What is the difference between <code>String.prototype.slice()</code> and <code>String.prototype.substring()</code>?",
            answer:
              "<code>slice()</code>: Accepts negative indices to count from the end.<br><code>substring()</code>: Treats negative indices as <code>0</code>.<br><pre><code class='language-javascript'>const str = 'hello';\nconsole.log(str.slice(-3)); // 'llo'\nconsole.log(str.substring(-3)); // 'hello'\n</code></pre>",
          },
          {
            question: "What is the output of <code>console.log(Math.max())</code>?",
            answer:
              "The output is <code>-Infinity</code> because <code>Math.max()</code> with no arguments returns the smallest possible value.<br><pre><code class='language-javascript'>console.log(Math.max()); // -Infinity\n</code></pre>",
          },
          {
            question: "What is the difference between <code>Array.prototype.find()</code> and <code>Array.prototype.filter()</code>?",
            answer:
              "<code>find()</code>: Returns the first matching element.<br><code>filter()</code>: Returns an array of all matching elements.<br><pre><code class='language-javascript'>const arr = [1, 2, 3, 4];\nconsole.log(arr.find(x => x > 2)); // 3\nconsole.log(arr.filter(x => x > 2)); // [3, 4]\n</code></pre>",
          },
          {
            question: "What is the output of <code>console.log(0 || 1 && 2)</code>?",
            answer:
              "The output is <code>2</code>. Logical operators follow precedence: <code>&&</code> is evaluated before <code>||</code>.<br><pre><code class='language-javascript'>console.log(0 || 1 && 2); // 2\n</code></pre>",
          },
          {
            question: "What is the difference between <code>Function.prototype.bind()</code> and arrow functions?",
            answer:
              "<code>bind()</code>: Creates a new function with a bound <code>this</code>.<br>Arrow functions: Lexically bind <code>this</code> and cannot be rebound.<br><pre><code class='language-javascript'>function regular() {\n  console.log(this.name);\n}\nconst obj = { name: 'Alice' };\nconst bound = regular.bind(obj);\nbound(); // 'Alice'\n\nconst arrow = () => console.log(this.name);\narrow.call(obj); // undefined\n</code></pre>",
          },
          {
            question: "What is the output of <code>console.log(1 && 2 || 3)</code>?",
            answer:
              "The output is <code>2</code>. Logical operators evaluate left-to-right with short-circuiting.<br><pre><code class='language-javascript'>console.log(1 && 2 || 3); // 2\n</code></pre>",
          },
          {
            question: "What is the difference between <code>Array.prototype.every()</code> and <code>Array.prototype.some()</code>?",
            answer:
              "<code>every()</code>: Returns <code>true</code> if all elements satisfy the condition.<br><code>some()</code>: Returns <code>true</code> if at least one element satisfies the condition.<br><pre><code class='language-javascript'>const arr = [1, 2, 3];\nconsole.log(arr.every(x => x > 0)); // true\nconsole.log(arr.some(x => x > 2)); // true\n</code></pre>",
          },
          {
            question: "What is the output of <code>console.log(typeof NaN)</code>?",
            answer:
              "The output is <code>'number'</code> because <code>NaN</code> is a special numeric value.<br><pre><code class='language-javascript'>console.log(typeof NaN); // 'number'\n</code></pre>",
          },
          {
            question: "What is the difference between <code>Object.keys()</code> and <code>Object.entries()</code>?",
            answer:
              "<code>Object.keys()</code>: Returns an array of keys.<br><code>Object.entries()</code>: Returns an array of <code>[key, value]</code> pairs.<br><pre><code class='language-javascript'>const obj = { a: 1, b: 2 };\nconsole.log(Object.keys(obj)); // ['a', 'b']\nconsole.log(Object.entries(obj)); // [['a', 1], ['b', 2]]\n</code></pre>",
          },
          {
            question: "What is the output of <code>console.log(1 ?? 2)</code>?",
            answer:
              "The output is <code>1</code>. The nullish coalescing operator (<code>??</code>) returns the right-hand side only if the left-hand side is <code>null</code> or <code>undefined</code>.<br><pre><code class='language-javascript'>console.log(1 ?? 2); // 1\n</code></pre>",
          }
        ]
      }, {
        title: '35 Hard-Level JavaScript Interview Questions and Answers',
        fragment: 'hard-level',
        mcq: [
          {
            question: "What is the difference between deep copy and shallow copy in JavaScript?",
            answer:
              "A shallow copy copies only the top-level structure of an object, while nested objects are still references. A deep copy creates a completely independent copy of the object, including all nested structures.<br><pre><code class='language-javascript'>// Shallow copy\nconst obj = { a: 1, b: { c: 2 } };\nconst shallowCopy = { ...obj };\nshallowCopy.b.c = 3;\nconsole.log(obj.b.c); // 3\n\n// Deep copy\nconst deepCopy = JSON.parse(JSON.stringify(obj));\ndeepCopy.b.c = 4;\nconsole.log(obj.b.c); // 3\n</code></pre>",
          },
          {
            question: "What is the difference between `__proto__` and `prototype`?",
            answer:
              "`__proto__` is a property of an object that points to its prototype, while `prototype` is a property of a function that defines the prototype for objects created by that function.<br><pre><code class='language-javascript'>function Person() {}\nPerson.prototype.greet = function () {\n  console.log('Hello');\n};\nconst person = new Person();\nconsole.log(person.__proto__ === Person.prototype); // true\n</code></pre>",
          },
          {
            question: "What is a memory leak in JavaScript, and how can it occur?",
            answer:
              "A memory leak occurs when unused memory is not released, leading to increased memory usage over time. Common causes include accidental global variables, detached DOM elements, and closures holding references to large objects.<br><pre><code class='language-javascript'>// Example of a memory leak\nlet array = [];\nfunction grow() {\n  array.push(new Array(1000000).fill(Math.random()));\n}\nsetInterval(grow, 1000);\n</code></pre>",
          },
          {
            question: "What is the difference between `Function.prototype.bind()` and arrow functions?",
            answer:
              "<code>bind()</code> creates a new function with a bound <code>this</code>, while arrow functions lexically bind <code>this</code> and cannot be rebound.<br><pre><code class='language-javascript'>function regular() {\n  console.log(this.name);\n}\nconst obj = { name: 'Alice' };\nconst bound = regular.bind(obj);\nbound(); // 'Alice'\n\nconst arrow = () => console.log(this.name);\narrow.call(obj); // undefined\n</code></pre>",
          },
          {
            question: "What is the difference between `Object.create()` and `new`?",
            answer:
              "`Object.create(proto)` creates a new object with the specified prototype, while `new` creates an instance of a constructor function and sets up the prototype chain.<br><pre><code class='language-javascript'>const proto = { greet: () => console.log('Hello') };\nconst obj1 = Object.create(proto);\nobj1.greet(); // 'Hello'\n\nfunction Person() {}\nPerson.prototype.greet = () => console.log('Hello');\nconst obj2 = new Person();\nobj2.greet(); // 'Hello'\n</code></pre>",
          },
          {
            question: "What is the output of `console.log((function(x) { delete x; return x; })(1))`?",
            answer:
              "The output is <code>1</code>. The <code>delete</code> operator only works on object properties, not local variables or function arguments.<br><pre><code class='language-javascript'>console.log((function(x) {\n  delete x;\n  return x;\n})(1)); // 1\n</code></pre>",
          },
          {
            question: "What is the difference between `Promise.race()` and `Promise.any()`?",
            answer:
              "<code>Promise.race()</code>: Resolves or rejects as soon as one promise resolves or rejects.<br><code>Promise.any()</code>: Resolves as soon as one promise resolves, ignoring rejections unless all promises reject.<br><pre><code class='language-javascript'>Promise.race([Promise.resolve(1), Promise.reject(2)])\n  .then(console.log)\n  .catch(console.error); // 1\n\nPromise.any([Promise.reject(1), Promise.resolve(2)])\n  .then(console.log)\n  .catch(console.error); // 2\n</code></pre>",
          },
          {
            question: "What is the difference between `async` functions and normal functions?",
            answer:
              "<code>async</code> functions always return a promise, and their execution is paused at <code>await</code> expressions until the awaited promise resolves. Normal functions execute synchronously.<br><pre><code class='language-javascript'>async function asyncFn() {\n  return 42;\n}\nconsole.log(asyncFn()); // Promise { 42 }\n\nfunction normalFn() {\n  return 42;\n}\nconsole.log(normalFn()); // 42\n</code></pre>",
          },
          {
            question: "What is the difference between `for...in` and `Object.keys()`?",
            answer:
              "<code>for...in</code>: Iterates over enumerable properties, including inherited ones.<br><code>Object.keys()</code>: Returns an array of own enumerable property names.<br><pre><code class='language-javascript'>const obj = { a: 1, b: 2 };\nfor (let key in obj) console.log(key); // 'a', 'b'\nconsole.log(Object.keys(obj)); // ['a', 'b']\n</code></pre>",
          },
          {
            question: "What is the difference between `Proxy` and `Object.defineProperty()`?",
            answer:
              "<code>Proxy</code>: Allows you to define custom behavior for fundamental operations (e.g., property lookup, assignment).<br><code>Object.defineProperty()</code>: Defines a single property with specific behavior.<br><pre><code class='language-javascript'>const handler = {\n  get(target, prop) {\n    return prop in target ? target[prop] : 'Default';\n  },\n};\nconst proxy = new Proxy({ a: 1 }, handler);\nconsole.log(proxy.a); // 1\nconsole.log(proxy.b); // 'Default'\n\nconst obj = {};\nObject.defineProperty(obj, 'a', { value: 1 });\nconsole.log(obj.a); // 1\n</code></pre>",
          },
          {
            question: "What is the difference between `WeakMap` and `Map`?",
            answer:
              "<code>Map</code>: Stores key-value pairs where keys can be any type.<br><code>WeakMap</code>: Stores key-value pairs where keys must be objects and are held weakly (garbage-collected if no other references exist).<br><pre><code class='language-javascript'>const map = new Map();\nconst weakMap = new WeakMap();\nlet obj = {};\nmap.set(obj, 'Map');\nweakMap.set(obj, 'WeakMap');\nobj = null;\nconsole.log(map.size); // 1\nconsole.log(weakMap.has(obj)); // false\n</code></pre>",
          },
          {
            question: "What is the output of `console.log(typeof (() => {}))`?",
            answer:
              "The output is <code>'function'</code>. Arrow functions are still functions, but they differ in behavior from regular functions (e.g., lexical <code>this</code>).<br><pre><code class='language-javascript'>console.log(typeof (() => {})); // 'function'\n</code></pre>",
          },
          {
            question: "What is the difference between `setTimeout` and `setImmediate`?",
            answer:
              "<code>setTimeout</code>: Executes after a specified delay.<br><code>setImmediate</code>: Executes in the next iteration of the event loop (Node.js-specific).<br><pre><code class='language-javascript'>setTimeout(() => console.log('Timeout'), 0);\nsetImmediate(() => console.log('Immediate'));\n// Output order depends on the environment.\n</code></pre>",
          },
          {
            question: "What is the difference between `module.exports` and `export`?",
            answer:
              "<code>module.exports</code>: Used in CommonJS (Node.js) to export values.<br><code>export</code>: Used in ES6 modules to export values.<br><pre><code class='language-javascript'>// CommonJS\nmodule.exports = { a: 1 };\n\n// ES6\nexport const a = 1;\n</code></pre>",
          },
          {
            question: "What is the difference between `Object.freeze()` and immutability libraries like Immer?",
            answer:
              "<code>Object.freeze()</code>: Makes an object immutable but does not deeply freeze nested objects.<br>Immutability libraries: Provide tools for managing deeply immutable state.<br><pre><code class='language-javascript'>const obj = { a: { b: 2 } };\nObject.freeze(obj);\nobj.a.b = 3;\nconsole.log(obj.a.b); // 3\n</code></pre>",
          },
          {
            question: "What is the difference between `Symbol()` and `Symbol.for()`?",
            answer:
              "<code>Symbol()</code>: Creates a unique symbol every time.<br><code>Symbol.for()</code>: Creates or retrieves a symbol from a global registry.<br><pre><code class='language-javascript'>const sym1 = Symbol('foo');\nconst sym2 = Symbol('foo');\nconsole.log(sym1 === sym2); // false\n\nconst sym3 = Symbol.for('foo');\nconst sym4 = Symbol.for('foo');\nconsole.log(sym3 === sym4); // true\n</code></pre>",
          },
          {
            question: "What is the difference between `Error` and `throw`?",
            answer:
              "<code>Error</code>: A built-in object representing an error.<br><code>throw</code>: A statement used to throw an exception.<br><pre><code class='language-javascript'>try {\n  throw new Error('Something went wrong');\n} catch (err) {\n  console.log(err.message); // 'Something went wrong'\n}\n</code></pre>",
          },
          {
            question: "What is the difference between `Array.prototype.sort()` and `Intl.Collator`?",
            answer:
              "<code>sort()</code>: Sorts arrays based on string Unicode code points.<br><code>Intl.Collator</code>: Provides locale-sensitive string comparison.<br><pre><code class='language-javascript'>const arr = ['ä', 'a', 'z'];\nconsole.log(arr.sort()); // ['a', 'z', 'ä']\n\nconst collator = new Intl.Collator('de');\nconsole.log(arr.sort(collator.compare)); // ['a', 'ä', 'z']\n</code></pre>",
          },
          {
            question: "What is the difference between `BigInt` and `Number`?",
            answer:
              "<code>BigInt</code>: Represents integers larger than <code>2^53 - 1</code>.<br><code>Number</code>: Represents double-precision floating-point numbers.<br><pre><code class='language-javascript'>const bigInt = 9007199254740991n;\nconst number = 9007199254740991;\nconsole.log(bigInt + 1n); // 9007199254740992n\nconsole.log(number + 1); // 9007199254740992\n</code></pre>",
          },
          {
            question: "What is the difference between `requestAnimationFrame` and `setTimeout`?",
            answer:
              "<code>requestAnimationFrame</code>: Optimized for animations, syncing with the browser's repaint cycle.<br><code>setTimeout</code>: Executes a function after a specified delay.<br><pre><code class='language-javascript'>function animate() {\n  console.log('Animation frame');\n  requestAnimationFrame(animate);\n}\nrequestAnimationFrame(animate);\n\nsetTimeout(() => console.log('Timeout'), 1000);\n</code></pre>",
          },
          {
            question: "What is the difference between `Object.is()` and `===`?",
            answer:
              "<code>Object.is()</code>: Compares values like <code>===</code>, but treats <code>-0</code> and <code>+0</code> as different and <code>NaN</code> as equal.<br><code>===</code>: Treats <code>-0</code> and <code>+0</code> as equal and <code>NaN</code> as unequal.<br><pre><code class='language-javascript'>console.log(Object.is(-0, +0)); // false\nconsole.log(-0 === +0); // true\nconsole.log(Object.is(NaN, NaN)); // true\nconsole.log(NaN === NaN); // false\n</code></pre>",
          },
          {
            question: "What is the difference between `import` and `require`?",
            answer:
              "<code>import</code>: Used in ES6 modules for static imports.<br><code>require</code>: Used in CommonJS for dynamic imports.<br><pre><code class='language-javascript'>// ES6\nimport fs from 'fs';\n\n// CommonJS\nconst fs = require('fs');\n</code></pre>",
          },
          {
            question: "What is the difference between `Promise.allSettled()` and `Promise.all()`?",
            answer:
              "<code>Promise.allSettled()</code>: Waits for all promises to settle, regardless of success or failure.<br><code>Promise.all()</code>: Rejects immediately if any promise rejects.<br><pre><code class='language-javascript'>Promise.allSettled([Promise.resolve(1), Promise.reject(2)]).then(console.log);\n// [{ status: 'fulfilled', value: 1 }, { status: 'rejected', reason: 2 }]\n\nPromise.all([Promise.resolve(1), Promise.reject(2)])\n  .then(console.log)\n  .catch(console.error); // Error: 2\n</code></pre>",
          },
          {
            question: "What is the difference between `Array.prototype.some()` and `Array.prototype.every()`?",
            answer:
              "<code>some()</code>: Returns <code>true</code> if at least one element satisfies the condition.<br><code>every()</code>: Returns <code>true</code> if all elements satisfy the condition.<br><pre><code class='language-javascript'>const arr = [1, 2, 3];\nconsole.log(arr.some(x => x > 2)); // true\nconsole.log(arr.every(x => x > 0)); // true\n</code></pre>",
          },
          {
            question: "What is the difference between `Object.assign()` and `Object.defineProperties()`?",
            answer:
              "<code>Object.assign()</code>: Copies enumerable own properties.<br><code>Object.defineProperties()</code>: Defines multiple properties with descriptors.<br><pre><code class='language-javascript'>const obj1 = { a: 1 };\nconst obj2 = { b: 2 };\nconsole.log(Object.assign({}, obj1, obj2)); // { a: 1, b: 2 }\n\nconst obj3 = {};\nObject.defineProperties(obj3, {\n  a: { value: 1, writable: true },\n  b: { value: 2, writable: false },\n});\nconsole.log(obj3); // { a: 1, b: 2 }\n</code></pre>",
          },
          {
            question: "What is the difference between `WeakSet` and `Set`?",
            answer:
              "<code>Set</code>: Stores unique values of any type.<br><code>WeakSet</code>: Stores only objects and holds them weakly (garbage-collected if no other references exist).<br><pre><code class='language-javascript'>const set = new Set();\nconst weakSet = new WeakSet();\nlet obj = {};\nset.add(obj);\nweakSet.add(obj);\nobj = null;\nconsole.log(set.size); // 1\nconsole.log(weakSet.has(obj)); // false\n</code></pre>",
          },
          {
            question: "What is the difference between `Array.prototype.includes()` and `Array.prototype.indexOf()`?",
            answer:
              "<code>includes()</code>: Returns <code>true</code> if the array contains the value.<br><code>indexOf()</code>: Returns the index of the value or <code>-1</code> if not found.<br><pre><code class='language-javascript'>const arr = [1, 2, 3];\nconsole.log(arr.includes(2)); // true\nconsole.log(arr.indexOf(2)); // 1\n</code></pre>",
          },
          {
            question: "What is the difference between `String.prototype.padStart()` and `String.prototype.padEnd()`?",
            answer:
              "<code>padStart()</code>: Pads the string from the start.<br><code>padEnd()</code>: Pads the string from the end.<br><pre><code class='language-javascript'>const str = '42';\nconsole.log(str.padStart(5, '0')); // '00042'\nconsole.log(str.padEnd(5, '0')); // '42000'\n</code></pre>",
          },
          {
            question: "What is the difference between `Reflect` and `Object` APIs?",
            answer:
              "<code>Reflect</code>: Provides methods for interceptable operations.<br><code>Object</code>: Provides methods for working with objects.<br><pre><code class='language-javascript'>const obj = {};\nReflect.set(obj, 'a', 1);\nconsole.log(obj.a); // 1\n\nObject.defineProperty(obj, 'b', { value: 2 });\nconsole.log(obj.b); // 2\n</code></pre>",
          },
          {
            question: "What is the difference between `process.nextTick()` and `setImmediate()`?",
            answer:
              "<code>process.nextTick()</code>: Executes before the next phase of the event loop.<br><code>setImmediate()</code>: Executes in the check phase of the event loop.<br><pre><code class='language-javascript'>process.nextTick(() => console.log('Next Tick'));\nsetImmediate(() => console.log('Immediate'));\n// Output order depends on the environment.\n</code></pre>",
          },
          {
            question: "What is the difference between `Object.entries()` and `Object.fromEntries()`?",
            answer:
              "<code>Object.entries()</code>: Converts an object into an array of <code>[key, value]</code> pairs.<br><code>Object.fromEntries()</code>: Converts an array of <code>[key, value]</code> pairs into an object.<br><pre><code class='language-javascript'>const obj = { a: 1, b: 2 };\nconsole.log(Object.entries(obj)); // [['a', 1], ['b', 2]]\nconsole.log(Object.fromEntries([['a', 1], ['b', 2]])); // { a: 1, b: 2 }\n</code></pre>",
          },
          {
            question: "What is the difference between `finalizationRegistry` and `WeakRef`?",
            answer: "<code>FinalizationRegistry</code>: Registers callbacks to be called when objects are garbage-collected.<br><code>WeakRef</code>: Holds a weak reference to an object.<br><pre><code class='language-javascript'>let obj = {};\nconst registry = new FinalizationRegistry((heldValue) => {\n  console.log(heldValue, 'was garbage collected');\n});\nregistry.register(obj, 'Object');\nobj = null;\n\nlet weakObj = new WeakRef({});\nconsole.log(weakObj.deref()); // {}\n</code></pre>"
          }
        ]
      }
    ]
  }, {
    slug: 'html-interview-questions',
    mcqs: [
      {
        title: '35 Easy-Level HTML Interview Questions and Answers',
        fragment: "easy-level",
        mcq: [
          {
            question: "What is HTML?",
            answer:
              "HTML (HyperText Markup Language) is the standard markup language used to create web pages. It provides the structure of a webpage using elements like headings, paragraphs, images, links, etc.",
          },
          {
            question: "What is the purpose of the <code>&lt;!DOCTYPE&gt;</code> declaration?",
            answer:
              "The <code>&lt;!DOCTYPE&gt;</code> declaration defines the document type and version of HTML being used. For example, <code>&lt;!DOCTYPE html&gt;</code> specifies HTML5.",
          },
          {
            question: "What is the difference between an element and a tag in HTML?",
            answer:
              "A <strong>tag</strong> is the basic building block of HTML, enclosed in angle brackets (e.g., <code>&lt;p&gt;</code>). An <strong>element</strong> consists of an opening tag, content, and a closing tag (e.g., <code>&lt;p&gt;Hello&lt;/p&gt;</code>).",
          },
          {
            question: "What are semantic elements in HTML?",
            answer:
              "Semantic elements are HTML elements that clearly describe their meaning to both the browser and the developer. Examples include <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;section&gt;</code>.",
          },
          {
            question: "What is the purpose of the <code>&lt;meta&gt;</code> tag?",
            answer:
              "The <code>&lt;meta&gt;</code> tag provides metadata about the HTML document, such as character encoding (<code>&lt;meta charset='UTF-8'&gt;</code>), viewport settings for responsive design, and SEO-related information.",
          },
          {
            question: "What is the difference between <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code>?",
            answer:
              "<code>&lt;div&gt;</code> is a block-level element used for grouping and styling larger sections of content. <code>&lt;span&gt;</code> is an inline element used for styling smaller portions of text or content within a block.",
          },
          {
            question: "What is the purpose of the <code>&lt;link&gt;</code> tag?",
            answer:
              "The <code>&lt;link&gt;</code> tag is used to link external resources like CSS files to the HTML document. Example: <code>&lt;link rel='stylesheet' href='styles.css'&gt;</code>.",
          },
          {
            question: "What is the purpose of the <code>&lt;a&gt;</code> tag?",
            answer:
              "The <code>&lt;a&gt;</code> tag is used to create hyperlinks to other web pages or sections within the same page. Example: <code>&lt;a href='https://example.com'&gt;Visit Example&lt;/a&gt;</code>.",
          },
          {
            question: "What is the purpose of the <code>&lt;title&gt;</code> tag?",
            answer:
              "The <code>&lt;title&gt;</code> tag defines the title of the webpage, which appears in the browser's title bar or tab. It is also used by search engines for SEO purposes.",
          },
          {
            question: "What is the difference between <code>&lt;strong&gt;</code> and <code>&lt;b&gt;</code>?",
            answer:
              "<code>&lt;strong&gt;</code> indicates that the text is of <strong> importance and is often rendered in bold. <code>&lt;b&gt;</code> is purely presentational and does not convey semantic importance.",
          },
          {
            question: "What is the purpose of the <code>&lt;br&gt;</code> tag?",
            answer:
              "The <code>&lt;br&gt;</code> tag inserts a line break in the content without starting a new paragraph. It is a self-closing tag.",
          },
          {
            question: "What is the difference between <code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code>?",
            answer:
              "<code>&lt;ul&gt;</code> creates an unordered (bulleted) list, while <code>&lt;ol&gt;</code> creates an ordered (numbered) list.",
          },
          {
            question: "What is the purpose of the <code>&lt;img&gt;</code> tag?",
            answer:
              "The <code>&lt;img&gt;</code> tag is used to embed images in a webpage. It requires the codesrc</code> attribute to specify the image source and the codealt</code> attribute for accessibility.",
          },
          {
            question: "What is the purpose of the <code>&lt;form&gt;</code> tag?",
            answer:
              "The <code>&lt;form&gt;</code> tag is used to collect user input. It typically contains input fields like text boxes, checkboxes, radio buttons, and a submit button.",
          },
          {
            question: "What is the difference between <code>&lt;input type='text'&gt;</code> and <code>&lt;textarea&gt;</code>?",
            answer:
              "<code>&lt;input type='text'&gt;</code> is a single-line text input field. <code>&lt;textarea&gt;</code> is a multi-line text input field.",
          },
          {
            question: "What is the purpose of the <code>&lt;label&gt;</code> tag?",
            answer:
              "The <code>&lt;label&gt;</code> tag is used to define a label for an input element. It improves accessibility by associating the label with the input using the codefor</code> attribute.",
          },
          {
            question: "What is the difference between <code>&lt;button&gt;</code> and <code>&lt;input type='button'&gt;</code>?",
            answer:
              "<code>&lt;button&gt;</code> allows you to include HTML content (like icons) inside the button. <code>&lt;input type='button'&gt;</code> is limited to plain text.",
          },
          {
            question: "What is the purpose of the <code>&lt;table&gt;</code> tag?",
            answer:
              "The <code>&lt;table&gt;</code> tag is used to create tables in HTML. It includes rows (<code>&lt;tr&gt;</code>), headers (<code>&lt;th&gt;</code>), and data cells (<code>&lt;td&gt;</code>).",
          },
          {
            question: "What is the purpose of the <code>&lt;iframe&gt;</code> tag?",
            answer:
              "The <code>&lt;iframe&gt;</code> tag is used to embed another HTML document or webpage within the current document.",
          },
          {
            question: "What is the difference between <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code>?",
            answer:
              "<code>&lt;head&gt;</code> contains metadata about the document, such as the title, styles, and scripts. <code>&lt;body&gt;</code> contains the visible content of the webpage.",
          },
          {
            question: "What is the purpose of the <code>&lt;script&gt;</code> tag?",
            answer:
              "The <code>&lt;script&gt;</code> tag is used to include JavaScript code in an HTML document. It can be placed in the <code>&lt;head&gt;</code> or <code>&lt;body&gt;</code>.",
          },
          {
            question: "What is the purpose of the <code>&lt;style&gt;</code> tag?",
            answer:
              "The <code>&lt;style&gt;</code> tag is used to define CSS styles directly within an HTML document.",
          },
          {
            question: "What is the difference between <code>&lt;h1&gt;</code> and <code>&lt;p&gt;</code>?",
            answer:
              "<code>&lt;h1&gt;</code> represents the main heading of the page and has larger font size by default. <code>&lt;p&gt;</code> represents a paragraph of text.",
          },
          {
            question: "What is the purpose of the <code>&lt;nav&gt;</code> tag?",
            answer:
              "The <code>&lt;nav&gt;</code> tag is used to define a section of navigation links, typically linking to other pages or sections of the website.",
          },
          {
            question: "What is the purpose of the <code>&lt;footer&gt;</code> tag?",
            answer:
              "The <code>&lt;footer&gt;</code> tag defines the footer section of a webpage, often containing copyright information, links, or contact details.",
          },
          {
            question: "What is the purpose of the <code>&lt;header&gt;</code> tag?",
            answer:
              "The <code>&lt;header&gt;</code> tag defines the header section of a webpage or a section, often containing logos, navigation menus, or introductory content.",
          },
          {
            question: "What is the difference between <code>&lt;section&gt;</code> and <code>&lt;div&gt;</code>?",
            answer:
              "<code>&lt;section&gt;</code> is a semantic element used to group related content. <code>&lt;div&gt;</code> is a generic container with no semantic meaning.",
          },
          {
            question: "What is the purpose of the <code>&lt;aside&gt;</code> tag?",
            answer:
              "The <code>&lt;aside&gt;</code> tag is used to define content that is tangentially related to the main content, such as sidebars or additional notes.",
          },
          {
            question: "What is the purpose of the <code>&lt;main&gt;</code> tag?",
            answer:
              "The <code>&lt;main&gt;</code> tag defines the main content of a webpage, excluding headers, footers, and sidebars.",
          },
          {
            question: "What is the purpose of the <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> tags?",
            answer:
              "<code>&lt;figure&gt;</code> is used to group media content like images, diagrams, or videos. <code>&lt;figcaption&gt;</code> provides a caption for the content inside <code>&lt;figure&gt;</code>.",
          },
          {
            question: "What is the purpose of the <code>&lt;time&gt;</code> tag?",
            answer:
              "The <code>&lt;time&gt;</code> tag is used to represent a specific period of time or date in a machine-readable format.",
          },
          {
            question: "What is the purpose of the <code>&lt;mark&gt;</code> tag?",
            answer:
              "The <code>&lt;mark&gt;</code> tag highlights text for reference or notation purposes, often styled with a yellow background.",
          },
          {
            question: "What is the purpose of the <code>&lt;cite&gt;</code> tag?",
            answer:
              "The <code>&lt;cite&gt;</code> tag is used to define the title of a creative work, such as a book, article, or song.",
          },
          {
            question: "What is the purpose of the <code>&lt;abbr&gt;</code> tag?",
            answer:
              "The <code>&lt;abbr&gt;</code> tag is used to define an abbreviation or acronym. The codetitle</code> attribute provides the full form.",
          },
          {
            question: "What is the purpose of the <code>&lt;q&gt;</code> tag?",
            answer:
              "The <code>&lt;q&gt;</code> tag is used to define a short quotation. It automatically adds quotation marks around the text.",
          },
        ]
      }, {
        title: '35 Medium-Level HTML Interview Questions and Answers',
        fragment: 'medium-level',
        mcq: [
          {
            question: "What is the difference between block-level and inline elements in HTML?",
            answer:
              "Block-level elements start on a new line and take up the full width available (e.g., <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>). Inline elements do not start on a new line and only take up as much width as necessary (e.g., <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>).",
          },
          {
            question: "What is the purpose of the <code>&lt;meta name='viewport'&gt;</code> tag?",
            answer:
              "The <code>&lt;meta name='viewport'&gt;</code> tag is used to control the layout on mobile browsers. It ensures proper scaling and responsiveness by setting the viewport width and initial zoom level. Example: <code>&lt;meta name='viewport' content='width=device-width, initial-scale=1.0'&gt;</code>.",
          },
          {
            question: "What are data attributes in HTML5?",
            answer:
              "Data attributes (e.g., <code>data-*</code>) allow you to store custom data private to the page or application. They are accessed via JavaScript using <code>element.dataset</code>. Example: <code>&lt;div data-id='123'&gt;&lt;/div&gt;</code>.",
          },
          {
            question: "What is the difference between <code>&lt;article&gt;</code> and <code>&lt;section&gt;</code>?",
            answer:
              "<code>&lt;article&gt;</code> represents a self-contained composition (e.g., blog post, news article). <code>&lt;section&gt;</code> groups related content within a document or page.",
          },
          {
            question: "What is the purpose of the <code>&lt;picture&gt;</code> element?",
            answer:
              "The <code>&lt;picture&gt;</code> element is used to provide multiple sources for an image, allowing the browser to choose the most appropriate one based on factors like screen resolution or device type. Example:&lt;br&gt;<pre class='language-html'><code>&lt;picture&gt;\n  &lt;source srcset='image-large.jpg' media='(min-width: 800px)'&gt;\n  &lt;img src='image-small.jpg' alt='Description'&gt;\n&lt;/picture&gt;</code></pre>",
          },
          {
            question: "What is the difference between <code>&lt;script async&gt;</code> and <code>&lt;script defer&gt;</code>?",
            answer:
              "<code>async</code>: The script is executed asynchronously as soon as it is available, without waiting for the HTML parsing to complete.&lt;br&gt;<code>defer</code>: The script is executed after the HTML parsing is complete, but before the <code>DOMContentLoaded</code> event.",
          },
          {
            question: "What is the purpose of the <code>&lt;noscript&gt;</code> tag?",
            answer:
              "The <code>&lt;noscript&gt;</code> tag provides alternative content for users who have disabled JavaScript in their browsers. Example:&lt;br&gt;<pre class='language-html'><code>&lt;noscript&gt;\n  &lt;p&gt;JavaScript is not enabled in your browser.&lt;/p&gt;\n&lt;/noscript&gt;</code></pre>",
          },
          {
            question: "What is the difference between <code>&lt;header&gt;</code> and <code>&lt;h1&gt;</code>?",
            answer:
              "<code>&lt;header&gt;</code> is a semantic container for introductory content or navigational links. <code>&lt;h1&gt;</code> is a heading element used to define the main title of a section or page.",
          },
          {
            question: "What is the purpose of the <code>&lt;progress&gt;</code> tag?",
            answer:
              "The <code>&lt;progress&gt;</code> tag represents the progress of a task. It can display a value between 0 and a maximum (e.g., <code>&lt;progress value='50' max='100'&gt;&lt;/progress&gt;</code>).",
          },
          {
            question: "What is the difference between <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> tags?",
            answer:
              "<code>&lt;audio&gt;</code> is used to embed audio files, while <code>&lt;video&gt;</code> is used to embed video files. Both support controls, autoplay, and looping attributes.",
          },
          {
            question: "What is the purpose of the <code>&lt;datalist&gt;</code> tag?",
            answer:
              "The <code>&lt;datalist&gt;</code> tag provides a list of predefined options for an <code>&lt;input&gt;</code> element. Example:&lt;br&gt;<pre class='language-html'><code>&lt;input list='browsers'&gt;\n&lt;datalist id='browsers'&gt;\n  &lt;option value='Chrome'&gt;\n  &lt;option value='Firefox'&gt;\n&lt;/datalist&gt;</code></pre>",
          },
          {
            question: "What is the difference between <code>&lt;iframe&gt;</code> and <code>&lt;embed&gt;</code>?",
            answer:
              "<code>&lt;iframe&gt;</code> embeds another HTML document within the current page. <code>&lt;embed&gt;</code> embeds external content like multimedia (e.g., PDFs, videos).",
          },
          {
            question: "What is the purpose of the <code>&lt;output&gt;</code> tag?",
            answer:
              "The <code>&lt;output&gt;</code> tag represents the result of a calculation or user action. Example:&lt;br&gt;<pre class='language-html'><code>&lt;form oninput='result.value=parseInt(a.value)+parseInt(b.value)'&gt;\n  &lt;input type='number' id='a' value='10'&gt; +\n  &lt;input type='number' id='b' value='20'&gt; =\n  &lt;output name='result' for='a b'&gt;30&lt;/output&gt;\n&lt;/form&gt;</code></pre>",
          },
          {
            question: "What is the difference between <code>&lt;nav&gt;</code> and <code>&lt;menu&gt;</code>?",
            answer:
              "<code>&lt;nav&gt;</code> defines a section of navigation links. <code>&lt;menu&gt;</code> (deprecated in HTML5) was used for toolbars or context menus.",
          },
          {
            question: "What is the purpose of the <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> tags?",
            answer:
              "The <code>&lt;details&gt;</code> tag creates a collapsible widget. The <code>&lt;summary&gt;</code> tag provides a visible heading for the widget. Example:&lt;br&gt;<pre class='language-html'><code>&lt;details&gt;\n  &lt;summary&gt;Click to expand&lt;/summary&gt;\n  &lt;p&gt;This is the detailed content.&lt;/p&gt;\n&lt;/details&gt;</code></pre>",
          },
          {
            question: "What is the difference between <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, and <code>&lt;tfoot&gt;</code>?",
            answer:
              "<code>&lt;thead&gt;</code> groups header content in a table. <code>&lt;tbody&gt;</code> groups body content. <code>&lt;tfoot&gt;</code> groups footer content.",
          },
          {
            question: "What is the purpose of the <code>&lt;mark&gt;</code> tag?",
            answer:
              "The <code>&lt;mark&gt;</code> tag highlights text for reference or notation purposes, often styled with a yellow background. Example: <code>&lt;mark&gt;Highlighted Text&lt;/mark&gt;</code>.",
          },
          {
            question: "What is the difference between <code>&lt;cite&gt;</code> and <code>&lt;q&gt;</code>?",
            answer:
              "<code>&lt;cite&gt;</code> defines the title of a creative work (e.g., book, article). <code>&lt;q&gt;</code> defines a short inline quotation.",
          },
          {
            question: "What is the purpose of the <code>&lt;time&gt;</code> tag?",
            answer:
              "The <code>&lt;time&gt;</code> tag represents a specific period of time or date in a machine-readable format. Example: <code>&lt;time datetime='2023-10-01'&gt;October 1, 2023&lt;/time&gt;</code>.",
          },
          {
            question: "What is the difference between <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code>?",
            answer:
              "<code>&lt;figure&gt;</code> groups media content like images or diagrams. <code>&lt;figcaption&gt;</code> provides a caption for the content inside <code>&lt;figure&gt;</code>.",
          },
          {
            question: "What is the purpose of the <code>&lt;address&gt;</code> tag?",
            answer:
              "The <code>&lt;address&gt;</code> tag defines contact information for the author or owner of a document or article. Example:&lt;br&gt;<pre class='language-html'><code>&lt;address&gt;\n  Written by &lt;a href='mailto:info@example.com'&gt;John Doe&lt;/a&gt;.\n&lt;/address&gt;</code></pre>",
          },
          {
            question: "What is the difference between <code>&lt;abbr&gt;</code> and <code>&lt;acronym&gt;</code>?",
            answer:
              "<code>&lt;abbr&gt;</code> defines an abbreviation or acronym. <code>&lt;acronym&gt;</code> was deprecated in HTML5 and replaced by <code>&lt;abbr&gt;</code>.",
          },
          {
            question: "What is the purpose of the <code>&lt;wbr&gt;</code> tag?",
            answer:
              "The <code>&lt;wbr&gt;</code> tag specifies a word break opportunity, allowing long words to break and wrap onto the next line if necessary.",
          },
          {
            question: "What is the difference between <code>&lt;canvas&gt;</code> and <code>&lt;svg&gt;</code>?",
            answer:
              "<code>&lt;canvas&gt;</code> is used for rendering graphics via JavaScript. <code>&lt;svg&gt;</code> is used for vector graphics defined in XML.",
          },
          {
            question: "What is the purpose of the <code>&lt;template&gt;</code> tag?",
            answer:
              "The <code>&lt;template&gt;</code> tag holds HTML content that is not rendered when the page loads but can be instantiated later using JavaScript.",
          },
          {
            question: "What is the difference between <code>&lt;del&gt;</code> and <code>&lt;s&gt;</code>?",
            answer:
              "<code>&lt;del&gt;</code> indicates deleted text, often rendered with a strikethrough. <code>&lt;s&gt;</code> indicates text that is no longer relevant or accurate.",
          },
          {
            question: "What is the purpose of the <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code> tags?",
            answer:
              "<code>&lt;fieldset&gt;</code> groups related form elements. <code>&lt;legend&gt;</code> provides a caption for the <code>&lt;fieldset&gt;</code> group.",
          },
          {
            question: "What is the difference between <code>&lt;optgroup&gt;</code> and <code>&lt;option&gt;</code>?",
            answer:
              "<code>&lt;optgroup&gt;</code> groups related <code>&lt;option&gt;</code> elements in a dropdown list. <code>&lt;option&gt;</code> defines an individual option in the list.",
          },
          {
            question: "What is the purpose of the <code>&lt;keygen&gt;</code> tag?",
            answer:
              "The <code>&lt;keygen&gt;</code> tag (deprecated in HTML5) was used to generate a public-private key pair for form submissions.",
          },
          {
            question: "What is the difference between <code>&lt;meter&gt;</code> and <code>&lt;progress&gt;</code>?",
            answer:
              "<code>&lt;meter&gt;</code> represents a scalar measurement within a known range (e.g., disk usage). <code>&lt;progress&gt;</code> represents the completion progress of a task.",
          },
          {
            question: "What is the purpose of the <code>&lt;bdi&gt;</code> tag?",
            answer:
              "The <code>&lt;bdi&gt;</code> tag isolates text that might be formatted in a different direction from the surrounding text (e.g., bidirectional text).",
          },
          {
            question: "What is the difference between <code>&lt;ins&gt;</code> and <code>&lt;u&gt;</code>?",
            answer:
              "<code>&lt;ins&gt;</code> indicates inserted text, often underlined. <code>&lt;u&gt;</code> represents text that is stylistically different, such as misspelled words.",
          },
          {
            question: "What is the purpose of the <code>&lt;rp&gt;</code> and <code>&lt;rt&gt;</code> tags?",
            answer:
              "<code>&lt;rp&gt;</code> provides fallback content for browsers that do not support ruby annotations. <code>&lt;rt&gt;</code> defines the annotation for <code>&lt;ruby&gt;</code> text.",
          },
          {
            question: "What is the difference between <code>&lt;small&gt;</code> and <code>&lt;sub&gt;</code>?",
            answer:
              "<code>&lt;small&gt;</code> represents fine print or side comments. <code>&lt;sub&gt;</code> represents subscript text (e.g., chemical formulas).",
          },
        ]
      }, {
        title: '35 Hard-Level HTML Interview Questions and Answers',
        fragment: 'hard-level',
        mcq: [
          {
            question: "What is the difference between <code>&lt;iframe&gt;</code> sandboxing and Content Security Policy (CSP)?",
            answer:
              "<code>&lt;iframe&gt;</code> sandboxing restricts the capabilities of embedded content using the <code>sandbox</code> attribute (e.g., disabling scripts). CSP is a broader security mechanism that applies to the entire document, controlling which resources can be loaded and executed.",
          },
          {
            question: "What is the purpose of the <code>&lt;dialog&gt;</code> element, and how does it differ from modal dialogs created with JavaScript?",
            answer:
              "The <code>&lt;dialog&gt;</code> element creates a native modal or dialog box. It can be opened and closed using the <code>showModal()</code> and <code>close()</code> methods. Unlike custom JavaScript modals, <code>&lt;dialog&gt;</code> is accessible by default and integrates with browser-native behavior.",
          },
          {
            question: "How does the <code>&lt;picture&gt;</code> element improve performance compared to using multiple <code>&lt;img&gt;</code> tags?",
            answer:
              "The <code>&lt;picture&gt;</code> element allows developers to serve different images based on conditions like screen resolution or viewport size. This reduces unnecessary downloads of large images on smaller devices, improving performance and user experience.",
          },
          {
            question: "What is the difference between <code>aria-live</code> and <code>aria-atomic</code> attributes in ARIA?",
            answer:
              "<code>aria-live</code> specifies how assistive technologies should announce updates to dynamic content. <code>aria-atomic</code> determines whether the entire region or just the changed portion is announced when an update occurs.",
          },
          {
            question: "What is the purpose of the <code>&lt;template&gt;</code> element, and how does it differ from hiding elements with CSS?",
            answer:
              "The <code>&lt;template&gt;</code> element holds inert HTML content that is not rendered until activated via JavaScript. Unlike hiding elements with CSS (e.g., <code>display: none</code>), <code>&lt;template&gt;</code> content is not part of the DOM until explicitly appended.",
          },
          {
            question: "What are the limitations of using <code>&lt;canvas&gt;</code> for rendering graphics?",
            answer:
              "<code>&lt;canvas&gt;</code> is resolution-dependent, meaning it may appear pixelated on high-DPI screens. It also lacks accessibility features, as it does not provide semantic information about the rendered content.",
          },
          {
            question: "What is the difference between <code>rel='noopener'</code> and <code>rel='noreferrer'</code> in anchor tags?",
            answer:
              "<code>rel='noopener'</code> prevents the new page from accessing the <code>window.opener</code> object, enhancing security and performance. <code>rel='noreferrer'</code> additionally hides the HTTP referrer information from the linked page.",
          },
          {
            question: "What is the purpose of the <code>contenteditable</code> attribute, and what are its limitations?",
            answer:
              "The <code>contenteditable</code> attribute makes an element editable by users. However, it lacks built-in undo/redo functionality and requires additional JavaScript for saving or managing changes.",
          },
          {
            question: "How does the <code>&lt;slot&gt;</code> element work in Web Components?",
            answer:
              "The <code>&lt;slot&gt;</code> element enables content projection in Web Components. It allows developers to insert custom content into a shadow DOM template from the light DOM.",
          },
          {
            question: "What is the difference between <code>defer</code> and <code>async</code> attributes in <code>&lt;script&gt;</code> tags?",
            answer:
              "<code>defer</code>: Scripts are executed in order after the HTML parsing is complete. <code>async</code>: Scripts are executed asynchronously as soon as they are downloaded, potentially out of order.",
          },
          {
            question: "What is the purpose of the <code>&lt;math&gt;</code> element, and how does it differ from using images for mathematical expressions?",
            answer:
              "The <code>&lt;math&gt;</code> element (part of MathML) allows developers to include mathematical expressions in a semantic and accessible way. Unlike images, MathML is scalable, searchable, and compatible with assistive technologies.",
          },
          {
            question: "What is the difference between <code>role='button'</code> and a native <code>&lt;button&gt;</code> element?",
            answer:
              "A native <code>&lt;button&gt;</code> element is inherently focusable, clickable, and accessible. Using <code>role='button'</code> on a non-button element requires additional ARIA attributes and keyboard event handling to achieve similar functionality.",
          },
          {
            question: "What is the purpose of the <code>shadow DOM</code>, and how does it differ from the regular DOM?",
            answer:
              "The shadow DOM encapsulates styles and markup within a component, preventing them from affecting the global DOM. This ensures scoped styling and avoids conflicts with external CSS or JavaScript.",
          },
          {
            question: "What is the difference between <code>autofocus</code> and programmatically focusing an element with JavaScript?",
            answer:
              "<code>autofocus</code> automatically focuses an element when the page loads. Programmatically focusing requires explicit JavaScript logic, offering more control over when and how focus is applied.",
          },
          {
            question: "What is the purpose of the <code>preload</code> attribute in <code>&lt;link&gt;</code> tags?",
            answer:
              "The <code>preload</code> attribute instructs the browser to fetch critical resources (e.g., fonts, scripts) early, improving performance by prioritizing their loading.",
          },
          {
            question: "What is the difference between <code>rel='preload'</code> and <code>rel='prefetch'</code>?",
            answer:
              "<code>rel='preload'</code>: Fetches resources for the current navigation with high priority. <code>rel='prefetch'</code>: Fetches resources for future navigations with low priority.",
          },
          {
            question: "What is the purpose of the <code>&lt;ruby&gt;</code>, <code>&lt;rt&gt;</code>, and <code>&lt;rp&gt;</code> elements?",
            answer:
              "The <code>&lt;ruby&gt;</code> element annotates text (e.g., East Asian characters) with pronunciation guides. <code>&lt;rt&gt;</code> provides the annotation, and <code>&lt;rp&gt;</code> provides fallback content for browsers that do not support ruby annotations.",
          },
          {
            question: "What is the difference between <code>aria-hidden='true'</code> and <code>hidden</code> attributes?",
            answer:
              "<code>aria-hidden='true'</code>: Hides an element from assistive technologies but keeps it visually visible. <code>hidden</code>: Completely removes the element from both the visual layout and accessibility tree.",
          },
          {
            question: "What is the purpose of the <code>&lt;bdi&gt;</code> element, and when should it be used?",
            answer:
              "The <code>&lt;bdi&gt;</code> element isolates text that might be formatted in a different direction (e.g., bidirectional text). It is useful for displaying usernames or dynamic content in multilingual applications.",
          },
          {
            question: "What is the difference between <code>inputmode</code> and <code>type</code> attributes in <code>&lt;input&gt;</code> elements?",
            answer:
              "<code>type</code>: Specifies the kind of input (e.g., text, email, number). <code>inputmode</code>: Provides hints to the browser about the type of virtual keyboard to display (e.g., numeric, decimal).",
          },
          {
            question: "What is the purpose of the <code>&lt;map&gt;</code> and <code>&lt;area&gt;</code> elements?",
            answer:
              "The <code>&lt;map&gt;</code> element defines an image map, and <code>&lt;area&gt;</code> defines clickable areas within the map. Example:&lt;br&gt;<pre class='language-html'><code>&lt;img src='image.jpg' usemap='#example'&gt;\n&lt;map name='example'&gt;\n  &lt;area shape='rect' coords='0,0,100,100' href='https://example.com'&gt;\n&lt;/map&gt;</code></pre>",
          },
          {
            question: "What is the difference between <code>srcset</code> and <code>sizes</code> attributes in <code>&lt;img&gt;</code> tags?",
            answer:
              "<code>srcset</code>: Specifies multiple image sources for different resolutions. <code>sizes</code>: Defines the display size of the image based on media queries or viewport dimensions.",
          },
          {
            question: "What is the purpose of the <code>&lt;track&gt;</code> element in <code>&lt;video&gt;</code> or <code>&lt;audio&gt;</code> tags?",
            answer:
              "The <code>&lt;track&gt;</code> element adds subtitles, captions, or descriptions to media content. Example:&lt;br&gt;<pre class='language-html'><code>&lt;video controls&gt;\n  &lt;source src='video.mp4' type='video/mp4'&gt;\n  &lt;track src='subtitles.vtt' kind='subtitles' srclang='en' label='English'&gt;\n&lt;/video&gt;</code></pre>",
          },
          {
            question: "What is the difference between <code>lang</code> and <code>xml:lang</code> attributes?",
            answer:
              "<code>lang</code>: Specifies the language of the content in HTML documents. <code>xml:lang</code>: Specifies the language in XML documents. In HTML5, <code>lang</code> is preferred.",
          },
          {
            question: "What is the purpose of the <code>&lt;portal&gt;</code> element, and why is it experimental?",
            answer:
              "The <code>&lt;portal&gt;</code> element allows embedding another HTML page within the current document, enabling seamless navigation. It is experimental because browser support is limited, and its API may change.",
          },
          {
            question: "What is the difference between <code>tabindex='0'</code> and <code>tabindex='-1'</code>?",
            answer:
              "<code>tabindex='0'</code>: Makes an element focusable in the natural tab order. <code>tabindex='-1'</code>: Makes an element focusable programmatically but removes it from the natural tab order.",
          },
          {
            question: "What is the purpose of the <code>&lt;data&gt;</code> element?",
            answer:
              "The <code>&lt;data&gt;</code> element associates a machine-readable value with human-readable content. Example:&lt;br&gt;<pre class='language-html'><code>&lt;data value='12345'&gt;Product Name&lt;/data&gt;</code></pre>",
          },
          {
            question: "What is the difference between <code>aria-labelledby</code> and <code>aria-describedby</code>?",
            answer:
              "<code>aria-labelledby</code>: Associates an element with one or more labels. <code>aria-describedby</code>: Provides additional descriptive information about the element.",
          },
          {
            question: "What is the purpose of the <code>&lt;summary&gt;</code> element in conjunction with <code>&lt;details&gt;</code>?",
            answer:
              "The <code>&lt;summary&gt;</code> element provides a visible heading for the collapsible <code>&lt;details&gt;</code> widget. Clicking the summary toggles the visibility of the details content.",
          },
          {
            question: "What is the difference between <code>scoped</code> styles and Shadow DOM encapsulation?",
            answer:
              "<code>scoped</code> styles (deprecated) applied styles only to a specific section of the document. Shadow DOM encapsulation achieves similar functionality but is more robust and widely supported.",
          },
          {
            question: "What is the purpose of the <code>&lt;mark&gt;</code> element in terms of semantics?",
            answer:
              "The <code>&lt;mark&gt;</code> element semantically highlights text for reference or notation purposes, such as search results or highlighted quotes.",
          },
          {
            question: "What is the difference between <code>download</code> and opening a link in a new tab?",
            answer:
              "The <code>download</code> attribute prompts the browser to download the linked resource instead of navigating to it. Opening a link in a new tab (<code>target='_blank'</code>) displays the resource in a new browser tab or window.",
          },
          {
            question: "What is the purpose of the <code>&lt;object&gt;</code> element, and how does it differ from <code>&lt;embed&gt;</code>?",
            answer:
              "The <code>&lt;object&gt;</code> element embeds external resources like PDFs, Flash, or images. It supports fallback content. <code>&lt;embed&gt;</code> is simpler but less flexible, primarily used for multimedia.",
          },
        ]
      }
    ]
  }, {
    slug: 'css-interview-questions',
    mcqs: [
      {
        title: '33 Easy-Level CSS Interview Questions and Answers',
        fragment: 'easy-level',
        mcq: [
          {
            question: "What is CSS?",
            answer:
              "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML. It controls the layout, colors, fonts, and other visual aspects of a webpage.",
          },
          {
            question: "What is the difference between inline, internal, and external CSS?",
            answer:
              "<strong>Inline CSS</strong>: Styles are applied directly to an HTML element using the <code>style</code> attribute.<br><strong>Internal CSS</strong>: Styles are defined within a <code><style></code> tag in the <code><head></code> section.<br><strong>External CSS</strong>: Styles are written in a separate <code>.css</code> file and linked to the HTML document using the <code><link></code> tag.",
          },
          {
            question: "What is the purpose of the <code>color</code> property in CSS?",
            answer:
              "The <code>color</code> property specifies the text color of an element. Example: <code>color: red;</code> changes the text color to red.",
          },
          {
            question: "What is the purpose of the <code>background-color</code> property?",
            answer:
              "The <code>background-color</code> property sets the background color of an element. Example: <code>background-color: lightblue;</code> changes the background color to light blue.",
          },
          {
            question: "What is the difference between <code>margin</code> and <code>padding</code>?",
            answer:
              "<code>margin</code>: Adds space outside an element's border.<br><code>padding</code>: Adds space inside an element's border, between the content and the border.",
          },
          {
            question: "What is the purpose of the <code>font-size</code> property?",
            answer:
              "The <code>font-size</code> property specifies the size of the font. Example: <code>font-size: 16px;</code> sets the font size to 16 pixels.",
          },
          {
            question: "What is the purpose of the <code>text-align</code> property?",
            answer:
              "The <code>text-align</code> property aligns text horizontally within an element. Common values include <code>left</code>, <code>right</code>, <code>center</code>, and <code>justify</code>.",
          },
          {
            question: "What is the purpose of the <code>border</code> property?",
            answer:
              "The <code>border</code> property defines the border around an element. Example: <code>border: 2px solid black;</code> creates a 2-pixel-wide solid black border.",
          },
          {
            question: "What is the purpose of the <code>box-sizing</code> property?",
            answer:
              "The <code>box-sizing</code> property determines how the width and height of an element are calculated. <code>content-box</code> (default): Includes only the content. <code>border-box</code>: Includes padding and border in the element's dimensions.",
          },
          {
            question: "What is the purpose of the <code>display</code> property?",
            answer:
              "The <code>display</code> property specifies how an element is displayed. Common values include <code>block</code>, <code>inline</code>, <code>inline-block</code>, and <code>none</code>.",
          },
          {
            question: "What is the purpose of the <code>float</code> property?",
            answer:
              "The <code>float</code> property positions an element to the left or right of its container, allowing text or other elements to wrap around it. Example: <code>float: left;</code> floats the element to the left.",
          },
          {
            question: "What is the purpose of the <code>clear</code> property?",
            answer:
              "The <code>clear</code> property specifies which sides of an element should not allow floating elements. Values include <code>left</code>, <code>right</code>, <code>both</code>, and <code>none</code>.",
          },
          {
            question: "What is the purpose of the <code>position</code> property?",
            answer:
              "The <code>position</code> property specifies the positioning method for an element. Common values include <code>static</code>, <code>relative</code>, <code>absolute</code>, <code>fixed</code>, and <code>sticky</code>.",
          },
          {
            question: "What is the purpose of the <code>z-index</code> property?",
            answer:
              "The <code>z-index</code> property controls the stacking order of elements. Higher values appear on top of lower values. It works only on positioned elements (<code>relative</code>, <code>absolute</code>, <code>fixed</code>).",
          },
          {
            question: "What is the purpose of the <code>opacity</code> property?",
            answer:
              "The <code>opacity</code> property sets the transparency of an element. A value of <code>0</code> makes the element fully transparent, while <code>1</code> makes it fully opaque.",
          },
          {
            question: "What is the purpose of the <code>visibility</code> property?",
            answer:
              "The <code>visibility</code> property determines whether an element is visible or hidden. Values include <code>visible</code> and <code>hidden</code>. Unlike <code>display: none;</code>, hidden elements still occupy space.",
          },
          {
            question: "What is the purpose of the <code>overflow</code> property?",
            answer:
              "The <code>overflow</code> property specifies how content that overflows an element's box is handled. Values include <code>visible</code>, <code>hidden</code>, <code>scroll</code>, and <code>auto</code>.",
          },
          {
            question: "What is the purpose of the <code>cursor</code> property?",
            answer:
              "The <code>cursor</code> property defines the type of cursor to display when hovering over an element. Common values include <code>pointer</code>, <code>default</code>, <code>text</code>, and <code>grab</code>.",
          },
          {
            question: "What is the purpose of the <code>transition</code> property?",
            answer:
              "The <code>transition</code> property adds smooth animations to changes in CSS properties. Example: <code>transition: all 0.5s ease;</code> animates all property changes over 0.5 seconds with easing.",
          },
          {
            question: "What is the purpose of the <code>transform</code> property?",
            answer:
              "The <code>transform</code> property applies transformations like scaling, rotating, translating, or skewing to an element. Example: <code>transform: rotate(45deg);</code> rotates the element by 45 degrees.",
          },
          {
            question: "What is the purpose of the <code>flexbox</code> layout?",
            answer:
              "Flexbox is a CSS layout model that allows flexible alignment and distribution of space among items in a container. It is ideal for creating responsive layouts.",
          },
          {
            question: "What is the purpose of the <code>grid</code> layout?",
            answer:
              "CSS Grid is a layout system that allows you to create two-dimensional layouts (rows and columns). It is ideal for complex designs.",
          },
          {
            question: "What is the purpose of the <code>box-shadow</code> property?",
            answer:
              "The <code>box-shadow</code> property adds shadow effects around an element's frame. Example: <code>box-shadow: 5px 5px 10px gray;</code> adds a gray shadow.",
          },
          {
            question: "What is the purpose of the <code>text-transform</code> property?",
            answer:
              "The <code>text-transform</code> property controls the capitalization of text. Values include <code>uppercase</code>, <code>lowercase</code>, and <code>capitalize</code>.",
          },
          {
            question: "What is the purpose of the <code>line-height</code> property?",
            answer:
              "The <code>line-height</code> property sets the height of a line of text. Example: <code>line-height: 1.5;</code> increases spacing between lines.",
          },
          {
            question: "What is the purpose of the <code>letter-spacing</code> property?",
            answer:
              "The <code>letter-spacing</code> property adjusts the spacing between characters in text. Example: <code>letter-spacing: 2px;</code> increases spacing by 2 pixels.",
          },
          {
            question: "What is the purpose of the <code>word-spacing</code> property?",
            answer:
              "The <code>word-spacing</code> property adjusts the spacing between words in text. Example: <code>word-spacing: 5px;</code> increases spacing by 5 pixels.",
          },
          {
            question: "What is the purpose of the <code>text-decoration</code> property?",
            answer:
              "The <code>text-decoration</code> property adds decorative lines to text. Common values include <code>underline</code>, <code>overline</code>, <code>line-through</code>, and <code>none</code>.",
          },
          {
            question: "What is the purpose of the <code>white-space</code> property?",
            answer:
              "The <code>white-space</code> property controls how whitespace inside an element is handled. Values include <code>normal</code>, <code>nowrap</code>, <code>pre</code>, and <code>pre-wrap</code>.",
          },
          {
            question: "What is the purpose of the <code>vertical-align</code> property?",
            answer:
              "The <code>vertical-align</code> property aligns inline or table-cell elements vertically. Common values include <code>top</code>, <code>middle</code>, <code>bottom</code>, and <code>baseline</code>.",
          },
          {
            question: "What is the purpose of the <code>list-style</code> property?",
            answer:
              "The <code>list-style</code> property defines the appearance of list items. It includes <code>list-style-type</code> (e.g., <code>disc</code>, <code>circle</code>) and <code>list-style-position</code> (e.g., <code>inside</code>, <code>outside</code>).",
          },
          {
            question: "What is the purpose of the <code>outline</code> property?",
            answer:
              "The <code>outline</code> property draws a line around an element outside its border. Example: <code>outline: 2px dashed red;</code> creates a red dashed outline.",
          },
          {
            question: "What is the purpose of the <code>clip-path</code> property?",
            answer:
              "The <code>clip-path</code> property clips an element to a specific shape. Example: <code>clip-path: circle(50%);</code> clips the element into a circular shape.",
          },
        ]
      }, {
        title: '33 Medium-Level CSS Interview Questions and Answers',
        fragment: 'medium-level',
        mcq: [
          {
            question: "What is the difference between <code>relative</code>, <code>absolute</code>, and <code>fixed</code> positioning?",
            answer:
              "<code>relative</code>: Positioned relative to its normal position.<br><code>absolute</code>: Positioned relative to the nearest positioned ancestor.<br><code>fixed</code>: Positioned relative to the viewport.",
          },
          {
            question: "What is the purpose of the <code>z-index</code> property?",
            answer:
              "The <code>z-index</code> property controls the stacking order of elements. Higher values appear on top of lower values. It works only on positioned elements (<code>relative</code>, <code>absolute</code>, <code>fixed</code>).",
          },
          {
            question: "What is the difference between <code>margin</code> and <code>padding</code>?",
            answer:
              "<code>margin</code>: Adds space outside an element's border.<br><code>padding</code>: Adds space inside an element's border, between the content and the border.",
          },
          {
            question: "What is the purpose of the <code>box-sizing</code> property?",
            answer:
              "The <code>box-sizing</code> property determines how the width and height of an element are calculated. <code>content-box</code> (default): Includes only the content. <code>border-box</code>: Includes padding and border in the element's dimensions.",
          },
          {
            question: "What is the difference between <code>display: none</code> and <code>visibility: hidden</code>?",
            answer:
              "<code>display: none</code>: Removes the element from the document flow, making it invisible and not occupying space.<br><code>visibility: hidden</code>: Hides the element but keeps its space in the layout.",
          },
          {
            question: "What is the purpose of the <code>flex-direction</code> property in Flexbox?",
            answer:
              "The <code>flex-direction</code> property defines the direction of flex items in a container. Values include <code>row</code>, <code>column</code>, <code>row-reverse</code>, and <code>column-reverse</code>.",
          },
          {
            question: "What is the difference between <code>justify-content</code> and <code>align-items</code> in Flexbox?",
            answer:
              "<code>justify-content</code>: Aligns items along the main axis (horizontal by default).<br><code>align-items</code>: Aligns items along the cross axis (vertical by default).",
          },
          {
            question: "What is the purpose of the <code>grid-template-columns</code> and <code>grid-template-rows</code> properties?",
            answer:
              "<code>grid-template-columns</code>: Defines the number and size of columns in a grid.<br><code>grid-template-rows</code>: Defines the number and size of rows in a grid.",
          },
          {
            question: "What is the difference between <code>grid-gap</code> and <code>gap</code>?",
            answer:
              "<code>grid-gap</code>: Specifically applies spacing between rows and columns in a grid layout.<br><code>gap</code>: A shorthand property that works for both Flexbox and Grid layouts.",
          },
          {
            question: "What is the purpose of the <code>position: sticky</code> property?",
            answer:
              "The <code>position: sticky</code> property toggles between <code>relative</code> and <code>fixed</code> positioning based on the user's scroll position.",
          },
          {
            question: "What is the difference between <code>transform</code> and <code>transition</code>?",
            answer:
              "<code>transform</code>: Applies transformations like scaling, rotating, or translating to an element.<br><code>transition</code>: Adds smooth animations when a property changes over time.",
          },
          {
            question: "What is the purpose of the <code>object-fit</code> property?",
            answer:
              "The <code>object-fit</code> property controls how an image or video fits within its container. Values include <code>cover</code>, <code>contain</code>, and <code>fill</code>.",
          },
          {
            question: "What is the difference between <code>opacity</code> and <code>rgba</code> for transparency?",
            answer:
              "<code>opacity</code>: Affects the entire element, including its children.<br><code>rgba</code>: Applies transparency only to the background color or specific properties.",
          },
          {
            question: "What is the purpose of the <code>clip-path</code> property?",
            answer:
              "The <code>clip-path</code> property clips an element to a specific shape, such as a circle, polygon, or ellipse.",
          },
          {
            question: "What is the difference between <code>float</code> and <code>flexbox</code> for layout?",
            answer:
              "<code>float</code>: Used for wrapping text around images or creating legacy layouts.<br><code>flexbox</code>: A modern layout system designed for flexible and responsive designs.",
          },
          {
            question: "What is the purpose of the <code>text-transform</code> property?",
            answer:
              "The <code>text-transform</code> property controls the capitalization of text. Values include <code>uppercase</code>, <code>lowercase</code>, and <code>capitalize</code>.",
          },
          {
            question: "What is the difference between <code>rem</code> and <code>em</code> units?",
            answer:
              "<code>rem</code>: Relative to the root (<code>&lt;html&gt;</code>) font size.<br><code>em</code>: Relative to the font size of the parent element.",
          },
          {
            question: "What is the purpose of the <code>white-space</code> property?",
            answer:
              "The <code>white-space</code> property controls how whitespace inside an element is handled. Values include <code>normal</code>, <code>nowrap</code>, <code>pre</code>, and <code>pre-wrap</code>.",
          },
          {
            question: "What is the difference between <code>inline</code>, <code>inline-block</code>, and <code>block</code> display values?",
            answer:
              "<code>inline</code>: Does not start on a new line and only takes up as much width as necessary.<br><code>inline-block</code>: Behaves like inline but allows setting width and height.<br><code>block</code>: Starts on a new line and takes up the full width available.",
          },
          {
            question: "What is the purpose of the <code>box-shadow</code> property?",
            answer:
              "The <code>box-shadow</code> property adds shadow effects around an element's frame. Example: <code>box-shadow: 5px 5px 10px gray;</code>.",
          },
          {
            question: "What is the difference between <code>nth-child</code> and <code>nth-of-type</code> selectors?",
            answer:
              "<code>nth-child</code>: Selects elements based on their position among all siblings.<br><code>nth-of-type</code>: Selects elements based on their position among siblings of the same type.",
          },
          {
            question: "What is the purpose of the <code>line-height</code> property?",
            answer:
              "The <code>line-height</code> property sets the height of a line of text. Example: <code>line-height: 1.5;</code> increases spacing between lines.",
          },
          {
            question: "What is the difference between <code>letter-spacing</code> and <code>word-spacing</code>?",
            answer:
              "<code>letter-spacing</code>: Adjusts the spacing between characters.<br><code>word-spacing</code>: Adjusts the spacing between words.",
          },
          {
            question: "What is the purpose of the <code>overflow-wrap</code> property?",
            answer:
              "The <code>overflow-wrap</code> property specifies whether long words should break and wrap onto the next line. Example: <code>overflow-wrap: break-word;</code>.",
          },
          {
            question: "What is the difference between <code>min-width</code> and <code>max-width</code>?",
            answer:
              "<code>min-width</code>: Sets the minimum width of an element.<br><code>max-width</code>: Sets the maximum width of an element.",
          },
          {
            question: "What is the purpose of the <code>backdrop-filter</code> property?",
            answer:
              "The <code>backdrop-filter</code> property applies graphical effects like blurring or color shifting to the area behind an element.",
          },
          {
            question: "What is the difference between <code>hover</code> and <code>focus</code> pseudo-classes?",
            answer:
              "<code>hover</code>: Applies styles when the user hovers over an element.<br><code>focus</code>: Applies styles when an element gains focus (e.g., via keyboard or click).",
          },
          {
            question: "What is the purpose of the <code>calc()</code> function?",
            answer:
              "The <code>calc()</code> function performs calculations to determine CSS property values. Example: <code>width: calc(100% - 20px);</code>.",
          },
          {
            question: "What is the difference between <code>grid-column</code> and <code>grid-row</code>?",
            answer:
              "<code>grid-column</code>: Defines the start and end positions of an item along the column axis.<br><code>grid-row</code>: Defines the start and end positions of an item along the row axis.",
          },
          {
            question: "What is the purpose of the <code>filter</code> property?",
            answer:
              "The <code>filter</code> property applies graphical effects like blurring, brightness, or contrast to an element. Example: <code>filter: blur(5px);</code>.",
          },
          {
            question: "What is the difference between <code>aspect-ratio</code> and manually setting width/height?",
            answer:
              "<code>aspect-ratio</code>: Maintains a consistent ratio between width and height automatically.<br>Manually setting width/height: Requires explicit values and may break responsiveness.",
          },
          {
            question: "What is the purpose of the <code>scroll-behavior</code> property?",
            answer:
              "The <code>scroll-behavior</code> property enables smooth scrolling behavior. Example: <code>scroll-behavior: smooth;</code>.",
          },
          {
            question: "What is the difference between <code>prefers-color-scheme</code> and <code>prefers-reduced-motion</code> media queries?",
            answer:
              "<code>prefers-color-scheme</code>: Detects if users prefer light or dark themes.<br><code>prefers-reduced-motion</code>: Detects if users prefer reduced motion animations.",
          },
        ]
      }, {
        title: '34 Hard-Level CSS Interview Questions and Answers',
        fragment: "hard-level",
        mcq: [
          {
            question: "What is the difference between <code>em</code>, <code>rem</code>, and <code>px</code> units?",
            answer:
              "<code>px</code>: Absolute unit, fixed size.&lt;br&gt;<code>em</code>: Relative to the font size of the parent element.&lt;br&gt;<code>rem</code>: Relative to the root (<code>&lt;html&gt;</code>) font size.",
          },
          {
            question: "How does the CSS cascade work, and what are the rules for specificity?",
            answer:
              "The CSS cascade determines which styles are applied when multiple rules conflict. Specificity is calculated based on selectors: inline styles &gt; IDs &gt; classes/attributes/pseudo-classes &gt; elements/pseudo-elements.",
          },
          {
            question: "What is the difference between <code>position: sticky</code> and <code>position: fixed</code>?",
            answer:
              "<code>sticky</code>: Toggles between relative and fixed positioning based on scroll position.&lt;br&gt;<code>fixed</code>: Always positioned relative to the viewport.",
          },
          {
            question: "What is the purpose of the <code>will-change</code> property?",
            answer:
              "The <code>will-change</code> property hints to the browser about upcoming changes to an element, allowing it to optimize rendering. Example: <code>will-change: transform;</code>.",
          },
          {
            question: "What is the difference between <code>flexbox</code> and <code>grid</code> layouts?",
            answer:
              "<code>flexbox</code>: Designed for one-dimensional layouts (row or column).&lt;br&gt;<code>grid</code>: Designed for two-dimensional layouts (rows and columns).",
          },
          {
            question: "What is the purpose of the <code>contain</code> property?",
            answer:
              "The <code>contain</code> property optimizes rendering by isolating parts of the DOM. Values include <code>layout</code>, <code>paint</code>, and <code>size</code>, improving performance for large applications.",
          },
          {
            question: "What is the difference between <code>transform</code> and <code>translate</code>?",
            answer:
              "<code>transform</code>: A property that applies transformations like scaling, rotating, or skewing.&lt;br&gt;<code>translate</code>: A function within <code>transform</code> that moves an element along the X and Y axes.",
          },
          {
            question: "What is the purpose of the <code>backface-visibility</code> property?",
            answer:
              "The <code>backface-visibility</code> property determines whether the back face of an element is visible during 3D transformations. Values include <code>visible</code> and <code>hidden</code>.",
          },
          {
            question: "What is the difference between <code>clip-path</code> and <code>mask</code>?",
            answer:
              "<code>clip-path</code>: Clips an element to a specific shape.&lt;br&gt;<code>mask</code>: Applies transparency effects using images or gradients.",
          },
          {
            question: "What is the purpose of the <code>filter</code> property?",
            answer:
              "The <code>filter</code> property applies graphical effects like blurring, brightness, or contrast to an element. Example: <code>filter: blur(5px);</code>.",
          },
          {
            question: "What is the difference between <code>min-content</code> and <code>max-content</code> in CSS sizing?",
            answer:
              "<code>min-content</code>: Shrinks the element to fit its smallest content.&lt;br&gt;<code>max-content</code>: Expands the element to fit its largest content.",
          },
          {
            question: "What is the purpose of the <code>scroll-snap-type</code> property?",
            answer:
              "The <code>scroll-snap-type</code> property enables scroll snapping, aligning content to specific points during scrolling. Example: <code>scroll-snap-type: y mandatory;</code>.",
          },
          {
            question: "What is the difference between <code>aspect-ratio</code> and manually setting width/height?",
            answer:
              "<code>aspect-ratio</code>: Maintains a consistent ratio between width and height automatically.&lt;br&gt;Manually setting width/height: Requires explicit values and may break responsiveness.",
          },
          {
            question: "What is the purpose of the <code>mix-blend-mode</code> property?",
            answer:
              "The <code>mix-blend-mode</code> property defines how an element blends with its background. Common values include <code>multiply</code>, <code>screen</code>, and <code>overlay</code>.",
          },
          {
            question: "What is the difference between <code>currentColor</code> and explicitly defining colors?",
            answer:
              "<code>currentColor</code>: Uses the computed value of the <code>color</code> property.&lt;br&gt;Explicit colors: Define specific color values (e.g., <code>#fff</code>, <code>rgb()</code>).",
          },
          {
            question: "What is the purpose of the <code>object-fit</code> property?",
            answer:
              "The <code>object-fit</code> property controls how an image or video fits within its container. Values include <code>cover</code>, <code>contain</code>, and <code>fill</code>.",
          },
          {
            question: "What is the difference between <code>outline</code> and <code>border</code>?",
            answer:
              "<code>outline</code>: Draws a line outside the element's border, not affecting layout.&lt;br&gt;<code>border</code>: Adds a border inside the element's box, affecting layout.",
          },
          {
            question: "What is the purpose of the <code>content-visibility</code> property?",
            answer:
              "The <code>content-visibility</code> property improves performance by skipping rendering of off-screen content. Example: <code>content-visibility: auto;</code>.",
          },
          {
            question: "What is the difference between <code>z-index</code> stacking contexts and normal stacking?",
            answer:
              "A stacking context groups elements together, and their <code>z-index</code> values only apply within that context. Normal stacking applies globally unless a new stacking context is created.",
          },
          {
            question: "What is the purpose of the <code>overscroll-behavior</code> property?",
            answer:
              "The <code>overscroll-behavior</code> property controls the behavior when scrolling past the boundaries of a container. Values include <code>auto</code>, <code>contain</code>, and <code>none</code>.",
          },
          {
            question: "What is the difference between <code>prefers-reduced-motion</code> and <code>prefers-color-scheme</code> media queries?",
            answer:
              "<code>prefers-reduced-motion</code>: Detects if users prefer reduced motion animations.&lt;br&gt;<code>prefers-color-scheme</code>: Detects if users prefer light or dark themes.",
          },
          {
            question: "What is the purpose of the <code>initial-letter</code> property?",
            answer:
              "The <code>initial-letter</code> property styles the first letter of a block of text, often used for drop caps. Example: <code>initial-letter: 3;</code>.",
          },
          {
            question: "What is the difference between <code>grid-template-areas</code> and <code>grid-template-columns</code>?",
            answer:
              "<code>grid-template-areas</code>: Defines named grid areas for layout.&lt;br&gt;<code>grid-template-columns</code>: Specifies the size and number of columns in the grid.",
          },
          {
            question: "What is the purpose of the <code>shape-outside</code> property?",
            answer:
              "The <code>shape-outside</code> property allows text to wrap around custom shapes (e.g., circles, polygons) instead of rectangular boxes.",
          },
          {
            question: "What is the difference between <code>all: unset</code> and <code>all: initial</code>?",
            answer:
              "<code>all: unset</code>: Resets properties to their inherited or default values.&lt;br&gt;<code>all: initial</code>: Resets all properties to their initial (default) values, ignoring inheritance.",
          },
          {
            question: "What is the purpose of the <code>counter-reset</code> and <code>counter-increment</code> properties?",
            answer:
              "<code>counter-reset</code>: Initializes a counter.&lt;br&gt;<code>counter-increment</code>: Increments a counter, often used for numbering sections or lists.",
          },
          {
            question: "What is the difference between <code>calc()</code> and <code>clamp()</code>?",
            answer:
              "<code>calc()</code>: Performs calculations for CSS values.&lt;br&gt;<code>clamp()</code>: Sets a value within a range, providing minimum, preferred, and maximum values.",
          },
          {
            question: "What is the purpose of the <code>text-emphasis</code> property?",
            answer:
              "The <code>text-emphasis</code> property adds emphasis marks to text, such as dots or circles, commonly used in East Asian typography.",
          },
          {
            question: "What is the difference between <code>display: contents</code> and <code>visibility: hidden</code>?",
            answer:
              "<code>display: contents</code>: Removes the element's box but keeps its children in the layout.&lt;br&gt;<code>visibility: hidden</code>: Hides the element but keeps its space in the layout.",
          },
          {
            question: "What is the purpose of the <code>place-items</code> shorthand property?",
            answer:
              "The <code>place-items</code> property combines <code>align-items</code> and <code>justify-items</code> for aligning items in both axes in Flexbox or Grid layouts.",
          },
          {
            question: "What is the difference between <code>gap</code> and <code>margin</code> in CSS Grid/Flexbox?",
            answer:
              "<code>gap</code>: Adds spacing between rows and columns in Grid/Flexbox.&lt;br&gt;<code>margin</code>: Adds spacing around individual elements, including outside the container.",
          },
          {
            question: "What is the purpose of the <code>touch-action</code> property?",
            answer:
              "The <code>touch-action</code> property controls how touch gestures (e.g., panning, zooming) are handled by the browser. Example: <code>touch-action: none;</code> disables touch gestures.",
          },
          {
            question: "What is the difference between <code>resize</code> and <code>overflow</code>?",
            answer:
              "<code>resize</code>: Allows users to resize an element (e.g., textarea).&lt;br&gt;<code>overflow</code>: Controls how content behaves when it overflows the element's box.",
          },
          {
            question: "What is the purpose of the <code>scrollbar-gutter</code> property?",
            answer:
              "The <code>scrollbar-gutter</code> property reserves space for scrollbars, preventing layout shifts when they appear or disappear.",
          },
        ]
      }
    ]
  }, {
    slug: 'reactjs-interview-questions',
    mcqs: [
      {
        title: '33 Easy-Level ReactJs Interview Questions and Answers',
        fragment: 'easy-level',
        mcq: [
          {
            question: "What is React?",
            answer:
              "React is a JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components and manage the state efficiently.",
          },
          {
            question: "What are the main features of React?",
            answer:
              "Key features include: <code>Component-based architecture</code>, <code>Virtual DOM</code> for efficient updates, <code>One-way data binding</code>, and <code>JSX</code> syntax for writing HTML-like code in JavaScript.",
          },
          {
            question: "What is JSX?",
            answer:
              "JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code in React. It gets compiled into <code>React.createElement()</code> calls.",
          },
          {
            question: "What is the Virtual DOM?",
            answer:
              "The Virtual DOM is a lightweight copy of the real DOM. React uses it to improve performance by minimizing direct manipulations of the real DOM through efficient diffing and reconciliation.",
          },
          {
            question: "What is a React component?",
            answer:
              "A React component is a reusable piece of UI that can be either a function or a class. Components encapsulate logic and rendering, making it easier to build complex UIs.",
          },
          {
            question: "What is the difference between functional and class components?",
            answer:
              "Functional components are plain JavaScript functions that return JSX. Class components are ES6 classes that extend <code>React.Component</code> and have additional features like lifecycle methods and state.",
          },
          {
            question: "What is props in React?",
            answer:
              "Props (short for properties) are read-only inputs passed to components. They allow parent components to pass data to child components, making them dynamic and reusable.",
          },
          {
            question: "What is state in React?",
            answer:
              "State is an object that holds data specific to a component. Unlike props, state is mutable and managed within the component using <code>useState</code> (functional) or <code>this.setState</code> (class).",
          },
          {
            question: "How do you create a functional component in React?",
            answer:
              "Example:<br><pre class='language-javascript'><code>function MyComponent(props) {\n  return <div>Hello, {props.name}</div>;\n}</code></pre>",
          },
          {
            question: "What is the purpose of the <code>key</code> prop in React?",
            answer:
              "The <code>key</code> prop helps React identify which items in a list have changed, been added, or removed. It improves performance during re-renders.",
          },
          {
            question: "What is the difference between state and props?",
            answer:
              "Props are immutable and passed from parent to child. State is mutable and managed within the component itself.",
          },
          {
            question: "What is the purpose of the <code>useState</code> hook?",
            answer:
              "The <code>useState</code> hook allows functional components to manage state. Example:<br><pre><code class='language-javascript'>const [count, setCount] = useState(0);</code></pre>",
          },
          {
            question: "What is the purpose of the <code>useEffect</code> hook?",
            answer:
              "The <code>useEffect</code> hook manages side effects in functional components, such as fetching data, subscribing to events, or manually changing the DOM.",
          },
          {
            question: "What are React hooks?",
            answer:
              "Hooks are functions introduced in React 16.8 that let you use state and other React features without writing class components. Examples include <code>useState</code>, <code>useEffect</code>, and <code>useContext</code>.",
          },
          {
            question: "What is conditional rendering in React?",
            answer:
              "Conditional rendering allows you to render different components or elements based on conditions. Example:<br><pre><code class='language-javascript'>{isLoggedIn ? &lt;Welcome /&gt; : &lt;Login /&gt;}</code></pre>",
          },
          {
            question: "What is the purpose of the <code>children</code> prop?",
            answer:
              "The <code>children</code> prop allows you to pass components or elements as content between the opening and closing tags of another component.",
          },
          {
            question: "What is the purpose of the <code>Fragment</code> component?",
            answer:
              "<code>Fragment</code> lets you group multiple children without adding extra nodes to the DOM. Example:<br><pre><code class='language-javascript'>&lt;React.Fragment&gt; &lt;p&gt;Text&lt;/p&gt; &lt;/React.Fragment&gt;</code></pre>",
          },
          {
            question: "What is the difference between controlled and uncontrolled components?",
            answer:
              "Controlled components manage their state via React (using props and callbacks). Uncontrolled components rely on the DOM to manage their state (e.g., using refs).",
          },
          {
            question: "What is the purpose of the <code>ref</code> attribute?",
            answer:
              "The <code>ref</code> attribute provides a way to directly access DOM elements or React components. It is often used for managing focus, text selection, or integrating with third-party libraries.",
          },
          {
            question: "What is the purpose of the <code>defaultProps</code> property?",
            answer:
              "<code>defaultProps</code> defines default values for props in a component. Example:<br><pre><code class='language-javascript'>MyComponent.defaultProps = { name: 'Guest' };</code></pre>",
          },
          {
            question: "What is the purpose of the <code>PropTypes</code> library?",
            answer:
              "<code>PropTypes</code> is used to validate the types of props passed to a component. It helps catch bugs caused by incorrect data types.",
          },
          {
            question: "What is the purpose of the <code>memo</code> function?",
            answer:
              "<code>React.memo</code> optimizes functional components by preventing unnecessary re-renders when props haven't changed.",
          },
          {
            question: "What is the purpose of the <code>context</code> API?",
            answer:
              "The Context API allows you to share global data (e.g., themes, user authentication) across components without passing props manually at every level.",
          },
          {
            question: "What is the purpose of the <code>lazy</code> and <code>Suspense</code> APIs?",
            answer:
              "<code>React.lazy</code> enables code-splitting by dynamically importing components. <code>Suspense</code> handles loading states while the component is being loaded.",
          },
          {
            question: "What is the purpose of the <code>StrictMode</code> component?",
            answer:
              "<code>StrictMode</code> highlights potential problems in an application by enabling additional checks and warnings during development.",
          },
          {
            question: "What is the purpose of the <code>createPortal</code> function?",
            answer:
              "<code>ReactDOM.createPortal</code> renders children into a DOM node outside the parent component's hierarchy, useful for modals or tooltips.",
          },
          {
            question: "What is the purpose of the <code>forwardRef</code> function?",
            answer:
              "<code>React.forwardRef</code> forwards refs from a parent component to a child component, enabling direct access to child DOM elements.",
          },
          {
            question: "What is the purpose of the <code>useReducer</code> hook?",
            answer:
              "<code>useReducer</code> is an alternative to <code>useState</code> for managing complex state logic. It works similarly to Redux.",
          },
          {
            question: "What is the purpose of the <code>useCallback</code> hook?",
            answer:
              "<code>useCallback</code> memoizes callback functions to prevent unnecessary re-creations during re-renders.",
          },
          {
            question: "What is the purpose of the <code>useMemo</code> hook?",
            answer:
              "<code>useMemo</code> memoizes computed values to optimize performance by avoiding expensive recalculations.",
          },
          {
            question: "What is the purpose of the <code>useLayoutEffect</code> hook?",
            answer:
              "<code>useLayoutEffect</code> runs synchronously after DOM mutations but before the browser paints. It is similar to <code>useEffect</code> but for layout-related tasks.",
          },
          {
            question: "What is the purpose of the <code>useImperativeHandle</code> hook?",
            answer:
              "<code>useImperativeHandle</code> customizes the instance value exposed when using <code>ref</code> with a child component.",
          },
          {
            question: "What is the purpose of the <code>Profiler</code> component?",
            answer:
              "<code>Profiler</code> measures how often a component renders and the cost of rendering. It helps identify performance bottlenecks.",
          },
        ]
      }, {
        title: '33 Medium-Level ReactJs Interview Questions and Answers',
        fragment: 'medium-level',
        mcq: [
          {
            question: "What is the difference between <code>useEffect</code> with an empty dependency array and without one?",
            answer:
              "An empty dependency array (<code>[]</code>) runs the effect only once (on mount and unmount). Without a dependency array, the effect runs after every render.",
          },
          {
            question: "What is the purpose of the <code>React.memo</code> function?",
            answer:
              "<code>React.memo</code> optimizes functional components by preventing unnecessary re-renders when props haven't changed. It performs a shallow comparison of props by default.",
          },
          {
            question: "How do you handle forms in React?",
            answer:
              "Forms can be handled using controlled components (state manages input values) or uncontrolled components (refs access DOM values). Controlled components are preferred for better control over form data.",
          },
          {
            question: "What is the purpose of the <code>useReducer</code> hook?",
            answer:
              "<code>useReducer</code> is used for managing complex state logic. It takes a reducer function and an initial state, returning the current state and a dispatch method to update it.",
          },
          {
            question: "What is the difference between <code>useState</code> and <code>useReducer</code>?",
            answer:
              "<code>useState</code> is simpler and suitable for managing simple state. <code>useReducer</code> is better for complex state logic with multiple sub-values or when state transitions depend on previous state.",
          },
          {
            question: "What is the purpose of the <code>Context API</code>?",
            answer:
              "The Context API allows you to share global data (e.g., themes, user authentication) across components without passing props manually at every level. Example:<br><pre><code class='language-javascript'>const ThemeContext = React.createContext();</code></pre>",
          },
          {
            question: "What is the difference between <code>useCallback</code> and <code>useMemo</code>?",
            answer:
              "<code>useCallback</code> memoizes functions to prevent unnecessary re-creations. <code>useMemo</code> memoizes computed values to avoid expensive recalculations.",
          },
          {
            question: "What is the purpose of the <code>React.StrictMode</code> component?",
            answer:
              "<code>StrictMode</code> highlights potential problems in an application by enabling additional checks and warnings during development, such as detecting unsafe lifecycle methods.",
          },
          {
            question: "What is the difference between <code>useEffect</code> and <code>useLayoutEffect</code>?",
            answer:
              "<code>useEffect</code> runs asynchronously after the browser paints. <code>useLayoutEffect</code> runs synchronously after DOM mutations but before the browser paints, making it suitable for layout-related tasks.",
          },
          {
            question: "What is the purpose of the <code>React.Fragment</code> component?",
            answer:
              "<code>Fragment</code> lets you group multiple children without adding extra nodes to the DOM. Example:<br><pre><code class='language-javascript'><React.Fragment><p>Text</p></React.Fragment></code></pre>",
          },
          {
            question: "What is the purpose of the <code>React.lazy</code> and <code>Suspense</code> APIs?",
            answer:
              "<code>React.lazy</code> enables code-splitting by dynamically importing components. <code>Suspense</code> handles loading states while the component is being loaded. Example:<br><pre><code class='language-javascript'>const LazyComponent = React.lazy(() => import('./Component'));</code></pre>",
          },
          {
            question: "What is the purpose of the <code>React.PureComponent</code> class?",
            answer:
              "<code>PureComponent</code> performs a shallow comparison of props and state to determine if a re-render is necessary, improving performance for class components.",
          },
          {
            question: "What is the purpose of the <code>React.forwardRef</code> function?",
            answer:
              "<code>React.forwardRef</code> forwards refs from a parent component to a child component, enabling direct access to child DOM elements.",
          },
          {
            question: "What is the purpose of the <code>React.createPortal</code> function?",
            answer:
              "<code>ReactDOM.createPortal</code> renders children into a DOM node outside the parent component's hierarchy, useful for modals or tooltips.",
          },
          {
            question: "What is the difference between <code>componentDidMount</code> and <code>useEffect</code>?",
            answer:
              "<code>componentDidMount</code> is a lifecycle method in class components that runs after the component mounts. <code>useEffect</code> with an empty dependency array serves a similar purpose in functional components.",
          },
          {
            question: "What is the purpose of the <code>React.Profiler</code> component?",
            answer:
              "<code>Profiler</code> measures how often a component renders and the cost of rendering. It helps identify performance bottlenecks.",
          },
          {
            question: "What is the purpose of the <code>React.Children</code> API?",
            answer:
              "<code>React.Children</code> provides utilities for working with the <code>children</code> prop, such as <code>React.Children.map</code> and <code>React.Children.toArray</code>.",
          },
          {
            question: "What is the purpose of the <code>React.cloneElement</code> function?",
            answer:
              "<code>React.cloneElement</code> clones and returns a new React element with additional props or overridden props.",
          },
          {
            question: "What is the difference between <code>key</code> and <code>ref</code> in React?",
            answer:
              "<code>key</code> helps React identify which items in a list have changed. <code>ref</code> provides direct access to DOM elements or React components.",
          },
          {
            question: "What is the purpose of the <code>React.SuspenseList</code> component?",
            answer:
              "<code>SuspenseList</code> coordinates the order and visibility of multiple <code>Suspense</code> components, useful for managing loading states in lists.",
          },
          {
            question: "What is the purpose of the <code>React.useImperativeHandle</code> hook?",
            answer:
              "<code>useImperativeHandle</code> customizes the instance value exposed when using <code>ref</code> with a child component.",
          },
          {
            question: "What is the purpose of the <code>React.unstable_batchedUpdates</code> API?",
            answer:
              "<code>unstable_batchedUpdates</code> batches multiple state updates into a single re-render, improving performance in certain scenarios.",
          },
          {
            question: "What is the purpose of the <code>React.startTransition</code> API?",
            answer:
              "<code>startTransition</code> marks updates as non-urgent, allowing React to prioritize urgent updates (e.g., user input) over less urgent ones (e.g., background data fetching).",
          },
          {
            question: "What is the purpose of the <code>React.useDeferredValue</code> hook?",
            answer:
              "<code>useDeferredValue</code> defers updating a value until more urgent updates are complete, improving performance for non-critical updates.",
          },
          {
            question: "What is the purpose of the <code>React.useId</code> hook?",
            answer:
              "<code>useId</code> generates unique IDs for accessibility attributes, ensuring consistency across server and client rendering.",
          },
          {
            question: "What is the purpose of the <code>React.useSyncExternalStore</code> hook?",
            answer:
              "<code>useSyncExternalStore</code> synchronizes external store subscriptions with React's rendering cycle, useful for integrating third-party libraries.",
          },
          {
            question: "What is the purpose of the <code>React.useInsertionEffect</code> hook?",
            answer:
              "<code>useInsertionEffect</code> runs before layout effects and after DOM mutations, useful for injecting styles or scripts into the DOM.",
          },
          {
            question: "What is the purpose of the <code>React.unstable_useCacheRefresh</code> hook?",
            answer:
              "<code>unstable_useCacheRefresh</code> refreshes cached data in server components, allowing developers to invalidate and re-fetch data.",
          },
          {
            question: "What is the purpose of the <code>React.unstable_useOpaqueIdentifier</code> hook?",
            answer:
              "<code>unstable_useOpaqueIdentifier</code> generates opaque identifiers for accessibility attributes, though it is deprecated in favor of <code>useId</code>.",
          },
          {
            question: "What is the purpose of the <code>React.unstable_getCacheForType</code> API?",
            answer:
              "<code>unstable_getCacheForType</code> retrieves or creates a cache for a specific type, useful for server-side rendering optimizations.",
          },
          {
            question: "What is the purpose of the <code>React.unstable_useMutableSource</code> hook?",
            answer:
              "<code>unstable_useMutableSource</code> subscribes to external mutable sources, allowing React to track changes and trigger re-renders.",
          },
        ]
      }, {
        title: '34 Hard-Level ReactJs Interview Questions and Answers',
        fragment: "hard-level",
        mcq: [
          {
            question: "What is the difference between <code>React.memo</code> and <code>PureComponent</code>?",
            answer:
              "<code>React.memo</code> is used for functional components and performs a shallow comparison of props. <code>PureComponent</code> is used for class components and performs a shallow comparison of both props and state.",
          },
          {
            question: "How does React handle reconciliation in the Virtual DOM?",
            answer:
              "React uses a diffing algorithm to compare the current Virtual DOM with the previous one. It identifies changes and updates only the parts of the real DOM that have changed, minimizing costly DOM operations.",
          },
          {
            question: "What is the purpose of the <code>React.unstable_batchedUpdates</code> API?",
            answer:
              "<code>unstable_batchedUpdates</code> batches multiple state updates into a single re-render, improving performance by reducing unnecessary renders during synchronous operations.",
          },
          {
            question: "What are the trade-offs of using <code>React.lazy</code> and <code>Suspense</code> for code-splitting?",
            answer:
              "Advantages: Reduces initial bundle size and improves load time. Disadvantages: Adds complexity to error handling and requires fallback UIs for loading states.",
          },
          {
            question: "What is the difference between <code>useLayoutEffect</code> and <code>componentDidMount</code>?",
            answer:
              "<code>useLayoutEffect</code> runs synchronously after DOM mutations but before the browser paints. <code>componentDidMount</code> runs asynchronously after the component mounts and the browser paints.",
          },
          {
            question: "What is the purpose of the <code>React.Profiler</code> component?",
            answer:
              "<code>Profiler</code> measures how often a component renders and the cost of rendering. It helps identify performance bottlenecks by providing detailed timing information.",
          },
          {
            question: "What is the difference between <code>useCallback</code> and <code>memoization</code> libraries like Lodash's <code>memoize</code>?",
            answer:
              "<code>useCallback</code> memoizes functions specifically for React's dependency system. Lodash's <code>memoize</code> caches function results based on input arguments, independent of React.",
          },
          {
            question: "What is the purpose of the <code>React.unstable_useCacheRefresh</code> hook?",
            answer:
              "<code>unstable_useCacheRefresh</code> refreshes cached data in server components, allowing developers to invalidate and re-fetch data when necessary.",
          },
          {
            question: "What is the difference between <code>React.createContext</code> and third-party state management libraries like Redux?",
            answer:
              "<code>React.createContext</code> provides a built-in way to share global state across components. Redux offers more advanced features like middleware, dev tools, and centralized state management.",
          },
          {
            question: "What is the purpose of the <code>React.useDeferredValue</code> hook?",
            answer:
              "<code>useDeferredValue</code> defers updating a value until more urgent updates are complete, improving performance for non-critical updates like background data fetching.",
          },
          {
            question: "What is the difference between <code>React.startTransition</code> and <code>React.useDeferredValue</code>?",
            answer:
              "<code>startTransition</code> marks updates as non-urgent, allowing React to prioritize urgent updates. <code>useDeferredValue</code> delays updating a specific value until urgent updates are complete.",
          },
          {
            question: "What is the purpose of the <code>React.unstable_useOpaqueIdentifier</code> hook?",
            answer:
              "<code>unstable_useOpaqueIdentifier</code> generates opaque identifiers for accessibility attributes, though it is deprecated in favor of <code>useId</code>.",
          },
          {
            question: "What is the difference between <code>React.cloneElement</code> and <code>React.Children.map</code>?",
            answer:
              "<code>React.cloneElement</code> clones and returns a new React element with additional props. <code>React.Children.map</code> iterates over children and applies a function to each child.",
          },
          {
            question: "What is the purpose of the <code>React.unstable_getCacheForType</code> API?",
            answer:
              "<code>unstable_getCacheForType</code> retrieves or creates a cache for a specific type, useful for server-side rendering optimizations.",
          },
          {
            question: "What is the difference between <code>React.Suspense</code> and <code>Error Boundaries</code>?",
            answer:
              "<code>Suspense</code> handles loading states for asynchronous operations like lazy loading. Error Boundaries catch JavaScript errors during rendering and provide fallback UIs.",
          },
          {
            question: "What is the purpose of the <code>React.unstable_useMutableSource</code> hook?",
            answer:
              "<code>unstable_useMutableSource</code> subscribes to external mutable sources, allowing React to track changes and trigger re-renders when the source updates.",
          },
          {
            question: "What is the difference between <code>React.Fragment</code> and <code>div</code> wrapping?",
            answer:
              "<code>Fragment</code> groups elements without adding extra nodes to the DOM. <code>div</code> adds an additional DOM node, which can affect layout and styling.",
          },
          {
            question: "What is the purpose of the <code>React.useInsertionEffect</code> hook?",
            answer:
              "<code>useInsertionEffect</code> runs before layout effects and after DOM mutations, useful for injecting styles or scripts into the DOM without causing layout thrashing.",
          },
          {
            question: "What is the difference between <code>React.StrictMode</code> and <code>Error Boundaries</code>?",
            answer:
              "<code>StrictMode</code> highlights potential problems during development by enabling additional checks. Error Boundaries catch runtime errors in components and provide fallback UIs.",
          },
          {
            question: "What is the purpose of the <code>React.unstable_useSyncExternalStore</code> hook?",
            answer:
              "<code>useSyncExternalStore</code> synchronizes external store subscriptions with React's rendering cycle, useful for integrating third-party libraries like Redux.",
          },
          {
            question: "What is the difference between <code>React.useReducer</code> and Redux?",
            answer:
              "<code>useReducer</code> manages local state within a component. Redux provides centralized state management for the entire application, with middleware and dev tools support.",
          },
          {
            question: "What is the purpose of the <code>React.useId</code> hook?",
            answer:
              "<code>useId</code> generates unique IDs for accessibility attributes, ensuring consistency across server and client rendering.",
          },
          {
            question: "What is the difference between <code>React.PureComponent</code> and <code>React.memo</code>?",
            answer:
              "<code>PureComponent</code> is for class components and performs shallow comparisons of props and state. <code>React.memo</code> is for functional components and performs shallow comparisons of props.",
          },
          {
            question: "What is the purpose of the <code>React.unstable_SuspenseList</code> component?",
            answer:
              "<code>SuspenseList</code> coordinates the order and visibility of multiple <code>Suspense</code> components, useful for managing loading states in lists.",
          },
          {
            question: "What is the difference between <code>React.useImperativeHandle</code> and <code>refs</code>?",
            answer:
              "<code>useImperativeHandle</code> customizes the instance value exposed when using <code>ref</code> with a child component. Regular <code>refs</code> provide direct access to DOM elements or React components.",
          },
          {
            question: "What is the purpose of the <code>React.unstable_createResource</code> API?",
            answer:
              "<code>unstable_createResource</code> creates resources for server components, allowing developers to fetch and cache data efficiently.",
          },
          {
            question: "What is the difference between <code>React.useLayoutEffect</code> and <code>useEffect</code>?",
            answer:
              "<code>useLayoutEffect</code> runs synchronously after DOM mutations but before the browser paints. <code>useEffect</code> runs asynchronously after the browser paints.",
          },
          {
            question: "What is the purpose of the <code>React.unstable_useTransition</code> hook?",
            answer:
              "<code>useTransition</code> allows developers to mark updates as transitions, enabling concurrent rendering and prioritizing urgent updates.",
          },
          {
            question: "What is the difference between <code>React.forwardRef</code> and <code>refs</code>?",
            answer:
              "<code>forwardRef</code> forwards refs from a parent component to a child component. Regular <code>refs</code> provide direct access to DOM elements or React components.",
          },
          {
            question: "What is the purpose of the <code>React.unstable_useOpaqueIdentifier</code> hook?",
            answer:
              "<code>unstable_useOpaqueIdentifier</code> generates opaque identifiers for accessibility attributes, though it is deprecated in favor of <code>useId</code>.",
          },
          {
            question: "What is the difference between <code>React.Children.toArray</code> and <code>React.Children.map</code>?",
            answer:
              "<code>React.Children.toArray</code> converts children to an array, preserving keys. <code>React.Children.map</code> iterates over children and applies a function to each child.",
          },
          {
            question: "What is the purpose of the <code>React.unstable_useCacheRefresh</code> hook?",
            answer:
              "<code>unstable_useCacheRefresh</code> refreshes cached data in server components, allowing developers to invalidate and re-fetch data when necessary.",
          },
        ]
      }
    ]
  }
];

export default InterviewQuestions;
