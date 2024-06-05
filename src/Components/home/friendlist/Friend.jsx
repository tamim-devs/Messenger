import React, { useEffect, useState } from 'react'
import './Friend.css'
import { getDatabase, ref, onValue, push } from "firebase/database";
import { useSelector } from 'react-redux'

const Friend = () => {
  const db = getDatabase();
  const data = useSelector((state) => state?.logedinUserData?.value)
  const [frdReq,setfrdReq] = useState([])

  useEffect(()=>{
    const frdRef = ref(db, 'frdReq' );
    onValue(frdRef, (snapshot) => {
      let array = []
      snapshot.forEach((item)=>{
        console.log(item);
        if (data.uid == item.val().reqReciveId) {       
          array.push({...item.val(),id: item.key})
        }
      })
      setfrdReq(array)
    });
    },[]) 


  return (
    <div className='userListbox'>
        <h2>User Request</h2>
          <div className='userBox' style={{marginTop: "30px", display: "flex", flexDirection: "column", gap: "10px", }}>
           {frdReq.map((item,index)=>(
             <div style={{display: "flex", justifyContent: "space-between", alignItems: "center",}}> 
             <div style={{ display: "flex", alignItems: "center", columnGap: "20px"}}>
               <div style={{height: "80px", width: "80px", background: "red",  borderRadius: "50%"}}></div>
             <div>
               <h2>Tamim</h2>
               <p>Mern Stack</p>
             </div>
           </div>
           <div>
               <button className='addBtn'>Accept</button>
           </div> 
         </div>
           ))

           }
            
            
            
          </div>
      </div>
  )
}

export default Friend