
//using url module in Node.js
/*
I
The url module in Node.js provides utilities for URL resolution and parsing. It allows you
Here are some common use cases and examples of how to use the url module in Node.js:
1. Importing the url Module
To use the url module, you first need to import it into your Node.js application. Javascriptconst url = require('url');
*/
import { URL } from 'url';
/*
IGNORE

console.log('Full URL:', fullUrl); // https://example.com/api/data?name=John&age=30
//handle URL encoding/decoding
//example:
const encodedUrl = encodeURIComponent('https://example.com/path with spaces'); console.log('Encoded URL:', encodedUrl); // https%3A%2F%2Fexample.com%2Fpath%20with%20spac
const decodedUrl = decodeURIComponent(encodedUrl);
console.log('Decoded URL:', decodedUrl); // https://example.com/path with spaces
/*
In summary, the url modu inde.js is essential for working with URLs, allowing you to */
// Manipulating Query Parameters with URLSearchParams
//example:

const urlWithParams = new URL('https://example.com/path?name=John&age=30'); urlWithParams.searchParams.append('city', 'NewYork');
console.log('Updated URL:', urlWithParams.toString()); // https://example.com/path?name=Jo
urlWithParams.searchParams.set('name', 'Jane'); I
console.log('Modified URL:', urlWithParams.toString()); // https://example.com/path?name=J
urlWithParams.searchParams.delete('age');
console.log('Final URL:', urlWithParams.toString()); // https://example.com/path?name=Jane&city=NewYork
/*
In summary, the url module in Node.js is essential for working with URLs, allowing you to parse, format, and manipulate them effectively.
*/ parse, format, and manipulate them effectively.  
