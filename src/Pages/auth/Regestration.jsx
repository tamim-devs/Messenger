import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Rbanner from '../../assets/images/Rbanner.png'
import Images from '../../Utilities/Images';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import RegestrationValidation from '../../Validation/RegestrationValidation';
import { Formik, useFormik } from 'formik';
import Input from '../../Utilities/Input';
import * as Yup from 'yup';
import Modal from '@mui/material/Modal';

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

  const initialValues = {
    fullName: "",
    email: '',
    password: '',
  }
  

  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: RegestrationValidation,
  
    onSubmit: (values,actions) => {
      console.log(values);
      actions.resetForm();
      // alert(JSON.stringify(values, null, 2));
    },
  });

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

                    <form onSubmit={Formik.handleSubmit} style={{display: "flex", flexDirection: "column", gap: "50px"}} >

                      <div>
                        <Input placeholder="fullName" type= "fullName" name= "fullName" 
                            id="fullName"  variant="outlined" onChange={Formik.handleChange}  value={Formik.values.fullName} /> 

                        {Formik.touched.fullName && Formik.errors.fullName ? (
                          <p style={{color: "red", fontSize: "19px", fontWeight: "bold"}}>{Formik.errors.fullName}</p>
                           ) : null}

                      </div>

                      <div>
                        <Input placeholder="E-mail" type= "email" name= "email" 
                            id="email"  variant="outlined" onChange={Formik.handleChange}  value={Formik.values.email} /> 

                        {Formik.touched.email && Formik.errors.email ? (
                          <p style={{color: "red", fontSize: "19px", fontWeight: "bold"}}>{Formik.errors.email}</p>
                           ) : null}

                      </div>

                      <div>
                        <Input placeholder="Password" type= "password" name= "password" 
                            id="password"  variant="outlined" onChange={Formik.handleChange}  value={Formik.values.email} /> 

                        {Formik.touched.password && Formik.password.email ? (
                          <p style={{color: "red", fontSize: "19px", fontWeight: "bold"}}>{Formik.errors.password}</p>
                           ) : null}

                      </div>

                      <Button variant="contained" type='submit' style={{padding: "26px 122px", marginTop: "10px", backgroundColor: "#5F34F5", marginTop: "20px", fontSize: "15px", borderRadius: "86px" }}>Sign up</Button>
                    </form>



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