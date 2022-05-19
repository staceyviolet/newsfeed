import { useDispatch, useSelector } from 'react-redux';
import { approvePostRequest }       from '../../../globalState/reducers/approvePostReducer';
import { deletePostRequest }        from '../../../globalState/reducers/deletePostReducer';
import { Error }                    from '../../error/Error';

export function NewsCardFooter({ content }) {
    const { isAuthorised, loginForm } = useSelector(state => state.authorisation);
    const { isAdmin } = loginForm
    const { isApproved, id } = content
    const { id: deleteId, loading: deleteLoading, error: deleteError } = useSelector(state => state.deletePost);
    const { id: approveId, loading: approveLoading, error: approveError } = useSelector(state => state.approvePost);

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deletePostRequest(id))
    }

    const handleApprove = (id) => {
        dispatch(approvePostRequest(id))
    }

    if (!isAuthorised) {
        return null
    }

    return (
        <>
        <div className={'news-card__footer'}>
            {isApproved ? <p className={'news-card__footer-approved'}>
                            <i className={'fa fa-check'}></i>
                            {` Одобрено`}
                        </p>
                        : isAdmin ?
                          <button onClick={() => handleApprove(id)}>
                              {approveLoading && approveId === id ? <i className={'fa fa-circle-o-notch fa-spin'}></i>
                                                                  : <i className={'fa fa-check'}></i>}
                              {` Одобрить`}
                          </button>
                                  : <p className={'news-card__footer-pending'}><i
                        className={'fa fa-question-circle'}></i>{` Ожидает одобрения`}</p>
            }
            <button onClick={() => handleDelete(id)}>
                {deleteLoading && deleteId === id ? <i className={'fa fa-circle-o-notch fa-spin'}></i>
                                                  : <i className={'fa fa-trash'}></i>}
                {` Удалить`}</button>
        </div>
            {(deleteError || approveError) && <Error message={deleteError || approveError}/>}
        </>
    )
}