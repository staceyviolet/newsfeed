import { useEffect, useState }              from 'react';
import { useDispatch, useSelector }         from 'react-redux';
import { changeLoginDetails, loginRequest } from '../globalState/reducers/authorisationReducer';
import { Error }                            from './Error';
import './loginForm.scss'

export function LoginForm({ onClose }) {
    const { login, password, } = useSelector(state => state.authorisation.loginForm);
    const { loading, error } = useSelector(state => state.authorisation);

    const dispatch = useDispatch()

    const handleFormChange = (e) => {
        e.preventDefault()
        dispatch(changeLoginDetails({ name: e.target.name, value: e.target.value }))
    }
    const [isAdmin, setIsAdmin] = useState(false)

    const handleCheckboxCheck = (e) => {
        setIsAdmin(e.target.checked)
    }

    useEffect(() => {}, [loading, error])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginRequest(isAdmin))
    }

    return (
        <form className={'login-form'} onSubmit={handleSubmit}>
            <div className={'login-form__input'}>
                <label htmlFor={'login'}>Login</label>
                <input name={'login'} value={login} placeholder={'Enter login'} onChange={handleFormChange} required/>
            </div>
            <div className={'login-form__input'}>
                <label htmlFor={'password'}>Password</label>
                <input name={'password'} value={password} placeholder={'Enter Password'} onChange={handleFormChange}
                       required/>
            </div>
            <div className={'login-form__checkbox'}>
                <input type={'checkbox'} name={'isAdmin'} checked={isAdmin} onChange={handleCheckboxCheck}/>
                <label htmlFor={'isAdmin'}>I am admin</label>

            </div>

            {error && <Error message={error}/>}

            <div className="login-form__footer">
                <button onClick={onClose}>Cancel</button>
                <button type={'submit'} onClick={handleSubmit}>
                    {loading && <i className={'fa fa-circle-o-notch fa-spin'}></i>}
                    {` Login`}
                </button>
            </div>
        </form>
    )
}


