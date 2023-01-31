import React from 'react'
import styled from '@emotion/styled'
import { Stack } from '../layout/Stack'
import { Text } from '../layout/Text'
import Button from '../layout/Button'

interface CoinProps {
     buttonvalue: number,
     disabled?: boolean,
     onClick?: (event: any) => void
}

const Coin: React.FC<CoinProps> = ( { buttonvalue, disabled, onClick }) => {

  return (
    <Button 
      value={buttonvalue} 
      variant="contained"
      disabled={disabled}
      onClick={onClick}
    >
    <Text padding="0">{buttonvalue}</Text>
    </Button>
   
  )
}

export default Coin


