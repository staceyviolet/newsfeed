import { map, debounceTime, filter, delay }                             from 'rxjs/operators';
import { publishPostFailure, publishPostRequest, publishPostSuccess }   from '../reducers/addPostReducer';
import { approvePostFailure, approvePostRequest, approvePostSuccess }   from '../reducers/apprivePostReducer';
import {
    loginFailure, loginRequest, loginSuccess, logoutRequest, logoutSuccess,
}                                                                       from '../reducers/authorisationReducer';
import { deletePostFailure, deletePostRequest, deletePostSuccess }      from '../reducers/deletePostReducer';
import {
    changeSearchField, loadNewsFailure, loadNewsRequest, loadNewsSuccess
}                                                                       from '../reducers/loadNewsReducer';
import { USER_LOGIN, NEWS, USER_PASSWORD, ADMIN_LOGIN, ADMIN_PASSWORD } from '../../mockData/news';

export const changeSearchEpic = action$ => action$.pipe(
    filter(changeSearchField.match),
    map(o => o.payload.trim()),
    filter(o => o !== ''),
    debounceTime(1000),
    map(o => loadNewsRequest(o)))

export const loginEpic = (action$, state$) => action$.pipe(
        filter(loginRequest.match),
        map(o => o.payload),
        map((o) => {
            return {
                isAdmin: o,
                loginSuccess: o ? state$.value.authorisation.loginForm.login === ADMIN_LOGIN && state$.value.authorisation.loginForm.password === ADMIN_PASSWORD
                                : state$.value.authorisation.loginForm.login === USER_LOGIN && state$.value.authorisation.loginForm.password === USER_PASSWORD
            }
        }),
        delay(1000),
        map((o) => o.loginSuccess === true ? loginSuccess(o.isAdmin) : loginFailure('Login & Password are incorrect'))
    )
;

export const logoutEpic = action$ => action$.pipe(
    filter(logoutRequest.match),
    delay(1000),
    map(() => logoutSuccess()));

export const publishPostEpic = (action$) => action$.pipe(
    filter(publishPostRequest.match),
    map(o => o.payload),
    delay(1000),
    map((o) => o === true ? publishPostSuccess() : publishPostFailure('Login & Password are incorrect')));

export const approvePostEpic = (action$) => action$.pipe(
    filter(approvePostRequest.match),
    map(o => o.payload),
    delay(1000),
    map((o) => o === true ? approvePostSuccess() : approvePostFailure('Login & Password are incorrect')));

export const deletePostEpic = (action$, state$) => action$.pipe(
    filter(deletePostRequest.match),
    map(o => o.payload),
    delay(1000),
    map((o) => o === true ? deletePostSuccess() : deletePostFailure('Login & Password are incorrect')));

export const loadNewsEpic = (action$, state$) => action$.pipe(
    filter(loadNewsRequest.match),
    delay(1000),
    map(() => {
        const q = state$.value.news.search.toLowerCase()
        console.log(q)
        return !q ? NEWS : NEWS.filter(o => o.title.toLowerCase().includes(q) || o.text.toLowerCase().includes(q))
    }),
    map((o) => !!o.length ? loadNewsSuccess(o) : loadNewsFailure('Failed to load news')),);