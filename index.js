'use strict'

function createCalculator (initValue){
    let calcControl = {
        setValue: 'initValue',
        getValue: function() {
            return this.setValue
        },
        sum: function(increaseValue){
            this.setValue = this.getValue()+increaseValue;
            return this.getValue() ;
        },
        mult: function(multValue){
            this.setValue = this.getValue() * multValue;
            return this.getValue() ;
        },
        sub:  function(subValue){
            this.setValue = this.getValue() - subValue;
            return this.getValue();
        },
        div:  function(divValue){
            this.setValue = this.getValue() /divValue;
            return this.getValue();
        },
    }
    calcControl.setValue = initValue
    return calcControl
}
let calc  = createCalculator(10);
console.log(calc .sum(5)); /// 15
console.log(calc .mult(10)); // 150
console.log(calc .sub(40)); // 110
console.log(calc .div(10)); // 11


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
