import { handleActions } from 'redux-actions'

const initialState = {
    language: 'es',
    loading: {
        loadingLanguages: false,
    },
    error: {
        errorLanguages: false,
    }
}

const utilitiesReducer = handleActions({
    GET_LANGUAGES: (state, action) => {
        return {
            ...state, 
            loading: { ...state.loading, loadingLanguages: true }, 
            error: { ...state.error, errorLanguages: false } 
        }
    },
    GET_LANGUAGES_RESPONSE:{
        next(state, action){
            const { languages } = action.payload
            return {
                ...state,
                languages,
                error: { ...state.error, errorLanguages: false }, 
                loading: { ...state.loading, loadingLanguages: false } 
            }
        },
        throw(state, action){
            const {  message  } = action.payload
            return { 
                ...state, 
                error: { ...state.error, errorLanguages: true, message }, 
                loading: { ...state.loading, loadingLanguages: false } 
            }
        }
    },

    SET_LANGUAGE: (state, action) => {
        const { language } = action.payload
        return {
            ...state,
            language
        }
    },
}, initialState)

export default utilitiesReducer