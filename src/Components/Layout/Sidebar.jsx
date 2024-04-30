import React from 'react'
import '../Layout/Layout.css'
import { Avatar } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import { FaDoorOpen } from "react-icons/fa";


function Sidebar() {
  return (
    <div className='sidebarmain'>
          <div className='sidebar_inner'>
            <div className='profileImg'>
            <Avatar  alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 100, height: 100 }} />
            </div>

                <div style={{}}>
                    <ul className='sidebarUl'>

                      <li>
                        <NavLink>
                        <IoHomeOutline  className=''/>
                        </NavLink>
                        </li>

                        <li>
                        <NavLink>
                        <AiOutlineMessage  className=''/>
                        </NavLink>
                        </li>

                        <li>
                        <NavLink>
                        <IoIosNotificationsOutline  className=''/>
                        </NavLink>
                        </li>

                        <li>
                        <NavLink>
                        <MdOutlineSettings  className=''/>
                        </NavLink>
                        </li>
                                      
                    </ul>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                      <Link className='logoutBtn'><FaDoorOpen /></Link>
                </div>
          
          </div>
    </div>
  )
}

export default Sidebar