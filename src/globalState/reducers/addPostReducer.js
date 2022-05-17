import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: '',
    text: '',
    creationDate: '',
    isApproved: false,
};

export const addPostReducer = createSlice({
                                              name: 'addPostReducer',
                                              initialState: initialState,
                                              reducers: {
                                                  changePostDetails(state, action) {
                                                      const { name, value } = action.payload;
                                                      return state = { ...state, [name]: value }
                                                  },
                                                  publishPostRequest(state) {
                                                      return state = {
                                                          ...state,
                                                          loading: true,
                                                          error: null,
                                                      };
                                                  },
                                                  publishPostFailure(state, action) {
                                                      const error = action.payload;
                                                      return state = {
                                                          ...initialState,
                                                          error,
                                                      };
                                                  },
                                                  publishPostSuccess(state) {
                                                      return state = {
                                                          ...state,
                                                          isAuthorised: true,
                                                          loading: false,
                                                          error: null
                                                      };
                                                  }
                                              }
                                          })

export const {
    changePostDetails,
    publishPostRequest,
    publishPostFailure, publishPostSuccess
} = addPostReducer.actions