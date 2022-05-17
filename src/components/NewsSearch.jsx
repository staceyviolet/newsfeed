import { useDispatch, useSelector } from 'react-redux';
import { changeSearchField }        from '../globalState/reducers/loadNewsReducer';
import './newsSearch.scss'

export function NewsSearch() {
    const { search } = useSelector(state => state.news);

    const dispatch = useDispatch();

    const handleChangeSearchField = (e) => {
        e.preventDefault()
        dispatch(changeSearchField(e.target.value))
    }

    return (
        <form className={'news-search'}>
            <input placeholder="Поиск по новостям" value={search}
                   onChange={handleChangeSearchField}/>
        </form>
    )
}