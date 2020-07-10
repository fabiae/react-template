import { handleActions } from 'redux-actions'

import token from '../../@common/storage/token'

const initialState = {
    authenticated: token.isTokenValid(),
    loading: {
        loadingSignin: false,
        loadingAvailable: false,
        loadignSignup: false,
        loadingSendCode: false,
        loadingValidateCode: false,
        loadingNewPassword: false
    },
    error: {
        errorSignin: false,
        errorSignup: false,
        errorSendCode: false,
        errorValidateCode: false,
        errorNewPassword: false
    },
    message: {},
    recover: {
        step: 0
    }
}

const authReducer = handleActions({
    SIGN_IN: (state, action) => {
        return {
            ...state,
            loading: {...state.loading, loadingSignin: true },
            error: {...state.error, errorSignin: false }
        }
    },
    SIGN_IN_RESPONSE: {
        next(state, action){
            const { token } = action.payload
            return {
                ...state,
                user: token.username,
                authenticated: true,
                loading: {...state.loading, loadingSignin: false },
                error: {...state.error, errorSignin: false }
            }
        },
        throw(state, action){
            const { message } = action.payload
            return {
                ...state,
                loading: {...state.loading, loadingSignin: false },
                error: {...state.error, errorSignin: true },
                message: {...state.message, messageSignin: message }
            }
        }
    },

    USER_AVAILABLE: (state, action) => {
        return {
            ...state, 
            loading: {...state.loading, loadingAvailable: true }
        }
    },
    USER_AVAILABLE_RESPONSE: (state, action) => {
        const { available } = action.payload
        return {
            ...state,
            available,
            loading: {...state.loading, loadingAvailable: false }
        }
    },

    SIGN_UP: (state, action) => {
        return {
            ...state,
            loading: {...state.loading, loadignSignup: true },
            error: {...state.error, errorSignup: false }
        }
    },
    SIGN_UP_RESPONSE: {
        next(state, action){
            const { token } = action.payload
            return {
                ...state,
                user: token.username,
                authenticated: true,
                loading: {...state.loading, loadignSignup: false },
                error: {...state.error, errorSignup: false }
            }
        },
        throw(state, action){
            const { message } = action.payload
            return {
                ...state, 
                loading: {...state.loading, loadignSignup: false },
                error: {...state.error, errorSignup: true },
                message: {...state.message, messageSignup: message }
            }
        }
    },

    SEND_CODE: (state, action) => {
        return {
            ...state, 
            loading: {...state.loading, loadingSendCode: true },
            error: {...state.error, errorSendCode: false }
        }
    },
    SEND_CODE_RESPONSE: {
        next(state, action){
            const { response } = action.payload
            const userId = Number.parseInt(response.userId)
            return {
                ...state,
                recover: { step: 1, userId },
                loading: {...state.loading, loadingSendCode: false },
                error: {...state.error, errorSendCode: false }
            }
        },
        throw(state, action){
            const { message } = action.payload
            return {
                ...state,
                loading: {...state.loading, loadingSendCode: false },
                error: {...state.error, errorSendCode: true },
                message: {...state.message, messageSendCode: message }
            }
        }
    },

    VALIDATE_CODE: (state, action) => {
        return {
            ...state,
            loading: {...state.loading, loadingValidateCode: true },
            error: {...state.error, errorValidateCode: false }
        }
    },
    VALIDATE_CODE_RESPONSE:{
        next(state, action){
            return {
                ...state,
                recover: {...state.recover, step: 2 },
                loading: {...state.loading, loadingValidateCode: false },
                error: {...state.error, errorValidateCode: false }
            }
        },
        throw(state, action){
            const { message } = action.payload
            return {
                ...state,
                loading: {...state.loading, loadingValidateCode: false },
                error: {...state.error, errorValidateCode: true },
                message: {...state.message, messageValidatCode: message }
            }
        }
    },

    NEW_PASSWORD: (state, action) => {
        return {
            ...state,
            loading: {...state.loading, loadingNewPassword: true },
            error: {...state.error, errorNewPassword: false }
        }
    },
    NEW_PASSWORD_RESPONSE: {
        next(state, action){
            return {
                ...state,
                recover: { step: 0 },
                loading: {...state.loading, loadingNewPassword: false },
                error: {...state.error, errorNewPassword: false }
            }
        },
        throw(state, action){
            const { message } = action.payload
            return {
                ...state,
                loading: {...state.loading, loadingNewPassword: false },
                error: {...state.error, errorNewPassword: true },
                message: {...state.message, messageNewPassword: message }
            }
        }
    },

    LOG_OUT: (state, action) => {
        return {
            ...state,
            authenticated: false
        }
    },

    RESET_STEPS: (state, action) => {
        return {
            ...state,
            recover: { step: 0 }
        }
    },
    RESET_ERROR: (state, action) => {
        return {
            ...state,
            error: { },
            message: { }
        }
    }
}, initialState)

export default authReducer