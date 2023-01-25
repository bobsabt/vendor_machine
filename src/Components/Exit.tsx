
import styled from "@emotion/styled"
import { Container } from '../layout/Container'

export const Exit = () => {
  return (
    <ExitContainer>     
    </ExitContainer>
  )
}

const ExitContainer = styled(Container)`
    border: 6px solid ${(props)=> props.theme.palette.middleGrey};
    border-radius: 4px;
    width: 50%;
    height: ${(props)=> props.theme.spacing(10)};
    padding: ${(props)=> props.theme.spacing(3)}
    
    background-color: ${(props)=> props.theme.palette.black};
    background-image: radial-gradient(${(props)=> props.theme.palette.black}, ${(props)=> props.theme.palette.middleGrey} );  
`

