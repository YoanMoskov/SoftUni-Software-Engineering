vectorFuncs = {
  add: function (vec1, vec2) {
    let result = [];
    let resVec1 = vec1[0] + vec2[0];
    let resVec2 = vec1[1] + vec2[1];
    result.push(resVec1);
    result.push(resVec2);
    console.log(result);
    return result;
  },
  multiply: function (vec1, scalar) {
    let result = [];
    let resVec1 = vec1[0] * scalar;
    let resVec2 = vec1[1] * scalar;
    result.push(resVec1);
    result.push(resVec2);
    return result
  },
  length: function (vec1) {
    let result = Math.sqrt(vec1[0] * vec1[0] + vec1[1] * vec1[1]);
    return result;
  },
  dot: function (vec1, vec2) {
    let result = vec1[0] * vec2[0] + vec1[1] * vec2[1];
    return result;
  },
  cross: function (vec1, vec2) {
    let result = vec1[0] * vec2[1] - vec1[1] * vec2[0];
    return result;
  },
}
