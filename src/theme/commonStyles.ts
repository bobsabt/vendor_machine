import { css } from '@emotion/react'
import { Theme } from '@mui/material'

export const buttonStyles = (theme: Theme) => css`
    background-color: ${theme.palette.white};
    border: 2px solid ${theme.palette.white};
    color: white;
    padding: ${theme.spacing(1, 4)};
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.8rem;

    &:hover {
        background-color: ${theme.palette.error.main};
    }
`