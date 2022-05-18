import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: 0,
    loading: false,
    error: null,
};

export const approvePostReducer = createSlice({
                                                  name: 'approvePostReducer',
                                                  initialState: initialState,
                                                  reducers: {
                                                      approvePostRequest(state, action) {
                                                          const id = action.payload
                                                          return state = {
                                                              ...state,
                                                              id,
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
    approvePostSuccess
} = approvePostReducer.actions
