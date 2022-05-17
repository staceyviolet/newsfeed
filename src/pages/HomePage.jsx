import { useEffect }   from 'react';
import { useSelector } from 'react-redux';

export function HomePage() {
    const { isAuthorised, loginForm } = useSelector(state => state.authorisation);
    const { login } = loginForm

    useEffect(() => {}, [isAuthorised])

    if (!isAuthorised) {
        return `Привет, Гость`
    }

    return `Привет, ${login}!`

}