import { useEffect }                from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadNewsRequest }          from '../../globalState/reducers/loadNewsReducer';
import { Error }                    from '../error/Error';
import { Loader }                   from '../loader/Loader';
import { NewsCard }                 from '../newsCard/NewsCard';
import './newsList.scss'

export function NewsList() {
    const { isAuthorised } = useSelector(state => state.authorisation);
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
                    return <NewsCard key={item.id}
                                     content={item}
                                     />
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
                                     />
                 })}
        </div>
    )
}