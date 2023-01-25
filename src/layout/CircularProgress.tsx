import {
    CircularProgress as MuiCircularProgress,
    CircularProgressProps as MuiCircularProgressProps,
} from '@mui/material'
import React from 'react'

export interface CircularProgressProps extends MuiCircularProgressProps {}

export const CircularProgress: React.FC<CircularProgressProps> = props => {
    return <MuiCircularProgress {...props} />
}