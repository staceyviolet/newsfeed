import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: null,
};

export const deletePostReducer = createSlice({
                                                 name: 'deletePost',
                                                 initialState: initialState,
                                                 reducers: {
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
                                                     deletePostSuccess(state) {
                                                         return state = {
                                                             ...initialState
                                                         };
                                                     },
                                                 }
                                             })

export const {
    deletePostRequest,
    deletePostFailure,
    deletePostSuccess
} = deletePostReducer.actions
