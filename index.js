'use strict'

function createCalculator (initValue){
    let calcControl = {
        memoryValue: 'initValue',
        readMemory: function() {
            return this.memoryValue
        },
        sum: function(increaseValue){
            this.memoryValue = this.readMemory()+increaseValue;
            return this.readMemory() ;
        },
        mult: function(multValue){
            this.memoryValue = this.readMemory() * multValue;
            return this.readMemory() ;
        },
        sub:  function(subValue){
            this.memoryValue = this.readMemory() - subValue;
            return this.readMemory();
        },
        div:  function(divValue){
            this.memoryValue = this.readMemory() /divValue;
            return this.readMemory();
        },
    }
    calcControl.memoryValue = initValue
    return calcControl
}
let calc  = createCalculator(10);
console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11

console.log('------- new function calc-------------');

function simpleCalcSolution (initResult) {
    let result = initResult;
    let calcControls = {
        sum: (sumValue)=>{return result = result + sumValue;},
        mult: (multValue)=>{return result = result * multValue;},
        sub: (subValue)=>{return result = result - subValue;},
        div: (divValue)=>{return result = result / divValue;}
    }
    return calcControls
}

let boringСalc = simpleCalcSolution(10);
console.log(boringСalc.sum(5)); /// 15
console.log(boringСalc.mult(10)); // 150
console.log(boringСalc.sub(40)); // 110
console.log(boringСalc.div(10)); // 11

console.log('--------task 2 -----------------------');

let sumTwoSmallestNumbers = function(args){
    if ([...arguments].length<2) {
        console.error('input must have at least 2 values!');
        return;
    }
    let argArray =  [...arguments].sort( (a,b)=>a-b );
    return argArray[0] + argArray[1]
}
console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77)); // 7
console.log(sumTwoSmallestNumbers(1, 3, 2)); // 3
console.log(sumTwoSmallestNumbers(1)); // undefined и отдельный console.error("...")
