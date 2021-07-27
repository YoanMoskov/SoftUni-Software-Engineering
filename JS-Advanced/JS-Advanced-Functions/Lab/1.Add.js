function solution(number) {
    let num = number;
    function innerFunc(addNum) {
        num = number;
        num += addNum;
        return num;
    }
    return innerFunc;
}
let add7 = solution(7);
console.log(add7(2));
console.log(add7(100));