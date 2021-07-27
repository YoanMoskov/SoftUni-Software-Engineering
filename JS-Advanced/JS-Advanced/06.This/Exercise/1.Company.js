
class Company {
    constructor() {
        this.departments = [];
    }
    addEmployee(username, salary, position, department) {
        let array = [username, salary, position, department];
        array.forEach(e => {
            if (e == "" || e == null || e == undefined) {
                throw 'Invalid input!';
            }
            if (Number(array[1]) < 0) {
                throw 'Invalid input!';
            }
        });
        if(!this.departments[department]){
            this.departments[department] = [];
        }
        this.departments[department].push({username, salary, position});
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }
    bestDepartment(){
        let avgSalary = 0;
        let bestAvgSalary = Number.MIN_SAFE_INTEGER;
        let bestDepartmentName;
        let bestDepartment;
        Object. keys(this.departments).forEach(key => {
            this.departments[key].forEach(el => {
                avgSalary += el.salary;
            });
            if (avgSalary / Number(this.departments[key].length) > bestAvgSalary) {
                bestAvgSalary = avgSalary / Number(this.departments[key].length);
                bestDepartmentName = key;
                bestDepartment = this.departments[key];
            }
            avgSalary = 0;
        });
        let result = `Best Department is: ${bestDepartmentName}\n`
        result += `Average salary: ${bestAvgSalary.toFixed(2)}\n`
        let subRes = [];
        this.departments[bestDepartmentName].sort((a,b) => b.salary-a.salary || a.username.localeCompare(b.username));
        this.departments[bestDepartmentName].forEach(employee => {
            subRes.push(`${employee.username} ${employee.salary} ${employee.position}`);
        });
        return result + subRes.join('\n');
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
