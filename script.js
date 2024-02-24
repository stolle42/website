function madlibs(noun,adjective,verb,adverb){
    return "The "+adjective+" "+noun+" "+verb+" "+adverb
}

var car={
    hp:"200",
    modelName:"X"
}
const pi = 3.1;

var multiplepi=(f)=>pi*f;

var myname
console.log(myname)
var myname="noneofourbuisness"
console.log(myname[myname.length-1])
let secondname='thisisaname'+pi
let list=[secondname]
list.push("abc")
console.log(madlibs("planet","blue","dissapeared","slowly"))
console.log(list.unshift(myname))
car.freeze
console.log(car)
// delete car.hp
console.log(car.hasOwnProperty("hp"))
console.log(multiplepi(pi))
