import './body.scss'
import { useEffect }   from 'react';
import { useSelector } from 'react-redux';

export function Body({ children }) {
    const { isAuthorised } = useSelector(state => state.authorisation);
    useEffect(() => {}, [isAuthorised])
    return (
        <>
            <div className={'body'}>{children}</div>
        </>

    )
}

