'use strict'
function createCalculator (initValue){
    let calcControl = {
        setValue: "initial value",
        memoryRead: function() {
            return this.setValue
        },
    }
    calcControl.setValue = initValue;
    let result = {
        sum: (increaseValue)=>{
            calcControl.setValue = increaseValue + calcControl.memoryRead();
            return calcControl.memoryRead();
        },
        mult: (multValue)=>{
            calcControl.setValue = multValue * calcControl.memoryRead();
            return calcControl.memoryRead();
        },
        sub: (subValue)=>{
            calcControl.setValue = calcControl.memoryRead() - subValue
            return calcControl.memoryRead();
        },
        div: (divValue)=>{
            calcControl.setValue = calcControl.memoryRead() / divValue
            return calcControl.memoryRead();
        }
    }
    return result
}
let calc = createCalculator(10)
console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11

console.log('--------task 2 -----------------------')

let sumTwoSmallestNumbers = function(args){
    let argArray =  [...arguments].sort( (a,b)=>a-b )
    if (argArray.length<2) {
        console.error('input must have at least 2 values!');
        return;
    }
    return argArray[0] + argArray[1]
}
console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77)); // 7
console.log(sumTwoSmallestNumbers(1, 3, 2)); // 3
console.log(sumTwoSmallestNumbers(1)); // undefined и отдельный console.error("...")
