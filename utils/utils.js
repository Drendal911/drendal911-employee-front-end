const alphaRegex = /[!@#$%^&*()_=0-9+<>/\\]/g
const numRegex = /[!@#$%^&*()_\-=A-Za-z+<>/\\]/g
const salaryRegex = /[!@#$%^&*()_=A-Za-z+<>/\\]/g
let regex = ""
let invalid = ""

// Validate employee input fields
export function isValidEmployeeInput(state) {
    if (!state.firstName || alphaRegex.test(state.firstName))
        invalid = "firstName"
    if (alphaRegex.test(state.middleName))
        invalid = "middleName"
    if (!state.lastName || alphaRegex.test(state.lastName))
        invalid = "lastName"
    if (!state.position || alphaRegex.test(state.position))
        invalid = "position"
    if (!state.birthDate)
        invalid = "birthDate"

    switch (invalid) {
        case "firstName":
            return `Please enter a first name with letters only. 
                (First and last name, position, and birth date are required fields)`
        case "middleName":
            return `Please enter a middle name with letters only.`
        case "lastName":
            return `Please enter a last name with letters only. 
                (First and last name, position, and birth date are required fields)`
        case "position":
            return `Please enter a position. 
                (First and last name, position, and birth date are required fields)`
        case "birthDate":
            return `Please select a birth date. 
                (First and last name, position, and birth date are required fields)`
        default:
            return "ok"
    }
}

// Validate compensation input fields
export function isValidCompensationInput(compensation) {
    if (compensation.compType === "Salary") {
        regex = salaryRegex
    } else {
        regex = numRegex
    }

    if (!compensation.compType || alphaRegex.test(compensation.compType))
        invalid = "compType"
    if (regex.test(compensation.amount) || regex.test(compensation.amount))
        invalid = "amount"
    if (!compensation.description && compensation.compType !== "Salary")
        invalid = "description"
    if (!compensation.date)
        invalid = "date"

    switch (invalid) {
        case "compType":
            return `Please select a compensation type.
            (Type, amount, description, and date are required fields)`
        case "amount":
            return `Please enter a middle name with letters only.`
        case "date":
            return `Please enter a position. 
                (Type, amount, description, and date are required fields)`
        case "description": {
            if (compensation.compType !== "Salary"){
                return `Please enter a description. 
                (Type, amount, description, and date are required fields)`
            }
            return "ok"
        }
        default:
            return "ok"
    }

}