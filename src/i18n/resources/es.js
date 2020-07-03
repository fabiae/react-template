const auth = {
    signin: 'Iniciar Sesión',
    signup: 'Registrarse'
}

const signin = {
    username: 'Usuario',
    usernameRule: '¡Porfavor, ingresa tu nombre de usuario!',
    password: 'Contraseña',
    passwordRule: '¡Porfavor, ingresa tu contraseña!',
    forgotPassword: '¿Olvidaste tu contraseña?',
    signinButton: 'Iniciar Sesión',
    or: 'O',
    registerNow: '¡Registrate ahora!'
}

const signup = {
    usernameLenght: 'El usuario debe tener minimo 6 caracteres',
    userAvailable: 'Usuario no disponible',
    email: 'Correo',
    emailRequired: '¡Porfavor, ingresa tu correo electronico!',
    emailType: 'El valor ingresado no es un correo',
    confirmPassword: 'Confirma tu contraseña',
    confirmPasswordRule: 'Las contraseñas no coinciden',
    signupButton: 'Registrarme'
}

const recover = {
    sendCode: 'Enviar Codigo',
    code: 'Codigo',
    codeRule: 'Ingresa el codigo',
    validateCode: 'Validar Codigo',
    newPassword: 'Ingresa tu nueva contraseña',
    changePassword: 'Cambiar Contraseña'
}

export const es = {
    ...auth,
    ...signin,
    ...signup,
    ...recover
}
