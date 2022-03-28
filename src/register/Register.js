import React, { useState } from 'react'
import Back_image from "../images/image_2.jpg"
import "../login/Login.css"
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@mui/material';
import { MenuItem } from '@mui/material';


function Register() {

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

    const [name, setname] = useState('')
    const [mobileNumber, setmob_number] = useState('')
    const [gender, setgender] = useState('')
    const [district, setdistrict] = useState('')


    const validate = () => {

        if (mobileNumber == "") {
            document.getElementById("login_mobile_error").innerHTML =
                "*Enter a valid Mobile number !";
            // errors = true;
        }
        else if (mobileNumber.length > 10) {
            document.getElementById("login_mobile_error").innerHTML = "*Mobile Number must contain 10 digits only !";
            // errors = true;
        }
        else if (mobileNumber.length < 10) {
            document.getElementById("login_mobile_error").innerHTML = "*Mobile Number must contain 10 digits !";
            // errors = true;
        }
        else {
            document.getElementById("login_mobile_error").innerHTML = "";

        }

        if (name == '') {
            document.getElementById("name_error").innerHTML = "*Enter valid name"
        }
        else {
            document.getElementById("name_error").innerHTML = ""
        }

        if (gender == '') {
            document.getElementById("gender_error").innerHTML = "*Select Gender"
        }
        else {
            document.getElementById("gender_error").innerHTML = ""
        }

        if (district == "") {
            document.getElementById("district_error").innerHTML = "*Select District"
        }
        else {
            document.getElementById("district_error").innerHTML = ""
        }

    }


    return (
        <div className='Login'>

            <div class="fill-screen">
                <img class="make-it-fit" src={Back_image} />

                <div className='form_1'>

                    <Container component="main" className="form_man">
                        <div className="sign_in">
                            Register
                        </div>
                        <form className={classes.form} noValidate  >
                            <Grid container spacing={2}  >
                                <Grid item xs={8} sm={12} >
                                    <TextField
                                        id="outlined-error-helper-text"
                                        label="Enter Name"
                                        fullWidth
                                        onChange={(e) => { setname(e.target.value) }}
                                        variant="outlined"
                                    />
                                </Grid>
                                <span className="mobileNumber_error_1" id="name_error"></span>
                                <Grid item xs={8} sm={12} >
                                    <TextField
                                        id="outlined-error-helper-text"
                                        label="Enter Mobile Number"
                                        fullWidth
                                        onChange={(e) => { setmob_number(e.target.value) }}
                                        // defaultValue={user_name}
                                        variant="outlined"
                                        type="number"
                                    />
                                </Grid>
                                <span className="mobileNumber_error_1" id="login_mobile_error"></span>
                                <Grid item xs={8} sm={12} >
                                    <TextField
                                        id="outlined-error-helper-text"
                                        label="Select gender"
                                        fullWidth
                                        onChange={(e) => { setgender(e.target.value) }}
                                        variant="outlined"
                                        select
                                    >
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                        <MenuItem value="Others">Others</MenuItem>
                                    </TextField>
                                </Grid>
                                <span className="mobileNumber_error_1" id="gender_error"></span>
                                <Grid item xs={8} sm={12} >
                                    <TextField
                                        id="outlined-error-helper-text"
                                        label="Select District"
                                        fullWidth
                                        onChange={(e) => { setdistrict(e.target.value) }}
                                        variant="outlined"
                                        select
                                    >
                                        <MenuItem value="Almora">Almora</MenuItem>
                                        <MenuItem value="Bageshwar">Bageshwar</MenuItem>
                                        <MenuItem value="Chamoli">Chamoli</MenuItem>
                                        <MenuItem value="Champawat">Champawat</MenuItem>
                                        <MenuItem value="Dehradun">Dehradun</MenuItem>
                                        <MenuItem value="Haridwar">Haridwar</MenuItem>
                                        <MenuItem value="Nainital">Nainital</MenuItem>
                                        <MenuItem value="Pauri Garhwal">Pauri Garhwal</MenuItem>
                                        <MenuItem value="Pithoragarh">Pithoragarh</MenuItem>
                                        <MenuItem value="Rudraprayag">Rudraprayag</MenuItem>
                                        <MenuItem value="Tehri Garhwal">Tehri Garhwal</MenuItem>
                                        <MenuItem value="Udham Singh Nagar">Udham Singh Nagar</MenuItem>
                                        <MenuItem value="Uttarkashi">Uttarkashi</MenuItem>

                                    </TextField>
                                </Grid>
                                <span className="mobileNumber_error_1" id="district_error"></span>
                            </Grid>

                        </form>


                        <Button variant='contained' color="primary" style={{ width: "100%", marginTop: "20px", marginBottom: "20px" }} onClick={validate} >
                            Register
                        </Button>

                    </Container>
                </div>
            </div>

        </div>
    )
}

export default Register