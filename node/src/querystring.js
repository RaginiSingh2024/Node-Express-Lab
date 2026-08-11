
const nestedParams = { user: { name: 'John', age: 30 }, city: 'New York' }; const flatParams = {
};
'user [name]': nestedParams.user.name,
'user [age]': nestedParams.user.age,
city: nestedParams.city
const nestedQueryString = querystring.stringify(flatParams); console.log('Nested Query String:', nestedQueryString); // Output: user%5Bname%5D=John&user%5Bage%5D=30&city=New%20York
const parsedNested = querystring.parse(nestedQueryString); console.log('Parsed Nested Parameters:', parsedNested);
// Output: { 'user [name]': 'John', 'user [age]': '30', city: 'New York' }
/*
This demonstrates how to handle nested objects by flattening them for query string represe