
// Validate input fields
export function isValidEmployeeInput(state) {
    let invalid = ""
    const regex = /[!@#$%^&*()_=0-9+<>/\\]/g

    if (!state.firstName || regex.test(state.firstName))
        invalid = "firstName"
    if (regex.test(state.middleName))
        invalid = "middleName"
    if (!state.lastName || regex.test(state.lastName))
        invalid = "lastName"
    if (!state.position || regex.test(state.position))
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

