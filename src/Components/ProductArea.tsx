import styled from "@emotion/styled"
import { Grid } from "../layout/Grid";
import { Stack } from "../layout/Stack";
import { Exit } from "./Exit";
import { Item } from "./Item";

interface ProductAreaProps {
    products: {
        id: string,
        place: string,
        name: string,
        numberOfItem: number,
        price: number,
        imgSrc: string
    }[],
    selectedItem?: {
        name: string,
        imgSrc: string
    }
}

export const ProductArea: React.FC<ProductAreaProps> = ({ products, selectedItem }) => { 
   
    return(
        <StyledStack justifyContent="center" alignItems="center" spacing={6} >
            <ProductAreaContainer container columns={12} alignItems="flex-end">
                {products.map((product) => 
                    <Item key={product.id} item={product} />
                )}
            </ProductAreaContainer>
            <Exit selectedItem={selectedItem!!}/>
        </StyledStack>

    )
}

const StyledStack = styled(Stack)`
    padding:  ${(props)=> props.theme.spacing(3, 4)};
    box-shadow: 10px 0 5px -2px ${(props)=> props.theme.palette.lightGrey};
`
const ProductAreaContainer = styled(Grid)`
    border: 2px solid ${(props)=> props.theme.palette.white};
    border-radius: ${(props)=> props.theme.spacing(3)};
    background-color: ${(props)=> props.theme.palette.middleGrey};
    padding:  ${(props)=> props.theme.spacing(8, 6, 3, 6)};
`

