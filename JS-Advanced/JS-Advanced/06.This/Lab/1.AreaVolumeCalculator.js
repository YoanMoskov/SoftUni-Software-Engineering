function solve(area, vol, input) {
    let inputJS = JSON.parse(input);
    let result = [];
    inputJS.forEach(object => {
        let resultObj = {};
        resultObj.area = Math.abs(area.call(object));
        resultObj.volume = Math.abs(vol.call(object));
        result.push(resultObj);
    });
    return result;
}

function area() {
    return this.x * this.y;
};

function vol() {
    return this.x * this.y * this.z;
};

solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`);