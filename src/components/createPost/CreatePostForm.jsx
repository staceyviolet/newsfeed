import { useDispatch, useSelector }              from 'react-redux';
import { changePostDetails, publishPostRequest } from '../../globalState/reducers/addPostReducer';
import './createPost.scss'
import { Error }                                 from '../error/Error';

export function CreatePostForm() {
    const { isAuthorised, loginForm } = useSelector(state => state.authorisation);
    const { title, text, loading, error } = useSelector(state => state.post);

    const dispatch = useDispatch()

    const handleFormChange = (e) => {
        e.preventDefault()
        dispatch(changePostDetails({ name: e.target.name, value: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(publishPostRequest())
    }

    if (!isAuthorised) {
        return null
    }

    if (isAuthorised && loginForm.isAdmin) {
        return null
    }

    return (
        <>
            <form className={'create-post'} onSubmit={handleSubmit}>
                <h4>Добавить новость</h4>
                <div className={'login-form__input'}>
                    <label htmlFor={'title'}>Заголовок</label>
                    <input name={'title'} value={title} placeholder={'Заголовок поста'} onChange={handleFormChange}/>
                </div>
                <div className={'login-form__input'}>
                    <label htmlFor={'text'}>Текст</label>
                    <textarea rows={5} name={'text'} value={text} placeholder={'Текст'} onChange={handleFormChange} required/>
                </div>
                <div className={'create-post__send'}>
                    <button type={'submit'} >{`Опубликовать `}
                        {loading ? <i className={'fa fa-circle-o-notch fa-spin'}></i>
                                 : <i className={'fa fa-paper-plane'}></i>}
                    </button>
                </div>
            </form>
            {error && <Error message={error}/>}
        </>
    )
}