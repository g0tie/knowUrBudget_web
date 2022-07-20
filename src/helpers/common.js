import {getData} from  "../store/database";

function calculatePercentage(value, max) {
    if (max < value) return 100;
    return (value / max) * 100;
}

function getTypeName(id) {
    return getData(id, 'types')?.name;
}

function calculateTotalExpenses(expenses)
{   
    return expenses.reduce((prev, curr) => prev + parseInt(curr.amount), 0);
}

export {
    calculatePercentage,
    getTypeName,
    calculateTotalExpenses
}