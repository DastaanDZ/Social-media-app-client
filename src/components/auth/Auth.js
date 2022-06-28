import React from 'react'
import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from '@material-ui/core'
import {GoogleLogin} from 'react-google-login'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import Input from './Input'
import { useState, useEffect } from 'react'
import { gapi } from "gapi-script";
import Icon from './Icon'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Auth = () => {
    useEffect(() => {
        function start() {
        gapi.client.init({
        clientId:"559978915558-crtnkpv9nt6pspjrudhvneolvh3gom1m.apps.googleusercontent.com",
        scope: 'email',
          });
           }
          gapi.load('client:auth2', start);
           }, []);

    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleShowPassword = () =>((prevShowPassword) => !prevShowPassword)


    const handleSubmit =() =>{

    }

    const handleChange = () => {

    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
    }

    const googleSuccess = async(res) =>{
        const result =  await res.profileObj;
        const token = await res.tokenId;
        try {
            dispatch({ type: 'AUTH', data : { result, token}});
            history.push('/')
        } catch (error) {
            console.log(error)
        }
    }
    const googleFailure = (error) =>{
        console.log(error)
        console.log('Google sign in unsuccessfuil')
    }
  return (
    <Container component = "main" maxWidth = "xs">
        <Paper className={classes.paper} elevation = {3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography variant='h5'>{isSignup ? 'SignUp' : 'Sign In'} </Typography>
            <form className={classes.form} onSubmit = {handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignup && (
                            <>
                                <Input name='firstName' label='First Name' handleChange = {handleChange} autoFocus half/>
                                <Input name='lastName' label='Last Name' handleChange = {handleChange} autoFocus half/>
                            </>
                        )}
                        <Input name='email' label='Email Address' type='email' handleChange = {handleChange}  />
                        <Input name='password' label='Password' type={showPassword ? 'text' : 'password'} handleChange = {handleChange} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password'/>}


                </Grid>
                <Button type='submit' fulllWidth variant='conatiner' color='primary' className={classes.submit}>
                    {isSignup ? 'Sign Up' : 'Sign In'}
                </Button>
                <GoogleLogin 
                clientId='559978915558-crtnkpv9nt6pspjrudhvneolvh3gom1m.apps.googleusercontent.com'
                render={(renderProps) => (
                    <Button
                    className = {classes.googleButton}
                    color = 'primary'
                    fullWidth
                    onClick ={renderProps.onClick}
                    disabled={renderProps.disabled}
                    startIcon = {<Icon/>}
                    variant = 'contained'>
                        Google Sign In
                    </Button>
                )}
                onSuccess = {googleSuccess}
                onFailure = {googleFailure}
                cookiePolicy = 'single_host_origin'

                />
                <Grid container justify='flex-end'>
                    <Grid item>
                        <Button onClick={switchMode}>
                            {isSignup? 'Already have an account? Sign In' : "Dont have an account sign up"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    </Container>
  )
}

export default Auth
