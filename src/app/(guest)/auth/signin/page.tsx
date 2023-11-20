

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import AuthSignin from '@/components/auth/auth.signin'
import { CheckBox } from '@mui/icons-material'
import { Box, Button, Checkbox, Container, FormControlLabel, Grid, Input, TextField, Typography } from '@mui/material'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'

const SigninPage = async () => {
    const session = await getServerSession(authOptions)
    if (session) {
        redirect('/')
    }
    return (
        <AuthSignin />
    )
}

export default SigninPage