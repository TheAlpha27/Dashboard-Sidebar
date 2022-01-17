import { React, useEffect, useState } from 'react'
import './sidebar.css'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineClose, AiFillHome } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdCategory } from 'react-icons/md'
import { BiSupport, BiLogOut } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'

export default function Sidebar() {
    const [Expanded, setExpanded] = useState(true);

    return (
        <div className={`sidebar ${Expanded ? "" : "inactive"}`}>
            <div className="header">
                <h1 className="brand">
                    Alpha Blogs
                </h1>
                <button onClick={() => setExpanded(!Expanded)}>
                    <AiOutlineClose />
                </button>
            </div>
            <div className="hamburger" onClick={() => setExpanded(!Expanded)}>
                <GiHamburgerMenu />
            </div>
            <div className="search">
                <button><BsSearch /></button>
                <input type="text" placeholder='Search' />
            </div>
            <div className="divider">

            </div>
            <div className="menuItem">
                <button><AiFillHome /></button>
                <a href='#'>
                    Home
                </a>
            </div>
            <div className="menuItem">
                <button><MdCategory /></button>
                <a>
                    Categories
                </a>
            </div>
            <div className="menuItem">
                <button><BiSupport /></button>
                <a href='#'>
                    Contact & Support
                </a>
            </div>
            <div className="footer">
                <div className="userinfo">
                    <button><FaUserCircle /></button>
                    <span>Utsav Soni</span>
                </div>
                <div className="logout">
                    <button>
                        <BiLogOut />
                    </button>
                    <span>
                        Logout
                    </span>
                </div>
            </div>
        </div>
    )
}
