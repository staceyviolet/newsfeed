import { useState }     from 'react';
import { useSelector }  from 'react-redux';
import { HeaderButton } from '../components/HeaderButton';
import { LoginModal }   from '../components/LoginModal';
import { Logo }         from '../components/Logo';
import { TopMenu }      from '../components/TopMenu';

import './header.scss'

export function Header() {
    const { isAuthorised } = useSelector(state => state.authorisation);
    const [loginModalOpen, setLoginModalOpen] = useState(false)

    const handleLoginModalOpen = (e) => {
        e.preventDefault()
        setLoginModalOpen(!loginModalOpen)
    }

    return (
        <header className={'header'}>
            <Logo/>
            <TopMenu/>
            {isAuthorised ? <HeaderButton title={'Logout'} icon={'fa-sign-out'} onClick={handleLoginModalOpen}/>
                          : <HeaderButton title={'Login'} icon={'fa-sign-in'} onClick={handleLoginModalOpen}/>}

            <LoginModal visible={loginModalOpen} onClose={() => setLoginModalOpen(false)}/>
        </header>
    )
}

