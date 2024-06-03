import React, { useEffect, useState } from 'react'
import './Userlist.css'
import { useSelector } from 'react-redux'
import { getDatabase, ref, onValue } from "firebase/database";

const Userlist = () => {

  const data = useSelector((state) => state?.logedinUserData?.value)
  const db = getDatabase();
  const [userList, setUserList] = useState([]);
  useEffect(()=>{
  const userRef = ref(db, 'users' );
  onValue(userRef, (snapshot) => {
    let array = []
    snapshot.forEach((item)=>{
      console.log(item);
      if (data.uid != item.key) {       
        array.push({...item.val(),id: item.key})
      }
    })
    setUserList(array)
  });
  },[]) 
  

  return (
    <>
      <div className='userListbox'>
        <h2>User List</h2>
          <div className='userBox' style={{marginTop: "30px", display: "flex", flexDirection: "column", gap: "10px", }}>
            {userList.map((item,index)=>(             
               <div key={index} style={{display: "flex", justifyContent: "space-between", alignItems: "center",}}> 
  
               <div style={{ display: "flex", alignItems: "center", columnGap: "20px"}}>
                 <div style={{height: "80px", width: "80px", background: "red",  borderRadius: "50%"}}></div>
               <div>
                 <h2>{item.displayName}</h2>
                 <p>Mern Stack</p>
               </div>
             </div>
             <div>
                 <button className='addBtn'>Add</button>
             </div> 
           </div>
            ))
            }
           
            
           
          </div>
      </div>
    </>
  )
}

export default Userlist