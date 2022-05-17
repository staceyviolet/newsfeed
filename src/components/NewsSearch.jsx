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
            <h4>Поиск новостей</h4>
            <div className={'news-search__input'}>
                <input placeholder="Поиск по новостям" value={search}
                       onChange={handleChangeSearchField}/>
                <i className={'fa fa-search'}></i>
            </div>
        </form>
    )
}