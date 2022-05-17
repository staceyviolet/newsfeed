import { ajax }                                                    from 'rxjs/ajax';
import { map, switchMap, catchError, debounceTime, filter, delay } from 'rxjs/operators';
import { of }                                                      from 'rxjs';
import {
    loginFailure, loginRequest, loginSuccess, logoutFailure, logoutRequest, logoutSuccess,
}                                                                  from '../reducers/authorisationReducer';
import {
    changeSearchField, loadNewsFailure, loadNewsRequest, loadNewsSuccess
}                                                                  from '../reducers/loadNewsReducer';

const LOGIN = 'test@test.com'
const PASSWORD = '123456'

const NEWS = [
    {
        title: 'What is Lorem Ipsum?',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Let',
        creationDate: '1652790536',
        isApproved: true,
    }, {
        title: 'Why do we use it?',
        text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
        creationDate: '1652765287',
        isApproved: true,
    }, {
        title: 'Where does it come from?',
        text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
        creationDate: '1652765287',
        isApproved: false,
    }
]

export const changeSearchEpic = action$ => action$.pipe(
    filter(changeSearchField.match),
    map(o => o.payload.trim()),
    filter(o => o !== ''),
    debounceTime(1000),
    map(o => loadNewsEpic(o)))

export const loginEpic = (action$, state$) => action$.pipe(
    filter(loginRequest.match),
    map(() => state$.value.authorisation.loginForm.login === LOGIN && state$.value.authorisation.loginForm.password === PASSWORD),
    delay(1000),
    map((o) => o === true ? loginSuccess() : loginFailure('Login & Password are incorrect')),);

export const logoutEpic = action$ => action$.pipe(
    filter(logoutRequest.match),
    map(o => o.payload),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_LOAD_CATALOG_URL}/${o}`).pipe(map(o => logoutSuccess(o)), catchError(e => of(logoutFailure(e))),)),);

export const publishPostEpic = (action$, state$) => action$.pipe();

export const approvePostEpic = (action$, state$) => action$.pipe();

export const deletePostEpic = (action$, state$) => action$.pipe();

export const loadNewsEpic = (action$, state$) => action$.pipe(
    filter(loadNewsRequest.match),
    delay(1000),
    map(() => NEWS),
    map((o) => !!o.length ? loadNewsSuccess(o) : loadNewsFailure('Failed to load news')),);