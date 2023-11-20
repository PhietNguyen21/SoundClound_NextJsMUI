'use client'

import { GitHub, Google, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { Avatar, Box, Button, Divider, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react'

const AuthSignin = () => {


    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [isErrUsername, setIsErrUsername] = useState<boolean>(false);
    const [isErrPassword, setIsErrPassword] = useState<boolean>(false);

    const [errUsername, setErrUsername] = useState<string>('');
    const [errPassword, setErrPassword] = useState<string>('');

    // const handleBlur = () => {
    //     if (password === ''&&) {
    //         setIsErrPassword(true);
    //         setErrPassword('Password is not empty');
    //         return;
    //     } else {
    //         setIsErrPassword(false);
    //         setErrPassword('');

    //     }

    //     if (userName === '') {
    //         setIsErrUsername(true);
    //         setErrUsername('Password is not empty');
    //         return;
    //     } else {
    //         setIsErrUsername(false);
    //         setErrUsername('');
    //     }


    // }
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsErrPassword(false);
        setIsErrUsername(false);
        setErrPassword("");
        setErrUsername("");
        if (userName === '') {
            setIsErrUsername(true);
            setErrUsername('Username is not empty');
            return;
        }
        if (password === '') {
            setIsErrPassword(true);
            setErrPassword('Password is not empty');
            return;
        }
        console.log(userName, password)

    }
    return (
        <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Grid item xs={12} sm={8} md={5} lg={4} sx={{
                boxShadow: 'rgba(100,100,111,0.2) 0px 7px 29px 0px'
            }}>
                <div style={{ margin: '20px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%' }}>
                        <Avatar>
                            <Lock />

                        </Avatar>
                        <Typography component='h1'>
                            Sign in
                        </Typography>
                    </Box>
                    <TextField onChange={(e) => { setUserName(e.target.value) }} variant='outlined' margin='normal' required fullWidth label='User name' name='username' autoFocus error={isErrUsername} helperText={errUsername} />
                    <TextField onChange={(e) => { setPassword(e.target.value) }} variant='outlined' type={showPassword ? 'text' : 'password'} margin='normal' required fullWidth label='Password' name='password' InputProps={
                        {
                            endAdornment: <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => { setShowPassword(!showPassword) }}
                                    onMouseDown={(e) => { e.preventDefault() }}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    } error={isErrPassword} helperText={errPassword} />

                    <div style={{ textAlign: 'center' }}>
                        <Button color='primary' variant='contained' fullWidth sx={{ my: 3 }} onClick={(e) => {
                            handleSubmit(e)
                        }} type='submit'>
                            Sign In
                        </Button>
                    </div>
                    <Divider >Or using </Divider>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '25px', mt: 3 }}>
                        <Avatar
                            onClick={() => {
                                signIn('github')
                            }}
                            sx={{ cursor: 'pointer', bgcolor: 'orange', }}>
                            <GitHub titleAccess='Login with Github' />
                        </Avatar>
                        <Avatar
                            sx={{ cursor: 'pointer', bgcolor: 'orange', }}>
                            <Google titleAccess='Login with Github' />
                        </Avatar>
                    </Box>
                </div>
            </Grid>
        </Grid>
    )
}

export default AuthSignin