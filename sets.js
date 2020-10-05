// let mySet = new Set();
// console.log(mySet);

// mySet.add("a");
// console.log(mySet);

// mySet.add("a");
// console.log(mySet);

// mySet.add("b");
// console.log(mySet.size);
// console.log(mySet.has("c"));
// console.log(mySet.has("a"));
// for(let item of mySet){
//     console.log(item);
// }
// mySet.delete("a");
// console.log(mySet);

function intersect(setA, setB){
    let resultSet = new Set();
    for(let item of setA){
        if(setB.has(item)){
            resultSet.add(item);
        }
    }
    return resultSet;
}

let setA = new Set([1,2,3,4]);
let setB = new Set([2,5,3]);
let setC = new Set([1, 3]);
console.log(intersect(setA, setB));

function isSuperSet(set, subSet){
    for(let item of subSet){
        if(!set.has(item)){
            return false;
        }
    }
    return true;
}
console.log(isSuperSet(setA, setB));
console.log(isSuperSet(setA, setC));

function union(setA, setB){
    let resultSet = new Set(setA);
    for(let item of setB){
        resultSet.add(item);
    }
    return resultSet;
}
console.log(union(setA, setB));

function difference(setA, setB){
    let resultSet = new Set(setA);
    for(let item of setB){
        resultSet.delete(item);
    }
    return resultSet;
}
console.log(difference(setA, setB));
console.log(difference(setA, setC));