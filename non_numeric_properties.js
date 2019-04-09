//JavaScript arrays are objects. That means you can add string properties to your array, not just numbers.
const arr = ['a', 'b', 'c'];

console.log('arr typeof', typeof arr); //object

//Assign to a non-numeric property
arr.test  = 'bad';
console.log(arr);//[ 'a', 'b', 'c', test: 'bad' ]
arr.test; //bad

//3 of 4 looping constructs ignore the non-numeric property. However, for/in will actually print out "bad":

//Prints "a, b, c bad"
for(let i in arr){
    console.log('using for/in',arr[i])
}

//This is why iterating through an array using for/in is generally bad practice. The other looping constructs correctly ignore the num-numeric key:

//Prints "a,b,c"
for(let i =0; i < arr.length; ++i){
    console.log('using for', arr[i]);
}

//Prints "a, b,c"
arr.forEach((el,i)=> console.log('forEach is', i , el));

for(const el of arr){
    console.log('using for/of is', el);
}


// Avoid using for/in over an array unless you're conertain you mean to iterate over non-numeric keys and inherited keys.