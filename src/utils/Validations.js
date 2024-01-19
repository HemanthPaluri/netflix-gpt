export const ValidateUserData = (userName, password) => {
    const userValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(userName)

    const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

        
    if(!userValid) return "Invalid Email"

    if(!passwordValidation) return "Invalid Password"

    return null;

}