'use strict'
function createCalculator (initValue){
    let calcControl = {
        setValue: "initial value",
        getValue: function() {
            return this.setValue
        },
    }
    calcControl.setValue = initValue;
    let result = {
        sum: (increaseValue)=>{
            calcControl.setValue = increaseValue + calcControl.getValue();
            return calcControl.getValue();
        },
        mult: (multValue)=>{
            calcControl.setValue = multValue * calcControl.getValue();
            return calcControl.getValue();
        },
        sub: (subValue)=>{
            calcControl.setValue = calcControl.getValue() - subValue
            return calcControl.getValue();
        },
        div: (divValue)=>{
            calcControl.setValue = calcControl.getValue() / divValue
            return calcControl.getValue();
        }
    }
    return result
}
let calc = createCalculator(10)
console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11

