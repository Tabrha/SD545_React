import { useState } from "react";
import List from "./components/List";
import Search from "./components/Search";
import User from "./types/user";
import SearchResponse from "./types/search_response";
import React from "react";

export default function App() {
    const [searchResponse, setSearchResponse] = useState<SearchResponse>({
        isFrist:true, isLoading:false, isError:false, users:[]
    });

    return (
        <div className="container">
            <Search onSetSearchResponse={setSearchResponse} />
            <List {...searchResponse}/> 
        </div>
    )
}
