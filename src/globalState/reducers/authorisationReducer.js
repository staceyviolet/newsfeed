import { createSlice } from '@reduxjs/toolkit';

const token = JSON.parse(window.localStorage.getItem('X-Access-Token'))
const loginForm = JSON.parse(window.localStorage.getItem('loginForm'))

const initialState = {
    isAuthorised: !!token,
    loginForm: loginForm ? loginForm : {
        isAdmin: false,
        login: '',
        password: '',
    },
    showModal: false,
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
                                                        changeShowModal(state, action) {
                                                            const { showModal } = action.payload;
                                                            return state = {
                                                                ...state,
                                                                showModal
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
                                                                showModal: true,
                                                                error,
                                                            };
                                                        },
                                                        loginSuccess(state) {
                                                            window.localStorage.setItem('X-Access-Token', Math.random().toString());
                                                            window.localStorage.setItem('loginForm', JSON.stringify(state.loginForm));
                                                            return state = {
                                                                ...state,
                                                                showModal: false,
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
                                                            window.localStorage.removeItem('X-Access-Token');
                                                            window.localStorage.removeItem('loginForm');

                                                            return state = {
                                                                ...initialState
                                                            };
                                                        }
                                                    }
                                                })

export const {
    changeLoginDetails, changeShowModal,
    loginRequest, loginFailure, loginSuccess,
    logoutRequest, logoutFailure, logoutSuccess
} = authorisationReducer.actions