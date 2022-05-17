import { useEffect }    from 'react';
import { useDispatch }  from 'react-redux';
import { loginRequest } from '../globalState/reducers/authorisationReducer';
import { LoginForm }    from './LoginForm';
import './loginModal.scss'

export const LoginModal = ({ visible, onClose }) => {
    const onKeydown = ({ key }) => {
        if (key === 'Escape') {
            onClose()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', onKeydown)
        return () => document.removeEventListener('keydown', onKeydown)
    })

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginRequest())
    }

    if (!visible) return null

    return (
        <div className="login-modal__background" onClick={onClose}>
            <div className="login-modal__main" onClick={e => e.stopPropagation()}>
                <div className="login-modal__header">
                    <h3>Login</h3>
                    <span className="modal-close" onClick={onClose}>&times;</span>
                </div>

                <div className="login-modal__body">
                    <LoginForm onSubmit={handleSubmit}/>
                </div>

                <div className="login-modal__footer">
                    <button onClick={onClose}>Cancel</button>
                    <button type={'submit'} onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}