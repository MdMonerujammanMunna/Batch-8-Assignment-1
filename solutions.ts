// Problem 1
const multiplyValue=(a:number,b:number=2):number=>{
return a*b
}

// Problem 2
const processInput=(a:number|string|boolean)=>{
if(typeof a ==="string"){
    const data =a.trim().toLowerCase()
    return data
}
else if(typeof a ==="number"){
    const data =a*10
    return  data
}
else if(typeof a ==="boolean"){
    if(a===true){
        return "Active"
    }
    else{
        return "Inactive"
    }
}
}

// Problem 3
const formatCoordinate= ([latitude,longitude,locationName]:readonly[number,number,string]):string=>{
    const data =`Location: ${locationName} (${latitude}, ${longitude})`
return data
}

// Problem 4
const concatenateArrays=<T>(...array:T[][]):T[]=>{
return array.flat()
}

// Problem 5
interface Course{
    title:string,
    students:number,
    isPublished:boolean
}

const getPopularCourses=(array:Course[],minStudents:number):Course[]=>{
const data =array.filter((a)=>{
    if(a.isPublished&&a.students>=minStudents){
        return a
    }
}
)
return data
}

// Problem 6
const pluckValues=<T, K extends keyof T>(item:T[],key:K):T[K][]=>{
    const data =item.map((i)=>{
return i[key]
    })
return data
}

// Problem 7
class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

// Problem 8
const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
      return;
    }
    setTimeout(() => {
      resolve("Access Granted");
    }, 1000);
  });
};
