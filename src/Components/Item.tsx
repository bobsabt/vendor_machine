
import styled from "@emotion/styled"
import { Box } from "../layout/Box";
import { Grid } from "../layout/Grid";
import { Stack } from "../layout/Stack";
import { Text } from "../layout/Text";
import  Bomba  from "../Pictures/product_bomba.png";
import  Mars  from "../Pictures/product_mars.png";
import  Snickers  from "../Pictures/product_snickers.png";

interface ItemProps {
    product: {
        place: string,
        name: string,
        numberOfItem: number,
        price: number
    }
}

export const Item: React.FC<ItemProps> = ({ product }) => {

    const availableProducts = new Array(product.numberOfItem).fill(
        <img 
            src={product.name === "Bomba" ?
            Bomba : product.name === "Mars" ?
            Mars : Snickers} 
            alt={product.name}
        />
    )

    return(
        <StyledGrid item xs={6}>
            <OneProductContainer flexDirection="row">
                {availableProducts.map((item, index) => 
                <Box className={`item-${index}`}>
                    {item}
                </Box>
                )}
            </OneProductContainer>
            <Code flexDirection="row" justifyContent="space-around" alignItems="center">
                <Text variant="h4">{product.place}</Text>
                <Text variant="h4">{product.price},-</Text>
            </Code>
            <StyledBox></StyledBox>
        </StyledGrid>
    )
}

const StyledGrid = styled(Grid)`
    border-left: 5px solid ${(props)=> props.theme.palette.white};
    border-right: 5px solid ${(props)=> props.theme.palette.white};
    border-image: linear-gradient(to bottom, rgba(0,0,0,0) 25%,${(props)=> props.theme.palette.black} 25%,${(props)=> props.theme.palette.black} 75%,${(props)=> props.theme.palette.black} 75%);
    border-image-slice: 2;
    margin: ${(props)=> props.theme.spacing(4, 0)};
    
    :nth-child(even) {
        border-left: none;
    }
    
    position: relative;
`

const OneProductContainer = styled(Stack)`
    padding-left: ${(props)=> props.theme.spacing(1)};
    height: ${(props)=> props.theme.spacing(13)};

    img{
        height: ${(props)=> props.theme.spacing(13)};
    }
    
    .item-0 {
        z-index: 6;
    }

    .item-1 {
        position: absolute;
        bottom: ${(props)=> props.theme.spacing(8)};
        left:  ${(props)=> props.theme.spacing(8)};
        z-index: 2;
    }

    .item-2 {
        position: absolute;
        bottom: ${(props)=> props.theme.spacing(9)};
        left:  ${(props)=> props.theme.spacing(10.5)};
        z-index: 1;
    }
`

const Code = styled(Stack)`
    background-color:${(props)=> props.theme.palette.black};  
`

const StyledBox = styled(Box)`
    width: 4rem;
    height: 4rem; 
   
    border-radius: 50%;
    border-right: 4px solid ${(props)=> props.theme.palette.black}; 
    border-bottom: 4px solid ${(props)=> props.theme.palette.black}; 
    border-top: 4px solid ${(props)=> props.theme.palette.black}; 
    -webkit-transform:rotate(-45deg);

    position: absolute;
    left: ${(props)=> props.theme.spacing(10)};
    bottom: ${(props)=> props.theme.spacing(5)};
    z-index: 7;

    ${(props)=> props.theme.breakpoints.down('md')} {
        left: ${(props)=> props.theme.spacing(12)};
    }
    
    ${(props)=> props.theme.breakpoints.down('sm')} {
        left: ${(props)=> props.theme.spacing(10)};
    }

    @media screen and (max-width: 425px) {
        width: 3rem;
        height: 3rem; 
        left: ${(props)=> props.theme.spacing(8)};
    }

    @media screen and (max-width: 360px) {
        left: ${(props)=> props.theme.spacing(6)};
    }
`