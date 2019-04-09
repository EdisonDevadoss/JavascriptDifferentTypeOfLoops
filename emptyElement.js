//Javascript arrays allow empty elements. The below array is syntactically valid and has lenght 3:

const arr = ['a',,'c'];
arr.length;// 3
console.log('arr.length is', arr.length);

//for/in and for/each skip the empty element, for and for/of do not.

for(let i=0; i< arr.length; i++){
    console.log('arr is', arr[i]); //"a undefined, c"
}

for(const v of arr){
    console.log('using of is', v);
}

//print "a, c". It skips the empty element.
arr.forEach((v)=> console.log('Using for each',v));

for(let i in arr){
    console.log('Using for in',arr[i]);
}

