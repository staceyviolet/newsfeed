import { useSelector } from 'react-redux';
import { NewsCard }    from './NewsCard';
import './newsList.scss'

export function NewsList({ newsList }) {
    const { isAuthorised, loginForm } = useSelector(state => state.authorisation);
    const { loading, error } = useSelector(state => state.news);

    if (!newsList.length || error) {
        return null
    }

    if (loading) {
        return <i className={'fa fa-spinner'}></i>
    }

    if (isAuthorised) {
        return (
            <div className={'news-list'}>
                {newsList.map(item => {return <NewsCard key={Math.random()} content={item}/>})}
            </div>
        )
    }

    return (
        <div className={'news-list'}>
            {newsList.filter(item => item.isApproved)
                     .map(item => {return <NewsCard key={Math.random()} content={item} isAdmin={loginForm.isAdmin}/>})}
        </div>
    )
}