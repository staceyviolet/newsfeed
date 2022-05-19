import { CreatePostForm } from '../components/createPost/CreatePostForm';
import { NewsList }       from '../components/newsList/NewsList';
import { NewsSearch }     from '../components/newsSearch/NewsSearch';
import './newsPage.scss'

export function NewsPage() {
    return (
        <div className={'news-page'}>
            <CreatePostForm/>
            <NewsSearch/>
            <NewsList/>
        </div>
    )
}