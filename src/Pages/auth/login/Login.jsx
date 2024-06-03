import React, { useState } from 'react'
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
import { getAuth, signInWithEmailAndPassword,  sendPasswordResetEmail, signInWithPopup, } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';
import { GoogleAuthProvider, signOut  } from "firebase/auth";
import { logedinUser } from '../../../slices/authSlice';
import { useSelector, useDispatch } from 'react-redux'

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
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch()

  const initialValues = {
    email: '',
    password: '',
  }
  const [foregetemail, setForgetemail] = useState("")
  const [loader, setLoader] = useState(false)
  const auth = getAuth();
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: LoginValidation,

    onSubmit: (values,actions) => {
      // console.log(values);
      setLoader(true)

      signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        if(user.emailVerified){
          localStorage.setItem("loggedinUser", JSON.stringify(user))
          dispatch(logedinUser(user))
         navigate("/home")
         setLoader(false)
        }else{
          toast("Please Verify Your E-mal..")
          setLoader(false)
        }
        console.log(user.emailVerified);
        actions.resetForm();
      })
      .catch((error) => {
        console.log(error);
        toast("Invalid Credential...")
        setTimeout(()=>{
          setLoader(false)
        },2000)
      });
      
    },
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  let handleForgetPass = ()=>{
    console.log(foregetemail);
    sendPasswordResetEmail(auth, foregetemail )
    .then(() => {
      toast("forget email sent hoichay")
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
      console.log(error);
    
    });
  }
    let handleGoogleLogin = ()=>{
      signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
    }
  return (
 
 <div>
    <Box sx={{ flexGrow: 1 }}>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
      <Grid container>
      <Grid item xs={6} style={{display: "flex", flexDirection: "column", gap: "4px",  alignItems: "center", justifyContent: "center" }}>
          <div className='loginForm'>
              <LoginHeading variant="h5">
                    Login to your account!
                  </LoginHeading>
                  <Images onClick={handleGoogleLogin} source={googleImg} alt="google" styleIng="google" />



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
                          <Button type='submit'  disabled={loader} variant="contained" style={{padding: "26px 122px", marginTop: "20px", backgroundColor: "#5F34F5", fontStyle: "bold", marginTop: "20px" }}>
                            {loader ?
                            <ThreeDots
                            visible={true}
                            height="40"
                            width="80"
                            color="#fff"
                            radius="9"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            />
                            :
                            "Login to Continue"
                            }
                            
                            
                          </Button>
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
                          styleing= "emailBox"
                          onChange={(e)=>setForgetemail(e.target.value)}
                          />
                    <Button type='submit' onClick={handleForgetPass} variant="contained" style={{fontSize: "20px", fontWeight: "700", fontFamily: "poppins", padding: "10px 10px"}}>Forget  Password</Button>
          </div>
        </Box>
      </Modal>
    </Box> 
     
    </div>
  )
}

export default Login