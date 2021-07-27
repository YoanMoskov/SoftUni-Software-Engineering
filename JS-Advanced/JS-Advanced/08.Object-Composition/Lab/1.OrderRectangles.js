function solve(array) {
    let objectsArr = [];
    array.map(([width, height]) => {
        let currRect = {
            width,
            height,
            area: function() {
                return this.width * this.height;
            },
            compareTo: function(rect) {
                return rect.area() - this.area() || rect.width - this.width;
            }
        }
        objectsArr.push(currRect);
    })
    objectsArr.sort((a, b) =>  a.compareTo(b));
    console.log(objectsArr);
    return objectsArr;
}
solve([[1,20],[20,1],[5,3],[5,3]]);