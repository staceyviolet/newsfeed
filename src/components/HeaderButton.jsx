export function HeaderButton({ onClick, icon, title }) {
    return (
        <button onClick={onClick}>
            <i className={`fa ${icon}`}></i>
            {title}
        </button>
    )
}