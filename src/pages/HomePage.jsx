import { useEffect }   from 'react';
import { useSelector } from 'react-redux';
import './homepage.scss'

export function HomePage() {
    const { isAuthorised, loginForm } = useSelector(state => state.authorisation);
    const { login } = loginForm

    useEffect(() => {}, [isAuthorised])

    if (!isAuthorised) {
        return <div className={'homepage'}>Привет, Гость!</div>
    }

    return <div className={'homepage'}>{`Привет, ${login}!`}</div>

}