import styled from '@emotion/styled'
import { Alert, AlertProps } from '@mui/material'
import React from 'react'

interface ErrorMessageProps extends AlertProps {
    children?: React.ReactNode
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ children, ...props }) => {
    return(
        <Alert severity='error' {...props}>
            {children ?? 'sorry'}
        </Alert>
    )
}