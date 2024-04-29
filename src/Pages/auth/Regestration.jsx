import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Rbanner from '../../assets/images/Rbanner.png'
import Images from '../../Utilities/Images';
import { Button, Input, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const LoginHeading = styled(Typography)({
  color:  "#03014C",
  fontSize: "33px",
  fontWeight: "700",
  fontFamily: '"Open Sans", sans-serif"',
  lineHeight: "normal"
})



function Regestration() {
  return (
    <div>

      <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={6} style={{display: "flex", flexDirection: "column", gap: "4px",  alignItems: "center", justifyContent: "center" }}>
           
            <div className='regesterForm'>
                 <LoginHeading variant="h5">
                 Get started with easily register 
                 <p style={{fontSize: "20px", fontStyle: "normal", fontWeight: "400", height: "29px", width: "391px", marginTop: "10px", opacity: "0.5"}}>Free register and you can enjoy it</p>
                 </LoginHeading>


                  <TextField required id="outlined-required" label="E-mail Address" />
                  <TextField required id="outlined-required" label="Full Name" />
                  <TextField required id="outlined-required" label="password" type='password'/>


                  <Button variant="contained" style={{padding: "26px 122px", marginTop: "10px", backgroundColor: "#5F34F5", marginTop: "20px", fontSize: "15px", borderRadius: "86px" }}>Sign up</Button>

                        <span style={{fontWeight: "700"}}>Already have an account ? <Link to="/" style={{color: "#EA6C00", fontWeight: "700", textDecoration: "none"}} >Sign in</Link> </span>

            </div>


            </Grid>



           <Grid item xs={6}>


              <Images source={Rbanner}  styleIng="Rbanner" />
           </Grid>        
         </Grid>
         </Box>


    </div>
  )
}

export default Regestration