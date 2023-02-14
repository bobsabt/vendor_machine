import styled from "@emotion/styled"
import { ProductArea } from "./ProductArea"
import { KeyPadArea } from "./KeyPadArea"
import { Container } from "../layout/Container"
import { Stack } from "../layout/Stack"
import React from "react"

type Data = {
    id: string,
    place: string,
    name: string,
    numberOfItem: number,
    price: number,
    imgSrc: string
}[]

type SelectedItems = {
    name: string,
    imgSrc: string
}

export const VendingMachine = () => {
    const originalData = require("../data.json");
    const [data, setData] = React.useState<Data>(originalData)
    const [selectedItem, setSelectedItem] = React.useState<SelectedItems>()

    return(
        <Container maxWidth='md'>
            <StyledStack flexDirection={{xs:"column-reverse", md:"row"}}>
                <ProductArea products={data} selectedItem={selectedItem} /> 
                <KeyPadArea data={data} setData={setData} setSelectedItem={setSelectedItem}/>
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