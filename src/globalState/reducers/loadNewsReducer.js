import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    news: [],
    loading: false,
    error: null,
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
                                                       return state = {
                                                           ...state,
                                                           news,
                                                           loading: false,
                                                           error: null,
                                                       };
                                                   },
                                                   changeSearchField(state, action) {
                                                       const search = action.payload;
                                                       return state = { ...state, search }
                                                   },
                                               }
                                           })

export const {
    loadNewsRequest,
    loadNewsFailure,
    loadNewsSuccess,
    changeSearchField
} = loadNewsReducer.actions
