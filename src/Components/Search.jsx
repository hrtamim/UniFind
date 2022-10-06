import React from 'react'
import '../Styles/Search.css'
import { AiOutlineSearch } from 'react-icons/ai';
export default function Search() {
    return (
        <div className="searchContainer">
           <input type={'text'} placeholder='Search'/>
           <AiOutlineSearch style={{marginRight:5}} />
        </div>
    )
}
