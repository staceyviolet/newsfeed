import { useEffect }                      from 'react';
import { useDispatch, useSelector }       from 'react-redux';
import { HeaderButton }                   from '../components/headerButton/HeaderButton';
import { LoginModal }                     from '../components/loginModal/LoginModal';
import { Logo }                           from '../components/logo/Logo';
import { TopMenu }                        from '../components/topMenu/TopMenu';
import { changeShowModal, logoutRequest } from '../globalState/reducers/authorisationReducer';
import './header.scss'

export function Header() {
    const { isAuthorised, showModal, loading } = useSelector(state => state.authorisation);
    const dispatch = useDispatch()

    const handleLoginModalOpen = (e) => {
        e.preventDefault()
        dispatch(changeShowModal({ showModal: !showModal }))
    }

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(logoutRequest())
    }

    useEffect(() => {}, [showModal])

    return (
        <header className={'header'}>
            <Logo/>
            <TopMenu/>
            {isAuthorised ? <HeaderButton title={'Выйти'} icon={loading ? 'fa-circle-o-notch fa-spin' : 'fa-sign-out'}
                                          onClick={handleLogout}/>
                          : <HeaderButton title={'Войти'} icon={'fa-sign-in'} onClick={handleLoginModalOpen}/>}

            <LoginModal visible={showModal} onClose={() => dispatch(changeShowModal(false))}/>
        </header>
    )
}

