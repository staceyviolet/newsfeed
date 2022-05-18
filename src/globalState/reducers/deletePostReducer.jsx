import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: 0,
    loading: false,
    error: null,
};

export const deletePostReducer = createSlice({
                                                 name: 'deletePost',
                                                 initialState: initialState,
                                                 reducers: {
                                                     deletePostRequest(state, action) {
                                                         const id = action.payload
                                                         return state = {
                                                             ...state,
                                                             id,
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
