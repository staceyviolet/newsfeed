import { useSelector } from 'react-redux';
import './homepage.scss'

export function HomePage() {
    const { isAuthorised, loginForm } = useSelector(state => state.authorisation);
    const { login } = loginForm

    if (!isAuthorised) {
        return <div className={'homepage'}>Привет, Гость!</div>
    }

    return <div className={'homepage'}>{`Привет, ${login}!`}</div>

}