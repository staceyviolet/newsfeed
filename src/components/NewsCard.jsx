import { useState }       from 'react';
import { NewsCardFooter } from './NewsCardFooter';

import './newsCard.scss'

export function NewsCard({ content }) {
    const date = new Date(content.creationDate * 1000)
    const dateTime = `${date.toLocaleDateString('ru-RU')} ${date.getHours()}:${date.getMinutes()}`

    const text = content.text.substring(0, 500).concat('...')
    const textFull = content.text

    const [showMore, setShowMore] = useState(false)

    return (
        <div className={'news-card'}>
            <div className={'news-card__header'}>
                <div className={'news-card__header-title'}>{content.title}</div>
                <div className={'news-card__header-date'}>{dateTime}</div>
            </div>

            <div className={`news-card__body`}>
                <span className={`news-card__body-text`}>{!showMore ? text : textFull}</span>
                {textFull.length > 500 && <span className={'news-card__body-collapse'}
                                                onClick={() => setShowMore(!showMore)}>
                                                {showMore ? `свернуть` : `читать дальше`}
                                                </span>
                }
            </div>

            <NewsCardFooter content={content}/>
        </div>
    )
}