import React from 'react'
import styled from '@emotion/styled'
import { Stack } from '../layout/Stack'
import { Text } from '../layout/Text'
import Button from '../layout/Button'

interface CoinProps {
     buttonvalues: number,
}

const Coin: React.FC<CoinProps> = ( { buttonvalues }) => {

  return (

    <Button 
      value={buttonvalues} 
      variant="contained"
    >
    <Text padding="0">{buttonvalues}</Text>
    </Button>
   
  )
}

export default Coin


