import React from "react"
import styled from "@emotion/styled"
import { Box } from "../layout/Box"
import { Text } from "../layout/Text"

interface ScreenProps {
    clickedButtonValue: string | number
}

export const Screen: React.FC<ScreenProps> = ({clickedButtonValue}) => {
    const [screenDisplay, setScreenDisplay] = React.useState<string | any>('2000')


    //setScreenDisplay(screenDisplay + clickedButtonValue)

    return(
        <ScreenDisplay>
            <Text variant="h3">
                {screenDisplay}
            </Text>
        </ScreenDisplay>
    )
}

const ScreenDisplay= styled(Box)`
    border-radius: 4px;
    border: 2px solid ${(props)=> props.theme.palette.white};
    background: ${(props)=> props.theme.palette.screen};
    margin: ${(props)=> props.theme.spacing(6, 8)};
    padding: ${(props)=> props.theme.spacing(2, 8)};
    text-align: center;
`