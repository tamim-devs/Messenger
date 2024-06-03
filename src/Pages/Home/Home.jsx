import React from 'react'
import Userlist from '../../Components/home/userlist/Userlist'
import Friend from '../../Components/home/friendlist/Friend'

function Home() {
  return (
    <div>
          
          <div style={{marginTop:'30px', display: "flex", gap: "50px"}}>
               <Userlist />
               <Friend/>
           </div>

    </div>
  )
}

export default Home