import React from "react"
import styled from "@emotion/styled"
import { Text } from "../layout/Text";
import { Grid } from "../layout/Grid";
import Button from "../layout/Button";

interface TouchPadProps {
    onRefundClick: (event: any) => void
    onHandleClickTouchButton: (event: any) => void
    disabled: boolean
}

export const Touchpad: React.FC<TouchPadProps> = ({ onRefundClick, onHandleClickTouchButton, disabled }) => {

    const buttons: (string | number)[] = ['A', 'B', 'C', 1, 2, 3, 4, 5, 6, 'Clear'];

    return(
        <TouchpadContainer container justifyContent="center" gap={3}>
            {buttons.map((buttonTitle) => 
                <Button 
                    key={buttonTitle}
                    value={buttonTitle} 
                    variant="outlined"
                    disabled={disabled}
                    onClick={onHandleClickTouchButton}
                >
                    <Text>{buttonTitle}</Text>
                </Button>
            )}
            <RefundButton 
                value={"refund"} 
                variant="outlined"
                onClick={onRefundClick}
            > 
            <Text>{"Refund"}</Text>
            </RefundButton>
        </TouchpadContainer>
    )
}

const TouchpadContainer= styled(Grid)`
    border: 1px solid ${props => props.theme.palette.lightGrey};
    border-radius: 4px;
    width: 16rem;

    background-color: ${props => props.theme.palette.lightGrey};
    margin: ${props => props.theme.spacing(6, 8, 8 ,8)};
    padding: ${props => props.theme.spacing(4)};
    box-shadow: 3px 3px 3px 3px ${props => props.theme.palette.middleGrey};
`
const RefundButton= styled(Button)`
    padding: ${props => props.theme.spacing(6)};   
    border-radius: 4px; 
    width: 7.5rem;
    color: ${props => props.theme.palette.backgroundLight};
    background-color: ${props => props.theme.palette.middleGrey};
`