import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthorised: false,
    loginForm: {
        isAdmin: false,
        login: '',
        password: '',
    },
    loading: false,
    error: null
};

export const authorisationReducer = createSlice({
                                                    name: 'authorisationReducer',
                                                    initialState: initialState,
                                                    reducers: {
                                                        changeLoginDetails(state, action) {
                                                            const { name, value } = action.payload;
                                                            return state = {
                                                                ...state,
                                                                loginForm: { ...state.loginForm, [name]: value }
                                                            };
                                                        },
                                                        loginRequest(state) {
                                                            return state = {
                                                                ...state,
                                                                loading: true,
                                                                error: null,
                                                            };
                                                        },
                                                        loginFailure(state, action) {
                                                            const error = action.payload;
                                                            return state = {
                                                                ...initialState,
                                                                error,
                                                            };
                                                        },
                                                        loginSuccess(state) {
                                                            return state = {
                                                                ...state,
                                                                isAuthorised: true,
                                                                loading: false,
                                                                error: null
                                                            };
                                                        },
                                                        logoutRequest(state) {
                                                            return state = {
                                                                ...state,
                                                                loading: true,
                                                                error: null,
                                                            };
                                                        },
                                                        logoutFailure(state, action) {
                                                            const error = action.payload;
                                                            return state = {
                                                                ...state,
                                                                error,
                                                            };
                                                        },
                                                        logoutSuccess(state) {
                                                            return state = {
                                                                ...initialState
                                                            };
                                                        }
                                                    }
                                                })

export const {
    changeLoginDetails,
    loginRequest, loginFailure, loginSuccess,
    logoutRequest, logoutFailure, logoutSuccess
} = authorisationReducer.actions