function arrayMap(array, func) {
    let reducer = array.reduce((acc, x) => {
        acc.push(func(x));
        return acc;
    }, []);
    return(reducer);
}
let nums = [1,2,3,4,5];
console.log(arrayMap(nums,(item)=> item * 2)); // [ 2, 4, 6, 8, 10 ]