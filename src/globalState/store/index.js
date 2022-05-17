import { applyMiddleware, configureStore }    from '@reduxjs/toolkit';
import { composeWithDevTools }                from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import {
    changeSearchEpic, loadNewsEpic, loginEpic,
} from '../epics';
import { authorisationReducer }               from '../reducers/authorisationReducer';
import { loadNewsReducer }                    from '../reducers/loadNewsReducer';

const epic = combineEpics(
    changeSearchEpic,
    loadNewsEpic,
    loginEpic
);

const epicMiddleware = createEpicMiddleware();
const middlewareEnhancer = applyMiddleware(epicMiddleware)
const enhancers = [middlewareEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers)

export const store = configureStore({
                                        reducer: {
                                            news: loadNewsReducer.reducer,
                                            authorisation: authorisationReducer.reducer,
                                        },
                                        // middleware: [epicMiddleware],
                                        enhancers: [composedEnhancers],
                                    });
epicMiddleware.run(epic);

export default store;