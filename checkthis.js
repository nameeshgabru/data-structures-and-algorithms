function checkThis() {
    return this;
}
console.log(checkThis());
console.log(checkThis.prototype);

// var checkthis = {
//     checkme: function(){
//         return this;
//     }
// }
// console.log(checkthis.checkme());
// console.log(checkthis.checkme.prototype);


// function checkThat() {
//     this.checkme = function () {
//         return this;
//     }
// }
// // Using as function Constructor, it actually creates an Object
// var a = new checkThat();
// console.log(a.checkme());
// console.log(checkThat.prototype);