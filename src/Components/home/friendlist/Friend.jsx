import React from 'react'
import './Friend.css'
const Friend = () => {
  return (
    <div className='userListbox'>
        <h2>User Request</h2>
          <div className='userBox' style={{marginTop: "30px", display: "flex", flexDirection: "column", gap: "10px", }}>
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
            
            <div className='userBox' style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}> 
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
            
          </div>
      </div>
  )
}

export default Friend