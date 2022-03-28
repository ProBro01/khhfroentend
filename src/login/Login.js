import React,{useState} from 'react'
import Back_image from "../images/image_2.jpg"
import "./Login.css"
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

function Login() {

    const useStyles = makeStyles((theme) => ({
        paper: {
          marginTop: theme.spacing(4),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // overflowY: 'scroll'
        },
        avatar: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          // marginTop: theme.spacing(3),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
      }));
    
    const classes = useStyles();
    
    const [mobileNumber, setmob_number] = useState('')
    const [opt_send, setopt_send] = useState(false);
    const [otp, setotp] = useState('');
    

    const validate  = () =>{

        if (mobileNumber == "") {
            document.getElementById("login_mobile_error").innerHTML =
                "*Enter a valid Mobile number !";
            // errors = true;
        } 
        else if(mobileNumber.length > 10){
            document.getElementById("login_mobile_error").innerHTML = "*Mobile Number must contain 10 digits only !";
            // errors = true;
        }
        else if(mobileNumber.length < 10){
            document.getElementById("login_mobile_error").innerHTML = "*Mobile Number must contain 10 digits !";
            // errors = true;
        }
        else {
            document.getElementById("login_mobile_error").innerHTML = "";
            setopt_send(true)
        }

    }
    const authenticate = () =>{
            
    }

  return (
    <div className='Login'>        

        <div class="fill-screen">
            <img class="make-it-fit" src = {Back_image}/>
            
            <div className='form'>
                
                <Container component="main"  className="form_man">
                    <div className="sign_in">
                        Log In
                    </div>
                    <form className={classes.form} noValidate  >
                        <Grid container spacing={2}  >                            
                            <Grid item xs={12} sm={12} >     
                                {!opt_send ?                                                   
                                <TextField                                
                                    id="outlined-error-helper-text"
                                    label="Enter Mobile Number"
                                    fullWidth                                    
                                    onChange={(e)=>{setmob_number(e.target.value)}}
                                    // defaultValue={user_name}
                                    variant="outlined"
                                    type = "number" 
                                />          
                                :
                                <div>
                                
                                <TextField                                
                                    
                                    label="Enter OTP"
                                    fullWidth                                    
                                    onChange={(e)=>{setotp(e.target.value)}}
                                    // defaultValue={user_name}
                                    variant="outlined"
                                    type = "number" 
                                />          
                                </div>
                                }                     
                            </Grid>                            
                        </Grid>

                    </form>
                    
                    <span className="mobileNumber_error" id="login_mobile_error"></span>
                    
                    {!opt_send ?
                        <Button variant='contained' color ="primary" style ={{width :"100%", marginTop :"20px" , marginBottom :"20px" }} onClick={validate} >
                            Send Otp 
                        </Button>
                    :
                        <Button variant='contained' color ="primary" style ={{width :"100%", marginTop :"20px" , marginBottom :"20px" }} onClick={authenticate} >
                            Submit
                        </Button>
                    }
                </Container>
            </div>
        </div>

    </div>
  )
}

export default Login