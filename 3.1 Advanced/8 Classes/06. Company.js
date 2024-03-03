class Company {

    departamentInfo = {};

    constructor() {
        this.departaments = {};
    }

    addEmployee(name, salary, position, department) {

        if (!name || !salary || !position || !department || salary < 0)
            throw new Error("Invalid input!");
        if (!this.departaments.hasOwnProperty(department))
            this.departaments[department] = [];
            let employeeObj = {name, salary, position};
            this.departaments[department].push(employeeObj);

        if (!this.departamentInfo.hasOwnProperty(department))
            this.departamentInfo[department] = 0;
        this.departamentInfo[department] += Number(salary);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {

        let outpuStr = "";
        for (const allSalary of Object.entries(this.departamentInfo)) {
            this.departamentInfo[allSalary[0]] = Number(allSalary[1] / this.departaments[allSalary[0]].length).toFixed(2);
        }

        let bestDepartamentName = Object.entries(this.departamentInfo).sort((a, b) => b[1] - a[1])[0][0];
        let averSalary = Object.entries(this.departamentInfo).sort((a, b) => b[1] - a[1])[0][1];
        outpuStr += `Best Department is: ${bestDepartamentName}\nAverage salary: ${averSalary}\n`;

        Object.values(this.departaments[bestDepartamentName]).sort((objA, objB) => {
            return objB.salary - objA.salary || objA.name.localeCompare(objB.name);
        }).forEach(obj => {
            outpuStr += `${obj.name} ${obj.salary} ${obj.position}\n`;
        });
        return outpuStr.trim();
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());