function solveClasses() {
    class Developer{
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = 1000;
            this.tasks = [];
            this.experience = 0;
        }
        addTask(id, taskName, priority){
            let taskObj = {
                id,
                taskName,
                priority,
            }
            if (priority == 'high') {
                this.tasks.unshift(taskObj);
            }
            else{
                this.tasks.push(taskObj);
            }
            return `Task id ${id}, with ${priority} priority, has been added.`;
        }
        doTask(){
            if (this.tasks.length == 0) {
                return `${this.firstname}, you have finished all your tasks. You can rest now.`
            }
            else{
                let task = this.tasks.shift();
                return task.taskName;
            }
        }
        getSalary(){
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`
        }
        reviewTasks(){
            let result = 'Tasks, that need to be completed:\n';
            this.tasks.forEach(task => {
                result += `${task.id}: ${task.taskName} - ${task.priority}\n`
            });
            return result.trim();
        }
    }
    class Junior extends Developer{//??
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName)
            this.tasks = [];
            this.baseSalary = 1000 + bonus;
            this.experience = experience;
        }
        learn(years) {
            this.experience += years;
        }
    }
    class Senior extends Developer{
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName)
            this.baseSalary = 1000 + bonus;
            this.tasks = [];
            this.experience = experience + 5;
        }
        changeTaskPriority(taskId){
            let taskToChange = this.tasks.find(x => x.id == taskId);
            let index = this.tasks.indexOf(x => x.id == taskId);
            this.tasks.splice(index, 1);
            if (taskToChange.priority == 'high') {
                taskToChange.priority = 'low';
                this.tasks.push(taskToChange);
            }
            else if (taskToChange.priority == 'low') {
                taskToChange.priority = 'high';
                this.tasks.unshift(taskToChange);
            }
            return taskToChange;
        }
    }

    return {
        Developer,
        Junior,
        Senior
    }
}
let classes = solveClasses();
const developer = new classes.Developer("George", "Joestar");
console.log(developer.addTask(1, "Inspect bug", "low"));
console.log(developer.addTask(2, "Update repository", "high"));
console.log(developer.reviewTasks());
console.log(developer.getSalary());
const junior = new classes.Junior("Jonathan", "Joestar", 200, 2);
console.log(junior.getSalary());
const senior = new classes.Senior("Joseph", "Joestar", 200, 2);
senior.addTask(1, "Create functionality", "low");
senior.addTask(2, "Update functionality", "high");
console.log(senior.changeTaskPriority(1)["priority"]);