import { applyMiddleware, configureStore }    from '@reduxjs/toolkit';
import { composeWithDevTools }                from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import {
    approvePostEpic,
    changeSearchEpic, deletePostEpic, loadNewsEpic, loginEpic, logoutEpic, publishPostEpic,
} from '../epics';
import { addPostReducer }                     from '../reducers/addPostReducer';
import { approvePostReducer }                 from '../reducers/apprivePostReducer';
import { authorisationReducer }               from '../reducers/authorisationReducer';
import { deletePostReducer }                  from '../reducers/deletePostReducer';
import { loadNewsReducer }                    from '../reducers/loadNewsReducer';

const epic = combineEpics(
    changeSearchEpic,
    loadNewsEpic,
    publishPostEpic,
    deletePostEpic,
    approvePostEpic,
    loginEpic,
    logoutEpic
);

const epicMiddleware = createEpicMiddleware();
const middlewareEnhancer = applyMiddleware(epicMiddleware)
const enhancers = [middlewareEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers)

export const store = configureStore({
                                        reducer: {
                                            news: loadNewsReducer.reducer,
                                            post: addPostReducer.reducer,
                                            deletePost: deletePostReducer.reducer,
                                            approvePost: approvePostReducer.reducer,
                                            authorisation: authorisationReducer.reducer,
                                        },
                                        // middleware: [epicMiddleware],
                                        enhancers: [composedEnhancers],
                                    });
epicMiddleware.run(epic);

export default store;