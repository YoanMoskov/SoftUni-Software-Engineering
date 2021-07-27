function solve(array) {
  let objects = [];
  function innerFunc() {
    array.map((x) => {
      [action, name, ...others] = x.split(' ');
      if (action == 'create') {
        let obj = {
          name,
        };
        objects.push(obj);
        if (others.length != 0 && others[0] == 'inherit') {
          parentObj = objects.find((x) => x.name == others[1]);
          Object.setPrototypeOf(obj, parentObj);
        }
      } else if (action == 'set') {
        objectToFind = objects.find((x) => x.name == name);
        objectToFind[others[0]] = others[1];
      } else if (action == 'print') {
        let result = [];
        obj = objects.find((x) => x.name == name);
        for (const key in obj) {
          if (key == 'name') {
          } else {
            if (obj.hasOwnProperty(key)) {
              result.push(`${key}:${obj[key]}`);
            }
          }
        }
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                
                
            }
            else{
                result.push(`${key}:${obj[key]}`);
            }
        }
        console.log(result.join(', ', result));
      }
    });
  }
  return innerFunc();
}
solve([
  'create c1',
  'create c2 inherit c1',
  'set c1 color red',
  'set c2 model new',
  'print c1',
  'print c2',
]);
