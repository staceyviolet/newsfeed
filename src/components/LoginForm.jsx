import { useDispatch, useSelector } from 'react-redux';
import { changeLoginDetails }       from '../globalState/reducers/authorisationReducer';
import './loginForm.scss'

export function LoginForm({ onSubmit }) {
    const { login, password, isAdmin } = useSelector(state => state.authorisation.loginForm);

    const dispatch = useDispatch()

    const handleFormChange = (e) => {
        e.preventDefault()
        dispatch(changeLoginDetails({ name: e.target.name, value: e.target.value }))
    }

    const handleCheckboxCheck = (e) => {
        dispatch(changeLoginDetails({ name: e.target.name, value: e.target.checked }))
    }

    return (
        <form className={'login-form'} onSubmit={onSubmit}>
            <div className={'login-form__input'}>
                <label htmlFor={'login'}>Login</label>
                <input name={'login'} value={login} placeholder={'Enter login'} onChange={handleFormChange}/>
            </div>
            <div className={'login-form__input'}>
                <label htmlFor={'password'}>Password</label>
                <input name={'password'} value={password} placeholder={'Enter Password'} onChange={handleFormChange}/>
            </div>
            <div className={'login-form__checkbox'}>
                <input type={'checkbox'} name={'isAdmin'} checked={isAdmin} onChange={handleCheckboxCheck}/>
                <label htmlFor={'isAdmin'}>I am admin</label>

            </div>
        </form>
    )
}


