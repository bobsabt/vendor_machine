import styled from "@emotion/styled"
import { MachineBelly } from "./MachineBelly"
import { TouchPart } from "./TouchPart"
import { Container } from "../layout/Container"
import { Stack } from "../layout/Stack"
import React from "react"

type Data = {
    id: string,
    place: string,
    name: string,
    numberOfItem: number,
    price: number
}[]

export const VendingMachine = () => {
    const originalData = require("../data.json");
    const [data, setData] = React.useState<Data>(originalData)
    const [selectedItemName, setSelectedItemName] = React.useState<string | undefined>()
   
    return(
        <Container maxWidth='md'>
            <StyledStack flexDirection={{xs:"column-reverse", md:"row"}}>
                <MachineBelly products={data} selectedItemName={selectedItemName} />
                <TouchPart data={data} setData={setData} setSelectedItemName={setSelectedItemName}/>
            </StyledStack>
        </Container>
    )
}
const StyledStack = styled(Stack)`
    border: 2px solid ${(props)=> props.theme.palette.backgroundDark};
    border-radius: ${(props)=> props.theme.spacing(2)};
    
    background-color: ${(props)=> props.theme.palette.backgroundDark};
    background-image: linear-gradient(315deg, ${(props)=> props.theme.palette.backgroundDark} 0%, ${(props)=> props.theme.palette.backgroundLight} 74%);
`