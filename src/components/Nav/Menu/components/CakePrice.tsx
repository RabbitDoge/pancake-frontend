import React from 'react'
import styled from 'styled-components'
import { PancakeRoundIcon, Text, Skeleton } from '@pancakeswap/uikit'
import { usePriceCakeBusd } from 'state/hooks'

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`

const CakePrice: React.FC = () => {
  const cakePriceUsd = usePriceCakeBusd()

  return cakePriceUsd ? (
    <PriceLink
      href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
      target="_blank"
    >
      <PancakeRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  )
}

export default CakePrice
