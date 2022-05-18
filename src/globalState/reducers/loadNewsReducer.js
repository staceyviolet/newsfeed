import { createSlice } from '@reduxjs/toolkit';
const news = JSON.parse(window.localStorage.getItem('news'))

const initialState = {
    news: !!news ? news : [],
    loading: false,
    error: null,
    search: ''
};

export const loadNewsReducer = createSlice({
                                               name: 'loadNewsReducer',
                                               initialState: initialState,
                                               reducers: {
                                                   loadNewsRequest(state) {
                                                       return state = {
                                                           ...state,
                                                           loading: true,
                                                           error: null,
                                                       };
                                                   },
                                                   loadNewsFailure(state, action) {
                                                       const error = action.payload;
                                                       return state = {
                                                           ...state,
                                                           loading: false,
                                                           error,
                                                       };
                                                   },
                                                   loadNewsSuccess(state, action) {
                                                       const news = action.payload;
                                                       window.localStorage.setItem('news', JSON.stringify(news));
                                                       return state = {
                                                           ...state,
                                                           news: news.sort((a, b) => b.creationDate - a.creationDate) ,
                                                           loading: false,
                                                           error: null,
                                                       };
                                                   },
                                                   changeSearchField(state, action) {
                                                       const search = action.payload;
                                                       return state = { ...state, search }
                                                   },
                                                   deletePostRequest(state) {
                                                       return state = {
                                                           ...state,
                                                           loading: true,
                                                           error: null,
                                                       };
                                                   },
                                                   deletePostFailure(state, action) {
                                                       const error = action.payload;
                                                       return state = {
                                                           ...state,
                                                           loading: false,
                                                           error,
                                                       };
                                                   },
                                                   deletePostSuccess(state, action) {
                                                       const news = action.payload;
                                                       return state = {
                                                           ...state,
                                                           news,
                                                           loading: false,
                                                           error: null,
                                                       };
                                                   },
                                               }
                                           })

export const {
    loadNewsRequest,
    loadNewsFailure,
    loadNewsSuccess,
    changeSearchField
} = loadNewsReducer.actions
