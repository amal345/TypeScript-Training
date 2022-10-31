"use strict";
var _a;
let employee = {
    id: 1, retire: (date) => {
        console.log((date));
    }
};
employee.name = "john";
employee.retire(new Date());
let employe = {
    id: 1,
    name: 'john',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
let great = (name) => {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Holaaa');
};
great(null);
let getCustomer = (id) => {
    return id === 0 ? null : { birthday: new Date() };
};
let custoer = getCustomer(1);
console.log((_a = custoer === null || custoer === void 0 ? void 0 : custoer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log;
log === null || log === void 0 ? void 0 : log('any');
//# sourceMappingURL=object.js.map