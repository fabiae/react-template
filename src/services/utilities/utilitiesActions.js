import { createActions } from 'redux-actions'

const utilitiesActions = createActions({
    GET_LANGUAGES: () => ({}),
    GET_LANGUAGES_RESPONSE: ( languages ) => ({ languages }),

    SET_LANGUAGE: ( language ) => ({ language }),
})

export default utilitiesActions