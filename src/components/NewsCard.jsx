import { useDispatch, useSelector } from 'react-redux';
import { approvePostRequest }       from '../globalState/reducers/apprivePostReducer';
import { deletePostRequest }        from '../globalState/reducers/deletePostReducer';
import './newsCard.scss'

export function NewsCard({ content, isAdmin, isAuthorised }) {
    const { loading: deleteLoading, error: deleteError } = useSelector(state => state.deletePost);
    const { loading: approveLoading, error: approveError } = useSelector(state => state.approvePost);

    const date = new Date(content.creationDate * 1000)
    const dateTime = `${date.toLocaleDateString('ru-RU')} ${date.toLocaleTimeString()}`

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deletePostRequest(id))
    }

    const handleApprove = (id) => {
        dispatch(approvePostRequest(id))
    }

    return (
        <div className={'news-card'}>
            <div className={'news-card__header'}>
                <h4>{content.title}</h4>
                <p>{dateTime}</p>
            </div>
            <p className={'news-card__body'}>{content.text}</p>

            {isAdmin &&
                <div className={'news-card__footer'}>
                    {content.isApproved ? <p><i className={'fa fa-check'}></i>{` Одобрено`}</p>
                                        :
                     <button onClick={() => handleApprove(content.id)}>
                         {approveLoading ? <i className={'fa fa-circle-o-notch fa-spin'}></i>
                                         : <i className={'fa fa-check'}></i>}
                         {` Одобрить`}
                     </button>
                    }
                    <button onClick={() => handleDelete(content.id)}>
                        {deleteLoading ? <i className={'fa fa-circle-o-notch fa-spin'}></i>
                                        : <i className={'fa fa-trash'}></i>}
                        {` Удалить`}</button>
                </div>
            }
            {isAuthorised && !isAdmin &&
                <div className={'news-card__footer'}>
                    {content.isApproved ? <p><i className={'fa fa-check'}></i>{` Одобрено`}</p>
                                        : <p><i className={'fa fa-question'}></i>{` Ожидает одобрения`}</p>
                    }
                    <button onClick={() => handleDelete(content.id)}>
                        {deleteLoading ? <i className={'fa fa-circle-o-notch fa-spin'}></i>
                                       : <i className={'fa fa-trash'}></i>}
                        {` Удалить`}</button>
                </div>

            }
        </div>
    )
}