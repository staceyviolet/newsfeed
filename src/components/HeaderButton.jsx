export function HeaderButton({ onClick, icon, title }) {
    return (
        <button className={'header__button'} onClick={onClick}>
            <i className={`fa ${icon}`}></i>
            {` ${title}`}
        </button>
    )
}