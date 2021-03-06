const alphaRegex = /[!@#$%^&*()_=0-9+<>/\\]/g
const numRegex = /[!@#$%^&*()_\-=A-Za-z+<>/\\]/g
const salaryRegex = /[!@#$%^&*()_=A-Za-z+<>/\\]/g
let regex = ""


// Validate employee input fields
export function isValidEmployeeInput(state) {
    if (!state.firstName || alphaRegex.test(state.firstName))
        return `Please enter a first name with letters only. 
                (First and last name, position, and birth date are required fields)`
    if (alphaRegex.test(state.middleName))
        return `Please enter a middle name with letters only.`
    if (!state.lastName || alphaRegex.test(state.lastName))
        return `Please enter a last name with letters only. 
                (First and last name, position, and birth date are required fields)`
    if (!state.position || alphaRegex.test(state.position))
        return `Please enter a position. 
                (First and last name, position, and birth date are required fields)`
    if (!state.birthDate) {
        return `Please select a birth date. 
                (First and last name, position, and birth date are required fields)`
    }
    return "ok"
}

// Validate compensation input fields
export function isValidCompensationInput(compensation) {
    // Choose regex because salary has a different regex requirement than the rest
    if (compensation.compType === "Salary") {
        regex = salaryRegex
    } else {
        regex = numRegex
    }

    if (!compensation.compType || alphaRegex.test(compensation.compType))
        return `Please select a compensation type.
            (Type, amount, description [optional for Salary], and date are required fields)`
    if (!compensation.amount || regex.test(compensation.amount))
        return `Please enter an amount with numbers only.
            (Type, amount, description [optional for Salary], and date are required fields)`
    if (!compensation.description && compensation.compType !== "Salary")
        return `Please enter a description. 
                (Type, amount, description [optional for Salary], and date are required fields)`
    if (!compensation.date) {
        return `Please select a date. 
                (Type, amount, description [optional for Salary], and date are required fields)`
    }
    return "ok"
}

// Set the day to the last day of the selected month
export function adjustEndDate(date) {
    const datePartOne = String(date).substring(0, 7)
    const datePartTwo = String(date).substring(11, date.length)
    const month = String(date).substring(4, 7)
    let newDay = '31'

    switch (month) {
        case 'Feb':
            newDay = '28'
            break
        case 'Sep', 'Apr', 'Jun', 'Nov':
            newDay = '30'
            break
    }
    return `${datePartOne} ${newDay} ${datePartTwo}`
}

// Set the day to the first day of the selected month
export function adjustStartDate(date) {
    const datePartOne = String(date).substring(0, 7)
    const datePartTwo = String(date).substring(11, date.length)
    let newDay = '01'
    return `${datePartOne} ${newDay} ${datePartTwo}`
}

export function findMonthlyTotals(arr) {
    let holdObject = {date: '', amount: 0}
    let updatedArr = []
    let returnArr = []
    let amounts = []

    // Map arr element dates into MM YYYY format objects with amounts
    arr.map((element) => {
        const updatedDate = element.date.substring(5, 7) + " " + element.date.substring(0, 4)
        const newObject = {
            date: updatedDate,
            amount: element.amount
        }
        updatedArr.push(newObject)
    })

    const lastIndex = updatedArr.length - 1
    // Group elements that share a month and year
    updatedArr.map((element, i) => {
        if (holdObject.date === '') {
            holdObject = {date: element.date, amount: element.amount}
            amounts.push(element.amount)
        } else if (element.date === holdObject.date) {
            amounts.push(element.amount)
        } else {
            let sum = amounts.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
            }, 0)
            holdObject = {...holdObject, amount: sum}
            returnArr.push(holdObject)
            amounts = []

            if (lastIndex === i) {
                holdObject = {date: element.date, amount: element.amount}
                returnArr.push(holdObject)
            } else {
                holdObject = {date: element.date, amount: element.amount}
                amounts.push(element.amount)
            }
        }
    })
    return returnArr
}

export function capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
