import { useEffect }                from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreatePostForm }           from '../components/CreatePostForm';
import { NewsList }                 from '../components/NewsList';
import { NewsSearch }               from '../components/NewsSearch';
import { loadNewsRequest }          from '../globalState/reducers/loadNewsReducer';
import './newsPage.scss'

export function NewsPage() {
    const { news } = useSelector(state => state.news);

    const dispatch = useDispatch()

    useEffect(() => {dispatch(loadNewsRequest())}, [dispatch])

    return (
        <div className={'news-page'}>
            <NewsSearch/>
            <CreatePostForm/>
            <NewsList newsList={news}/>
        </div>
    )
}