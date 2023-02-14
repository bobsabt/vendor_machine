
import styled from "@emotion/styled"
import { Stack } from "../layout/Stack";

interface ExitProps {
  selectedItem: {
    name: string,
    imgSrc: string
  }
}

export const Exit: React.FC<ExitProps> = ({selectedItem}) => {
  const basePath = './images/'
  
  return (
    <Collect alignItems="center" justifyContent="center"> 
      {
        selectedItem &&  
        <img
          className="selected-item"
          src={`${basePath}${selectedItem.imgSrc}`}
          alt={selectedItem.name}
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