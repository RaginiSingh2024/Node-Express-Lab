
src > JS utildemo.js > ...

//use cases for using the util module in Node.js
//Debugging and Inspection:
//util.inspect(object [, options]): Converts objects into a string representation,
// useful for debugging.
import util from 'util';

import fs from 'fs';

const obj = { name: 'Node.js', version: '18.0', features: {esm: true, cjs: true, worker_threads: true } }; console.log(util.inspect(obj, { showHidden: true, depth: Infinity }));
 //Formatting Strings: