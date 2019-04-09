// The for and for/in looping constructs give you access to the index in the array, not the actual element. For example, suppose you want to print out the values sotred in below array:

const arr = ['a', 'b','c'];

//for and for/in

for(let i =0; i<arr.length; ++i){
    console.log('using for loop is', arr[i])
}

for(let i in arr){
    console.log("using fot/in", arr[i]);
}

//With the other two constructs, forEach() and for/of, you get access to the array element itself. With forEach() you can access the array index i, with for / of you cannot.

arr.forEach((v,i)=> console.log('using forEach', v));

for(const v of arr){
    console.log('using for/of', v)
}