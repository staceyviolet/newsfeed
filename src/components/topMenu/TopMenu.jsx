import { NavLink } from 'react-router-dom';

export function TopMenu() {
    return (
        <NavLink className={'header__menu'} to="/news">
            Новости
        </NavLink>
    )
}
