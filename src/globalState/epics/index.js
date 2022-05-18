import { map, debounceTime, filter, delay }                           from 'rxjs/operators';
import { publishPostFailure, publishPostRequest, publishPostSuccess } from '../reducers/addPostReducer';
import { approvePostFailure, approvePostRequest, approvePostSuccess } from '../reducers/apprivePostReducer';
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
    map(() => loadNewsRequest()))

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
        map((o) => o.loginSuccess === true ? loginSuccess(o.isAdmin) : loginFailure('Неправильный логин/пароль '))
    )
;

export const logoutEpic = action$ => action$.pipe(
    filter(logoutRequest.match),
    delay(1000),
    map(() => logoutSuccess()));

export const publishPostEpic = (action$, state$) => action$.pipe(
    filter(publishPostRequest.match),
    delay(1000),
    map(() => {
        const title = state$.value.post.title
        const text = state$.value.post.text
        const newNews = [...NEWS, {
            id: NEWS[NEWS.length - 1].id + 1,
            title,
            text,
            creationDate: new Date(),
            isApproved: false
        }]
        return newNews
    }),
    map((o) => o? publishPostSuccess(o) : publishPostFailure('Не удалось опубликовать постчч')));

export const approvePostEpic = (action$) => action$.pipe(
    filter(approvePostRequest.match),
    map(o => o.payload),
    delay(1000),
    map(o => {
        const news = JSON.parse(window.localStorage.getItem('news'))
                         .map(item => item.id === o ? { ...item, isApproved: true }
                                                    : item)
        window.localStorage.setItem('news', JSON.stringify(news))
        return news
    }),
    map((o) => o === true ? approvePostSuccess() : approvePostFailure('Не удалось одобрить пост. Попробуйте еще раз.')));

export const deletePostEpic = (action$) => action$.pipe(
    filter(deletePostRequest.match),
    map(o => o.payload),
    delay(1000),
    map(o => {
        const news = JSON.parse(window.localStorage.getItem('news')).filter(item => item.id !== o)
        window.localStorage.setItem('news', JSON.stringify(news))
        return news
    }),
    map((o) => o ? deletePostSuccess() : deletePostFailure('Не удалось удалть пост. Попробуйте еще раз.')));

export const loadNewsEpic = (action$, state$) => action$.pipe(
    filter(loadNewsRequest.match),
    delay(1000),
    map(() => {
        const lsNews = window.localStorage.getItem('news')
        const news = lsNews ? JSON.parse(window.localStorage.getItem('news')) : NEWS
        const q = state$.value.news.search.toLowerCase()
        return !q ? news : news.filter(o => o.title.toLowerCase().includes(q) || o.text.toLowerCase().includes(q))
    }),
    map((o) => !!o.length ? loadNewsSuccess(o) : loadNewsFailure('Failed to load news')),);