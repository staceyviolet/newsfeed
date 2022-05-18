import { useEffect }                from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadNewsRequest }          from '../globalState/reducers/loadNewsReducer';
import { Error }                    from './Error';
import { Loader }                   from './Loader';
import { NewsCard }                 from './NewsCard';

import './newsList.scss'

export function NewsList() {
    const { isAuthorised, loginForm } = useSelector(state => state.authorisation);
    const { news, loading, error } = useSelector(state => state.news);

    const dispatch = useDispatch()

    useEffect(() => {dispatch(loadNewsRequest())}, [dispatch])

    if (loading) {
        return <Loader/>
    }

    if (error) {
        return <Error message={error}/>
    }

    if (isAuthorised) {
        return (
            <div className={'news-list'}>
                {news.map(item => {
                    return <NewsCard key={item.id} content={item} isAuthorised={isAuthorised}
                                     isAdmin={loginForm.isAdmin}/>
                })}
            </div>
        )
    }

    return (
        <div className={'news-list'}>
            {news.filter(item => item.isApproved)
                 .map(item => {
                     return <NewsCard key={Math.random()}
                                      content={item}
                                      isAuthorised={isAuthorised}
                                      isAdmin={loginForm.isAdmin}/>
                 })}
        </div>
    )
}