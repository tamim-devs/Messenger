import React from 'react'
import '../Layout/Layout.css'
import { Avatar, Button } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import { FaDoorOpen } from "react-icons/fa";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import '../../Validation/LoginValidation'
import { logedinUser } from '../../slices/authSlice';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Sidebar= ()=>{
  const navigate = useNavigate();
  const auth = getAuth();
  const data = useSelector((state) => state?.logedinUserData?.value)
  const dispatch = useDispatch()
  console.log(data);
  const handleLogout = ()=>{
    signOut(auth).then(() => {
      navigate("/")
      localStorage.removeItem("logedinUser")
      dispatch(logedinUser(null))
    }).catch((error) => {
      // An error happened.
    });
  }

 
  

  return (
    <div className='sidebarmain'>
          <div className='sidebar_inner'>
            <div className='profileImg'>
            <Avatar  alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 100, height: 100 }} />
            </div>

                <div style={{width: "100%"}}>
                <p style={{textAlign: "center", fontSize: "30px"}}>
                {data ?
                  data?.displayName
                  :
                <Skeleton style={{width: "70%",  margin: "0 auto", height: "50px"}} /> 
                }
                </p>

                    <ul className='sidebarUl' style={{ marginTop: "200px"}}>

                      <li>
                        <NavLink>
                        <IoHomeOutline  className='sidebarIcon'/>
                        </NavLink>
                        </li>

                        <li>
                        <NavLink>
                        <AiOutlineMessage  className='sidebarIcon'/>
                        </NavLink>
                        </li>

                        <li>
                        <NavLink>
                        <IoIosNotificationsOutline  className='sidebarIcon'/>
                        </NavLink>
                        </li>

                        <li>
                        <NavLink>
                        <MdOutlineSettings  className='sidebarIcon'/>
                        </NavLink>
                        </li>
                                      
                    </ul>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                   <button onClick={handleLogout} style={{padding: "20px", fontSize: "20px", borderRadius: "40px", fontWeight: "600", cursor: "pointer"}}>log out</button>
                </div>
          
          </div>
    </div>
  )
}

export default Sidebar