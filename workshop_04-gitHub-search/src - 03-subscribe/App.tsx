import { useState } from "react";
import List from "./components/List";
import Search from "./components/Search";
import User from "./types/user";
import SearchResponse from "./types/search_response";
import React from "react";

export default function App() {
   
    return (
        <div className="container">
            <Search /> 
            <List /> 
        </div>
    )
}
// search and list are siblings so, canot communicate eachother directly