export interface ISingUpData {
    username: string
    isValidUsername: boolean
    email: string
    isValidEmail: boolean
    password: string
    confirm_password: string
    isValidPassword: boolean
    isValidConfirm: boolean
    check_textInputChange: boolean
    check_textInputChangeEmail: boolean
    secureTextEntry: boolean
    confirm_secureTextEntry: boolean
}