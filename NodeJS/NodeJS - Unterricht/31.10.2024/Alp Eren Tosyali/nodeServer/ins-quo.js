import { getQuote, getRandomQuote } from 'inspirational-quotes';

//console.log(getQuote()); // returns quote (text and author)
//console.log(getQuote({ author: false })); // return quote without author


const a = getRandomQuote();

console.log(typeof(a));
console.log(a); // return any random quote