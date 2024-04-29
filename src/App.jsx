import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import React from 'react'
import Login from "./Pages/auth/login/Login";
import Error from "./Pages/Error/Error";
import Rootlayout from "./Components/Layout/Rootlayout";
import Home from "./Pages/Home/Home";
import Regestration from "./Pages/auth/Regestration";
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(

      <>
        <Route>
              <Route element={<Rootlayout/>}>
                <Route path="/home" element={<Home/>}/>
            </Route>
            
                <Route path="/login" element={<Login/>}/>
                <Route path="/error" element={<Error/>}/>
                <Route path="/regester" element={<Regestration/>}/>            
        </Route>
      
      
      
      </>
     
    )
  );

  return (
    <RouterProvider
    router={router}/>
  )
}

export default App