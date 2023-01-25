import { Screen } from "./Screen"
import { Touchpad } from "./Touchpad"
import styled from "@emotion/styled"
import React from "react"
import { Grid } from "../layout/Grid"
import { Stack } from "../layout/Stack"
import Coin from "./Coin"
import { Text } from "../layout/Text"
import { Box } from "../layout/Box"

interface TouchPartProps {
}

export const TouchPart: React.FC<TouchPartProps> = ({ }) => {
    const [clickedButtonValue, setClickedButtonValue] = React.useState<string | number | any>('')
    const buttonvaluesIn = [200, 100, 50]
    const buttonvaluesOut = [50, 20, 10]


    return(
        
        <Stack>
            <Screen clickedButtonValue={clickedButtonValue}/>
            <Stack flexDirection="row" alignItems="center" justifyContent="space-between" spacing={2} gap={2} padding="0 2rem">
                <Text>Coins accepted</Text>
                <Stack flexDirection="row" alignItems="center" gap={2}>
                    {buttonvaluesIn.map(button => <Coin buttonvalues={button}/>)}
                </Stack>
            </Stack>
            <Stack flexDirection="row" alignItems="center" justifyContent="space-between" spacing={2} gap={2} padding="0 2rem">
                <Text>Change</Text>
                <Stack flexDirection="row" alignItems="center" gap={2}>
                    {buttonvaluesOut.map(button => <Coin buttonvalues={button}/>)}
                </Stack>
            </Stack>
            <Touchpad setClickedButtonValue={setClickedButtonValue}/>
           
        </Stack>
)}



