import './error.scss'
export function Error({message}) {
    return (
        <div className={'error'}>
            {message}
        </div>
    )
}

