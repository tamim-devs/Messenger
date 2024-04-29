import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Images from '../../../Utilities/Images';
import googleImg from '../../../assets/images/google.png'
import "../../auth/auth.css"
import Input from '../../../Utilities/Input';
import Button from '@mui/material/Button';
import Lbanner from '../../../assets/images/Lbanner.png'
import { Link } from 'react-router-dom';

const LoginHeading = styled(Typography)({
  color:  "#03014C",
  fontSize: "33px",
  fontWeight: "700",
  fontFamily: '"Open Sans", sans-serif"',
  lineHeight: "normal"
})

function Login() {
  return (
 
 <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={6} style={{display: "flex", flexDirection: "column", gap: "4px",  alignItems: "center", justifyContent: "center" }}>
            <div className='loginForm'>
                 <LoginHeading variant="h5">
                    Login to your account!
                  </LoginHeading>
                  <Images source={googleImg} alt="google" styleIng="google" />
                  <Input variant="standard" placeholder="Email Address" styleing= "emailBox"/>
                  <Input variant="standard" placeholder="Enter your Password" styleing= "passwordBox" />
                  <Button variant="contained" style={{padding: "26px 122px", marginTop: "10px", backgroundColor: "#5F34F5", marginTop: "20px" }}>Login to Continue</Button>

                  <span>Already  have an account ?
                      <Link to="/regester">Sign up</Link>

                  </span>

            </div>

           
            

            
            
            </Grid>
            <Grid item xs={6}>            
               <div style={{width: "100%", height: 
               "100vh"}}>
                  <Images source={Lbanner}  styleIng="Lbanner" />
               </div>

            </Grid> 
          </Grid>
    </Box> 
     
    </div>
  )
}

export default Login