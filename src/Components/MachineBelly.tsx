import styled from "@emotion/styled"
import { Grid } from "../layout/Grid";
import { Stack } from "../layout/Stack";
import { Exit } from "./Exit";
import { Item } from "./Item";

interface MachineBellyProps {
    products: {
        id: string,
        place: string,
        name: string,
        numberOfItem: number,
        price: number
    }[],
    selectedItemName?: string
}


export const MachineBelly: React.FC<MachineBellyProps> = ({ products, selectedItemName }) => {
   
    return(
        <StyledStack justifyContent="center" alignItems="center" spacing={6} >
            <MachineBellyContainer container columns={12} alignItems="flex-end">
                {products.map((product) => 
                    <Item product={product} />
                )}
            </MachineBellyContainer>
            <Exit selectedItemName={selectedItemName!!}/>
        </StyledStack>

    )
}

const StyledStack = styled(Stack)`
    padding:  ${(props)=> props.theme.spacing(3, 4)};
    box-shadow: 10px 0 5px -2px ${(props)=> props.theme.palette.lightGrey};
`
const MachineBellyContainer = styled(Grid)`
    border: 2px solid ${(props)=> props.theme.palette.white};
    border-radius: ${(props)=> props.theme.spacing(3)};
    background-color: ${(props)=> props.theme.palette.middleGrey};
    padding:  ${(props)=> props.theme.spacing(8, 6, 3, 6)};
`

