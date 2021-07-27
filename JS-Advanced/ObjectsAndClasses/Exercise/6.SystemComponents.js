function solve(array) {
    let systems = {};
    for (let i = 0; i < array.length; i++) {
        let[systemName, componentName, subcomponentName] = array[i].split(' | ');
        if (!systems[systemName]) {
            systems[systemName] = {};
        }
        if(!systems[systemName][componentName]){
            systems[systemName][componentName] = []
        }
        
        systems[systemName][componentName].push(subcomponentName);
    }
    Object.entries(systems).sort((a, b) => {
        return Object.entries(b[1]).length - Object.entries(a[1]).length || a[0].localeCompare(b[0]);
    }).forEach(([system, component]) => {
        console.log(system);
        Object.entries(component).sort((a, b) => {
            return b[1].length - a[1].length;
        }).forEach(([component, subcomponent]) => {
            console.log(`|||${component}`);
            subcomponent.forEach(sub => {
                console.log(`||||||${sub}`);
            });
        });
    });
    

}
solve(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']);