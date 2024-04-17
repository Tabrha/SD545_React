import User from '../../types/user'
import SearchResponse from '../../types/search_response'
import './index.css'

// type Props = {
//     searchResponse: SearchResponse
// }

export default function List(props: SearchResponse) {
    // const { searchResponse : {isFrist, isLoading, isError, users}} = props;

    const { isFrist, isLoading, isError, users } = props;

    return (
    <div>
        {
        isFrist? <h2>Please Enter Keyword to start</h2>:
        isLoading? <h2>Please wait</h2>:
        isError?<h2>Whoops! Try later</h2>:
        <div className="row">
            {users.map(user => (
                <div className="card" key={user.id}>
                    <a href={user.html_url} target="_blank">
                        <img src={user.avatar_url} style={{ width: '100px' }} />
                    </a>
                    <p className="card-text">{user.login}</p>
                </div>
            ))}
        </div>
        }
    </div>
    )
}