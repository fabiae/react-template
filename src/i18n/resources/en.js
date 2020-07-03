const auth = {
    signin: 'Sign In',
    signup: 'Sign Up'
}

const signin = {
    username: 'Username',
    usernameRule: 'Please, enter your username!',
    password: 'Password',
    passwordRule: 'Please, enter your password!',
    forgotPassword: 'Did you forget your password?',
    signinButton: 'Sign in',
    or: 'Or',
    registerNow: 'Register now!'
}

const signup = {
    usernameLenght: 'Username must have a minimum of 6 characters',
    userAvailable: 'Username not available',
    email: 'Email',
    emailRequired: 'Please, enter your email!',
    emailType: 'The value entered is not an email',
    confirmPassword: 'Confirm your password',
    confirmPasswordRule: 'Passwords do not match',
    signupButton: 'Sign up'
}

const recover = {
    sendCode: 'Send Code',
    code: 'Code',
    codeRule: 'Enter the code',
    validateCode: 'Validate Code',
    newPassword: 'Enter your new password',
    changePassword: 'Change Password'
}


export const en = {
    ...auth,
    ...signin,
    ...signup,
    ...recover
}
