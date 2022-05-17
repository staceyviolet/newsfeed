import { useEffect }                from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NewsList }                 from '../components/NewsList';
import { NewsSearch }               from '../components/NewsSearch';
import { loadNewsRequest }          from '../globalState/reducers/loadNewsReducer';

export function NewsPage() {
    const { news } = useSelector(state => state.news);

    const dispatch = useDispatch()

    useEffect(() => {dispatch(loadNewsRequest())}, [dispatch])

    return (
        <>
            <NewsSearch/>
            <NewsList newsList={news}/>
        </>
    )
}