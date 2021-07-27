function solve(string) {
    let objects = JSON.parse(string);
    const concat = (a, o) => ({...a,...o});
    const result = objects.reduce(concat, {});
    return result;
}
solve(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`);