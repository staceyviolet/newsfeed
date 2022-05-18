import { useEffect } from 'react';
import { LoginForm } from './LoginForm';
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

    if (!visible) return null

    return (
        <div className="login-modal__background" onClick={onClose}>
            <div className="login-modal__main" onClick={e => e.stopPropagation()}>
                <div className="login-modal__header">
                    <h3>Вход</h3>
                    <button className="login-modal__close"
                            onClick={onClose}>
                        <i className={'fa fa-times'}></i>
                    </button>
                </div>

                <div className="login-modal__form">
                    <LoginForm onClose={onClose}/>
                </div>
            </div>
        </div>
    )
}