// Como podemos rodar isso em um arquivo .ts sem causar erros?

let employee: { code: number; name: string } = {
  code: 0,
  name: ''
};

employee.code = 10;
employee.name = 'John';

interface Employee {
  code: number;
  name: string;
}

let employee01: Employee = {
  code: 2,
  name: 'Alfred'
};
