// Validate input fields
export function isValidAddEmployeeInput(state) {
    const regex = /[!@#$%^&*()_=0-9+<>/\\]/g

    if (!state.firstName || regex.test(state.firstName))
        return "firstName"
    if (regex.test(state.middleName))
        return "middleName"
    if (!state.lastName || regex.test(state.lastName))
        return "lastName"
    if (!state.position || regex.test(state.position))
        return "position"
    if (!state.birthDate)
        return "birthDate"
}

