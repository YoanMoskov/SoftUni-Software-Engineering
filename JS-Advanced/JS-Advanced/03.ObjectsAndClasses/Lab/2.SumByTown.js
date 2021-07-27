function solve(townInfo) {
    let result = {};
    for (let i = 0; i < townInfo.length; i += 2) {
        let townName = townInfo[i];
        let townPopulation = Number(townInfo[i + 1]);
        if(townName in result){
        result[townName] += townPopulation;
        }
        else{
            result[townName] = townPopulation;
        }
    }
    console.log(JSON.stringify(result));
}
solve(['Sofia','20','Varna','3','sofia','5','varna','4']);