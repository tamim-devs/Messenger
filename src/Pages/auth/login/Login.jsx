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
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import LoginValidation from '../../../Validation/LoginValidation';
import Modal from '@mui/material/Modal';

const LoginHeading = styled(Typography)({
  color:  "#03014C",
  fontSize: "33px",
  fontWeight: "700",
  fontFamily: '"Open Sans", sans-serif"',
  lineHeight: "normal"
})

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Login() {

  const initialValues = {
    email: '',
    password: '',
  }


  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: LoginValidation,

    onSubmit: (values,actions) => {
      console.log(values);
      actions.resetForm();
      // alert(JSON.stringify(values, null, 2));
    },
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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



                  <form onSubmit={Formik.handleSubmit}>
                    <div className='loginInputBox'>
                      <div>

                        <Input 
                          type="email" 
                          name= "email" 
                            id="email" 
                          onChange={Formik.handleChange} 
                          value={Formik.values.email} 
                          variant="standard" 
                          placeholder="Email Address" 
                          styleing= "emailBox"/>

                          {Formik.touched.email && Formik.errors.email ? (
                          <p style={{color: "red", fontSize: "19px", fontWeight: "bold"}}>{Formik.errors.email}</p>
                           ) : null}
                      </div>
                      <div>

                          <Input 
                              type="password" 
                              name="password" 
                              id="password" 
                              onChange={Formik.handleChange} 
                              value={Formik.values.password}  
                              variant="standard" 
                              placeholder="Enter your Password" 
                              styleing= "passwordBox" />
                               {Formik.touched.password && Formik.errors.password ? (
                          <p style={{color: "red", fontSize: "19px", fontWeight: "bold"}}>{Formik.errors.password}</p>
                           ) : null}
                      </div>
                    <Button type='submit' variant="contained" style={{padding: "26px 122px", marginTop: "20px", backgroundColor: "#5F34F5", marginTop: "20px" }}>Login to Continue</Button>
                    </div>
                  </form>
                  

                  <span style={{fontWeight: "700"}}>Already  have an account ?
                  <Link style={{textDecoration: "none", color: "#EA6C00"}} to="/regester">Sign up</Link>  
                
                  <p onClick={handleOpen} style={{marginTop: "20px", cursor: "pointer"}}>Forget Your password?</p>
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
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 style={{textAlign: "center", marginBottom: "15px"}}> Forget Your Password</h1>
          <div style={{display: "flex", flexDirection: "column", gap: "21px"}}>
                        <Input 
                          type="email" 
                          name= "forgetemail" 
                          id="forgetemail" 
                          variant="outlined" 
                          placeholder="Forget E-mail" 
                          styleing= "emailBox"/>
                    <Button type='submit' variant="contained" style={{fontSize: "20px", fontWeight: "700", fontFamily: "poppins", padding: "10px 10px"}}>Forget  Password</Button>
          </div>
        </Box>
      </Modal>
    </Box> 
     
    </div>
  )
}

export default Login