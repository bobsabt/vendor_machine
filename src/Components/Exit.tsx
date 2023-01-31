
import styled from "@emotion/styled"
import { Stack } from "../layout/Stack";
import  Bomba  from "../Pictures/product_bomba.png";
import  Mars  from "../Pictures/product_mars.png";
import  Snickers  from "../Pictures/product_snickers.png";


interface ExitProps {
  selectedItemName: string
}

export const Exit: React.FC<ExitProps> = ({selectedItemName}) => {
  return (
    <Collect alignItems="center" justifyContent="center"> 
      {
        selectedItemName &&  
        <img
          className="selected-item"
          src={selectedItemName === "Bomba" ? 
              Bomba : selectedItemName === "Mars" ?
              Mars : Snickers} 
          alt={selectedItemName}
        />
      }    
    </Collect>
  )
}

const Collect = styled(Stack)`
    border: 6px solid ${(props)=> props.theme.palette.middleGrey};
    border-radius: 4px;
    width: 50%;
    height: ${(props)=> props.theme.spacing(10)};
    
    background-color: ${(props)=> props.theme.palette.black};
    background-image: radial-gradient(${(props)=> props.theme.palette.black}, ${(props)=> props.theme.palette.middleGrey} );  

    .selected-item{
      transform: rotateY(0deg) rotate(90deg);
      animation: cssAnimation 0s 5s forwards;
      visibility: visible;
    }

    @keyframes cssAnimation {
      to   { visibility: hidden; }
    }
`