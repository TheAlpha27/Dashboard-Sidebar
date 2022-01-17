import React from 'react'
import './sidebar.css'
import { BsSearch } from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="header">
                <h1 className="brand">
                    Alpha Blogs
                </h1>
                <button>
                    <AiOutlineClose/>
                </button>
            </div>
            <div className="search">
                <button><BsSearch /></button>
                <input type="text" placeholder='Search' />
            </div>
        </div>
    )
}
