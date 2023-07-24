function HashTable() {
  this.SIZE = 16;

  // the array will be instantiated as [undefined, undefined....]
  // pop() and push() shouldn't be used on the storage
  this.storage = new Array(this.SIZE);
}

// stores a value in the storage array
// hint: use the hash function to determine where in the array to store the value
HashTable.prototype.set = function (key, value) {
  // if (key) {
  // this.storage[key] = value

  // } else {
  //     let hashKey = hashCode(value, this.SIZE)
  //     this.storage[hashKey] = value
  // }
  let hashKey = hashCode(key, this.SIZE);
  this.storage[hashKey] = value;
};
// Hello friends
// return a previously stored value
HashTable.prototype.get = function (key) {
  let hashKey = hashCode(key, this.SIZE);
  return this.storage[hashKey];

  // let retrievedVal = this.storage[key];
  // console.log(retrievedVal)
  // return retrievedVal;
};

// returns and removes a key from the hash table
HashTable.prototype.remove = function (key) {
  let hashKey = hashCode(key, this.SIZE);
  // if(this.storage[hashKey]){
  //     delete this.storage[hashKey]
  // }
  this.storage[hashKey] = null;
};

// returns a number between 0 and size that is unique* and generated from the the inputted string
function hashCode(string, size) {
  let hash = 0;
  if (string.length == 0) return hash;
  for (let i = 0; i < string.length; i++) {
    const letter = string.charCodeAt(i);
    hash = (hash << 5) - hash + letter;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash) % size;
}

const hashTable1 = new HashTable();

// console.log(hashCode('A', 16)) // hashKey = 1
// console.log(hashCode('kokokokgrgr', 16)) // hashKey = 2

console.log(hashTable1.set("ABC", "random value"));

// console.log(hashTable1);
console.log(hashTable1.remove("ABC"));
console.log(hashTable1);
