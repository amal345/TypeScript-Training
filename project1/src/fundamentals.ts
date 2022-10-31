// ----------------------Arrayss--------------

// let numbers   =[]
// numbers[0]=1
// numbers[1]=0
// numbers[2]='abc'
// console.log(numbers);

let numbers:string[] = []
numbers.forEach(n=>n.charAt)

// ----------------tuples---------------------------------

let user: [number,string,boolean,number] = [1,'abc',true,2]

// user.push(1)        this is the problem in typescripttsc


// ----------------Enums--------------------------------

// const small=1
// const medium=2
// const large=3

// pascalCase for above we can use enum type .it avoid the declaration of three constants separately


const enum Size {small=1 ,medium,large   }

let mysize:Size = Size.medium

console.log(mysize);


// ----------------Functions--------------------------------    

function calculatetax(income:number,taxyear=2022):number {
    // let x;
    if(taxyear < 2022)
        return income*1.2
      return income*1.3
}

calculatetax(10_000)