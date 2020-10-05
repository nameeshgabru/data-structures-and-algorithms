// A hash table is a fixed-sized data structure in which the size is defined at the start.
// A hash table contains two functions: put() and get().
// Both of these functions have a time complexity of O(1).
// localStorage is an example of a data structure based on a hash table.
// localStorage.setItem("testKey", "testValue");
// console.log(localStorage.getItem("testKey")); // prints "testValue"

// Hashing Technique
// Deterministic: Equal keys produce equal values.
// Efficiency: It should be O(1) in time.
// Uniform distribution: It makes the most use of the array. (😉)

function HashTable(size) {
  this.size = size;
  this.keys = this.initArray(size);
  this.values = this.initArray(size);
  this.limit = 0;
}

HashTable.prototype.initArray = function (size) {
  let result = [];
  for (let l = 0; l < size; l++) {
    result.push(null);
  }
  return result;
};

HashTable.prototype.put = function (key, value) {
  if (this.limit === this.size) throw "Hash Table is full";
  let hashIndex = this.hash(key);
  while (this.keys[hashIndex] !== null) {
    // linear probing
    hashIndex++;
    hashIndex = hashIndex % this.size; // hashIndex back to 0, if reaches size, else this does nothing
  }
  this.keys[hashIndex] = key;
  this.values[hashIndex] = value;
  this.limit++;
};

HashTable.prototype.get = function (key) {
  let hashIndex = this.hash(key);
  while (this.keys[hashIndex] !== key) {
    hashIndex++;
    hashIndex = hashIndex % this.size;
  }
  return this.values[hashIndex];
};

HashTable.prototype.log = function () {
  return {
    keys: this.keys,
    values: this.values,
  };
};

HashTable.prototype.hash = function (key) {
  return key % this.size;
};

var exampletable = new HashTable(13);
exampletable.put(7, "hi");
exampletable.put(23, "hello");
exampletable.put(37, "sunny");
exampletable.put(47, "weather");
exampletable.put(59, "wow");
exampletable.put(73, "fourty");
exampletable.put(89, "happy");
exampletable.put(97, "sad");
console.log(exampletable.log());
