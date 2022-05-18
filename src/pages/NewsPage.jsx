import { useEffect }                from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreatePostForm }           from '../components/CreatePostForm';
import { Error }                    from '../components/Error';
import { Loader }                   from '../components/Loader';
import { NewsList }                 from '../components/NewsList';
import { NewsSearch }               from '../components/NewsSearch';
import { loadNewsRequest }          from '../globalState/reducers/loadNewsReducer';
import './newsPage.scss'

export function NewsPage() {
    const dispatch = useDispatch()

    useEffect(() => {dispatch(loadNewsRequest())}, [dispatch])

    return (
        <div className={'news-page'}>
            <CreatePostForm/>
            <NewsSearch/>
            <NewsList/>
        </div>
    )
}