import pubSub from 'pubsub-js';
import { useEffect, useState } from 'react';
import SearchResponse from '../../types/search_response'
import './index.css'
import React from 'react';


export default function List() {
    const [searchResponse, setSearchResponse] = useState<SearchResponse>({
        isFrist: true,
        isLoading: false,
        isError: false,
        users: []
    });

    const { isFrist, isLoading, isError, users } = searchResponse;

    useEffect(() => {
        const token = pubSub.subscribe('SD545', (msg, data) => {
            console.log(msg)
            setSearchResponse(data)
        });
        return () => {
            pubSub.unsubscribe(token)
        }
    })

    return (
        <div>
            {
                isFrist ? <h2>Please Enter Keyword to start</h2> :
                    isLoading ? <h2>Please wait</h2> :
                        isError ? <h2>Whoops! Try later</h2> :
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