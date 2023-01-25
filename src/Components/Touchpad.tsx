import React from "react"
import styled from "@emotion/styled"
import { Text } from "../layout/Text";
import { Grid } from "../layout/Grid";
import Button from "../layout/Button";

interface TouchPadProps {
    setClickedButtonValue: (event: React.ChangeEvent<HTMLElement>) => void
}

export const Touchpad: React.FC<TouchPadProps> = ({ setClickedButtonValue }) => {

    const buttons: (string | number)[] = ['A', 'B', 'C', 1, 2, 3, 4, 5, 6, 'Clear', 0, 'OK'];

    const onHandleClickGetValue = (e: any) => {
        console.log(e.target.value)
        setClickedButtonValue(e.target.value)
    }

    return(
        <TouchpadContainer container justifyContent="center" gap={3}>
           {buttons.map((buttonTitle: string | number) => 
                <Button 
                    value={buttonTitle} 
                    onClick={onHandleClickGetValue}
                    variant="outlined"
                >
                    <Text>{buttonTitle}</Text>
                </Button>
          )}
        </TouchpadContainer>
    )
}

const TouchpadContainer= styled(Grid)`
    border: 1px solid ${props => props.theme.palette.lightGrey};
    border-radius: 4px;
    width: 16rem;

    background-color: ${props => props.theme.palette.lightGrey};
    margin: ${props => props.theme.spacing(8)};
    padding: ${props => props.theme.spacing(4)};
    box-shadow: 3px 3px 3px 3px ${props => props.theme.palette.middleGrey};
`