import { CreatePostForm }  from '../components/CreatePostForm';
import { NewsList }        from '../components/NewsList';
import { NewsSearch }      from '../components/NewsSearch';
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