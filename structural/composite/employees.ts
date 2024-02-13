export interface Employee {
  getName(): string;
  getRole(): string;
}

export class IndividualEmployee implements Employee {
  constructor(private name: string, private role: string) {}

  getName(): string {
    return this.name;
  }

  getRole(): string {
    return this.role;
  }
}

export class Departament implements Employee {
  private employees: Employee[] = [];

  constructor(private name: string) {}

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  removeEmployee(employee: Employee): void {
    const index = this.employees.indexOf(employee);

    if (index !== -1) {
      this.employees.slice(index, 1);
    }
  }

  getName(): string {
    return this.name;
  }

  getRole(): string {
    return "Departament";
  }

  listEmployees(): void {
    console.log(`Employees in ${this.name}`);

    this.employees.forEach((employee) => {
      console.log(`${employee.getName()} - ${employee.getRole()}`);
    });
  }
}

const john = new IndividualEmployee("John Doe", "Engineer");
const jane = new IndividualEmployee("Jane Smith", "Manager");

const engineer = new Departament("Engineer");
const marketing = new Departament("Marketing");
const organization = new Departament("Organization");

engineer.addEmployee(john);

marketing.addEmployee(jane);

organization.addEmployee(engineer);
organization.addEmployee(marketing);
organization.listEmployees();
