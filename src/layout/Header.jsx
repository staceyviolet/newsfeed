import { useEffect }                      from 'react';
import { useDispatch, useSelector }       from 'react-redux';
import { HeaderButton }                   from '../components/HeaderButton';
import { LoginModal }                     from '../components/LoginModal';
import { Logo }                           from '../components/Logo';
import { TopMenu }                        from '../components/TopMenu';

import './header.scss'
import { changeShowModal, logoutRequest } from '../globalState/reducers/authorisationReducer';

export function Header() {
    const { isAuthorised, showModal } = useSelector(state => state.authorisation);
    const dispatch = useDispatch()

    const handleLoginModalOpen = (e) => {
        e.preventDefault()
        dispatch(changeShowModal({showModal: !showModal}))
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
            {isAuthorised ? <HeaderButton title={'Logout'} icon={'fa-sign-out'} onClick={handleLogout}/>
                          : <HeaderButton title={'Login'} icon={'fa-sign-in'} onClick={handleLoginModalOpen}/>}

            <LoginModal visible={showModal} onClose={() =>dispatch(changeShowModal(false))}/>
        </header>
    )
}

