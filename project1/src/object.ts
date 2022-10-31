// ***********Objects**************

let employee: {
    readonly id: number,
    name?: string,
    retire: (date: Date) => void
} = {
    id: 1, retire: (date: Date) => {
        console.log((date));

    }
}

employee.name = "john"
employee.retire(new Date())


// ************Type Aliases************

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}


let employe: Employee = {
    id: 1,
    name: 'john',
    retire: (date: Date) => {
        console.log(date);

    }

}


// **********Union Types*************

function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === 'number') {
        return weight * 2.2
    }
    else {
        return parseInt(weight) * 2.2
    }

}

kgToLbs(10);
kgToLbs('10')


// **********Intersection Types*************

type Draggable = {
    drag: () => void;
}

type Resizable = {
    resize: () => void;
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {

    drag: () => { },
    resize: () => { }

}

// **********Literal Types*************

//Literal (exact,specific)
type Quantity = 50 | 100
let quantity: Quantity = 100;


// **********Nullable Types*************

let great = (name: string | null | undefined) => {
    if (name)

        console.log(name.toUpperCase());
    else
        console.log('Holaaa');

}

great(null)


// **********Optional Changes to Types********

type customer = {
    birthday: Date
}

let getCustomer = (id: number): customer | null | undefined => {
    return id === 0 ? null : { birthday: new Date() }
}

let custoer = getCustomer(1)
// if (custoer !== null && custoer !== undefined) => instead of this we can used below logic
// optional property ac cess operator

console.log(custoer?.birthday?.getFullYear());


// optional element access operator
// 
//      customers?.[0]

// optional call

let log: any 
    log?.('any')



