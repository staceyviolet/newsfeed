import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: '',
    text: '',
    creationDate: '',
    isApproved: false,
    loading: false,
    error: null
};

export const addPostReducer = createSlice({
                                              name: 'addPostReducer',
                                              initialState: initialState,
                                              reducers: {
                                                  changePostDetails(state, action) {
                                                      const { name, value } = action.payload;
                                                      return state = { ...state, [name]: value }
                                                  },
                                                  publishPostRequest(state, action) {
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
                                                  publishPostSuccess(state, action) {
                                                      const news = action.payload
                                                      window.localStorage.setItem('news', JSON.stringify(news));
                                                      return state = {
                                                          ...initialState,
                                                      };
                                                  }
                                              }
                                          })

export const {
    changePostDetails,
    publishPostRequest,
    publishPostFailure,
    publishPostSuccess
} = addPostReducer.actions