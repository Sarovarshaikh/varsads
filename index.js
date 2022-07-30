console.log("variables working");
let sarMy = null;
sarMy= 250;
console.log(sarMy);
var st= 600;
function muFun(){
    var st = 50;
    console.log(st);
}
muFun();

// console.log(st);

const   srt = 0000;
// srt = 50;
console.log(srt);
// const localScope =5;
{
    var localScope = 40;
    console.log(localScope);// allowed only
}
console.log(localScope);// not allowed


const person = {
    fname:"sarova",
    lname:"shaikh",
    fullName:function(){
        console.log(this.fname + "" +  this.lname) ;
        
    }
}
