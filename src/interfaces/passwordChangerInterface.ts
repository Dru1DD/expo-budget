export interface IPasswordChanger {
    email: string
    password: string
    second_password: string
    isValidEmail: boolean
    isValidPassword: boolean
    isValidSecondPassword: boolean
    check_textInputChange: boolean
    secureTextEntry: boolean
    secureTextEntryPasswordHandler: boolean
}