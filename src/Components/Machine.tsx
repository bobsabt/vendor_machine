import styled from "@emotion/styled"
import { MachineBelly } from "./MachineBelly"
import { TouchPart } from "./TouchPart"
import { Container } from "../layout/Container"
import { Stack } from "../layout/Stack"

export const VendingMachine = () => {
    
    const originalData = require("../data.json");
   
    return(
        <Container maxWidth='md'>
            <StyledStack flexDirection="row" >
                <MachineBelly originalData={originalData}/>
                <TouchPart />
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