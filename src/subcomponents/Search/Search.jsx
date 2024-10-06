import React from 'react';
import './Search.css'
import { RxCross2 } from "react-icons/rx";

const Search = ({popup , cross}) => {
    return (
        <div>
            <div className={`animate ${popup ? "opened" : ""}` }>
            <form action="">
                <input type="text" placeholder="search here" />
                <button>Browse</button>
            </form>

               

            <span className="cross" onClick={cross}>
                <RxCross2 />
                </span>
            </div>
        </div>
    );
};

export default Search;