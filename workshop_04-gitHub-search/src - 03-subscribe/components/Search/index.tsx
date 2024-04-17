import axios from "axios";
import { ChangeEvent, useRef, useState } from "react"
import User from "../../types/user";
import SearchResponse from "../../types/search_response";
import React from "react";
import PubSub from "pubsub-js";



export default function Search() {
  

    const inputRef = useRef<HTMLInputElement>(null);

    // const [keyword, setKeyword] = useState('');

    const search = async () => {
        PubSub.publish('SD545',{ isFrist: false, isLoading: true, isError: false, users: [] })
        try {
            const response = await axios.get(`https://api.github.com/search/users?q=${inputRef.current?.value}`);
            if (response.status === 200) {
              PubSub.publish('SD545',{ isFrist: false, isLoading: false, isError: false, users: response.data.items });
            } else {
              PubSub.publish('SD545',{ isFrist: false, isLoading: false, isError: true, users:[]});
            }
        } catch {
          PubSub.publish('SD545',{ isFrist: false, isLoading: false, isError: true, users: [] })
        }
    }

    return (
        <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
                <input type="text"
                    placeholder="enter the name you search"
                   ref={inputRef}
                />&nbsp;
                <button onClick={search}>Search</button>
            </div>
        </section>
    )
}
