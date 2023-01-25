import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Button as MuiButton, ButtonProps as MuiButtonProps, ButtonTypeMap, Theme } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import React, {forwardRef, ForwardRefRenderFunction } from 'react'
import { CircularProgress } from './CircularProgress'

type ExtraProps = {
    isLoading?: boolean
    childrenWrapStyle?: React.CSSProperties
}

export type ButtonProps = MuiButtonProps & ExtraProps 

const Button: ForwardRefRenderFunction<any, ButtonProps> = (
    { isLoading, children, disabled, childrenWrapStyle, variant = 'contained', color = 'primary', ...rest}, ref,
) => {
    const Root = variantMap[variant]

    return(
        <Root
            ref={ref}
            disableElevation
            disabled={isLoading ? true : disabled}
            variant={variant}
            color={color}
            {...rest}
        >
            <ChildrenWrap $isLoading={isLoading} style={childrenWrapStyle}>
                {children}
            </ChildrenWrap>
            {isLoading && <StyledCircularProgress size="1.2" />}
        </Root>
    )
}

const StyledCircularProgress = styled(CircularProgress)`
    position: absolute;
    color: inherit;
`

const ChildrenWrap = styled.span<{ $isLoading?: boolean }>`
    opacity: ${props => (props.$isLoading ? 0 : 1)};
`

export default forwardRef(Button as OverridableComponent<ButtonTypeMap<ExtraProps>>)

const VERTICAL_SPACING = 1
const HORIZONTAL_SPACING = 4
const buttonStyles = (theme: Theme) => css`
    transition: all 150ms;
    text-transform: uppercase;
    font-weight: 600;
    padding: ${theme.spacing(VERTICAL_SPACING, HORIZONTAL_SPACING)};
    border-radius: 8px;
    position: relative;
    font-size: 0.9rem;
    &:focus-visible {
        outline: solid 1px ${theme.palette.primary.main};
    }
`

const TextButton = styled(MuiButton)`
    ${props => buttonStyles(props.theme)}

    &:hover {
        background: none;
    }
`

const TouchpadButton = styled(MuiButton)`
    ${props => buttonStyles(props.theme)}

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${props => props.theme.palette.black};
   
    background-color: ${props => props.theme.palette.middleGrey};
    background-image: -webkit-gradient(linear, left top, left bottom, from(${props => props.theme.palette.middleGrey}), to(${props => props.theme.palette.lightGrey}));
    background-image: -webkit-linear-gradient(top, ${props => props.theme.palette.middleGrey}, ${props => props.theme.palette.lightGrey}); 
    background-image: -moz-linear-gradient(top, ${props => props.theme.palette.middleGrey}, ${props => props.theme.palette.lightGrey}); 
    background-image: -ms-linear-gradient(top, ${props => props.theme.palette.middleGrey}, ${props => props.theme.palette.lightGrey}); 
    background-image: -o-linear-gradient(top, ${props => props.theme.palette.middleGrey}, ${props => props.theme.palette.lightGrey}); 
    color: ${props => props.theme.palette.backgroundLight};
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    box-shadow: 0px 3px 8px #aaa, inset 0px 2px 3px ${props => props.theme.palette.middleGrey};
`

const CoinsButton = styled(MuiButton)`
    ${props => buttonStyles(props.theme)}

    border-radius: 50%;
    min-width: 3rem;

    height: 3rem;
    background-color: #D4A200;
    border: 2px solid black;

    display: flex;
    justify-content: center;
    align-items: center;

   
    color:  ${props => props.theme.palette.black};
    padding: 0;

    &:hover {
        background-color: #f57c00;
    }
`

const variantMap: Record<
    NonNullable<MuiButtonProps['variant']>,
    typeof TextButton | typeof CoinsButton | typeof TouchpadButton
> = {
    text: TextButton,
    contained: CoinsButton,
    outlined: TouchpadButton,
}