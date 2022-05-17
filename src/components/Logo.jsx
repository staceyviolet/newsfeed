import { Link } from 'react-router-dom';

const logo = '/svg/logo.svg'

export function Logo() {
    return (
        <Link to="/">
            <img src={logo} alt="Profilance group"/>
        </Link>
    )
}
