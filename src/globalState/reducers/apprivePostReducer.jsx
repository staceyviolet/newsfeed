import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: null,
};

export const approvePostReducer = createSlice({
                                                  name: 'approvePostReducer',
                                                  initialState: initialState,
                                                  reducers: {
                                                      approvePostRequest(state) {
                                                          return state = {
                                                              ...state,
                                                              loading: true,
                                                              error: null,
                                                          };
                                                      },
                                                      approvePostFailure(state, action) {
                                                          const error = action.payload;
                                                          return state = {
                                                              ...state,
                                                              loading: false,
                                                              error,
                                                          };
                                                      },
                                                      approvePostSuccess(state) {
                                                          return state = {
                                                              ...initialState
                                                          };
                                                      },
                                                  }
                                              })

export const {
    approvePostRequest,
    approvePostFailure,
    loadNewsSuccess,
    approvePostSuccess
} = approvePostReducer.actions
