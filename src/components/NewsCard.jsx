import './newsCard.scss'

export function NewsCard({ content, isAdmin }) {
    return (
        <div className={'news-card'}>
            <div className={'news-card__header'}>
                <h4>{content.title}</h4>
                <p>{content.creationDate}</p>
            </div>
            <p className={'news-card__body'}>{content.text}</p>
            <div className={'news-card__footer'}>
                <button>
                    Одобрить
                </button>
                <button>
                    Удалить
                </button>
            </div>
        </div>
    )
}