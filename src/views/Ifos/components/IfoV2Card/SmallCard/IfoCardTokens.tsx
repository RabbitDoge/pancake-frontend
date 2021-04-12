import React from 'react'
import { Text, Skeleton, Flex, Box, Image, CheckmarkCircleIcon } from '@pancakeswap-libs/uikit'
import { Ifo, IfoStatus } from 'config/constants/types'
import { PoolCharacteristics, UserPoolCharacteristics } from 'hooks/ifo/v2/types'
import useI18n from 'hooks/useI18n'
import { getBalanceNumber } from 'utils/formatBalance'
import PercentageOfTotal from './PercentageOfTotal'

interface Props {
  ifo: Ifo
  status: IfoStatus
  distribution: number
  publicPoolCharacteristics: PoolCharacteristics
  userPoolCharacteristics: UserPoolCharacteristics
  hasProfile: boolean
}

const TokenSection: React.FC<{ img: string }> = ({ img, children, ...props }) => {
  return (
    <Flex {...props}>
      <Image src={img} width={32} height={32} mr="16px" />
      <div>{children}</div>
    </Flex>
  )
}

const IfoCardTokens: React.FC<Props> = ({
  ifo,
  status,
  distribution,
  userPoolCharacteristics,
  publicPoolCharacteristics,
  hasProfile,
}) => {
  const TranslateString = useI18n()
  const { currency, token, saleAmount } = ifo
  const { hasClaimed } = userPoolCharacteristics

  const renderTokensectioon = () => {
    if (!hasProfile) {
      return (
        <Text textAlign="center">
          {TranslateString(999, 'You need an active PancakeSwap Profile to take part in an IFO!')}
        </Text>
      )
    }
    if (status === 'coming_soon') {
      return (
        <>
          <TokenSection img="/images/bunny-placeholder.svg">
            <Text bold fontSize="12px" color="secondary">
              {TranslateString(999, 'On sale')}
            </Text>
            <Text bold fontSize="20px">
              {saleAmount}
            </Text>
          </TokenSection>
          <Text fontSize="14px" color="textSubtle" pl="48px">{`${distribution * 100}%`}</Text>
        </>
      )
    }
    if (status === 'live') {
      return (
        <>
          <TokenSection img="/images/farms/cake-bnb.svg">
            <Text bold fontSize="12px" color="secondary">
              {`Your ${currency.symbol} committed`}
            </Text>
            <Text bold fontSize="20px">
              {getBalanceNumber(userPoolCharacteristics.amountTokenCommittedInLP, currency.decimals)}
            </Text>
            <PercentageOfTotal
              userAmount={userPoolCharacteristics.amountTokenCommittedInLP}
              totalAmount={publicPoolCharacteristics.totalAmountPool}
            />
          </TokenSection>
          <TokenSection img={`/images/tokens/${token.symbol.toLocaleLowerCase()}.png`}>
            <Text bold fontSize="12px" color="secondary">
              {`${token.symbol} to received`}
            </Text>
            <Text bold fontSize="20px">
              {getBalanceNumber(userPoolCharacteristics.offeringAmountInToken, token.decimals)}
            </Text>
          </TokenSection>
        </>
      )
    }
    if (status === 'finished') {
      return userPoolCharacteristics.amountTokenCommittedInLP.isEqualTo(0) ? (
        <Flex flexDirection="column" alignItems="center">
          <Image src="/images/bunny-placeholder.svg" width={80} height={80} mb="16px" />
          <Text>{TranslateString(999, 'You didn’t participate in this sale!')}</Text>
        </Flex>
      ) : (
        <>
          <TokenSection img="/images/farms/cake-bnb.svg">
            <Text bold fontSize="12px" color="secondary">
              {hasClaimed ? `Your ${currency.symbol} RECLAIMED` : `Your ${currency.symbol} TO RECLAIM`}
            </Text>
            <Flex alignItems="center">
              <Text bold fontSize="20px">
                {getBalanceNumber(userPoolCharacteristics.refundingAmountInLP, currency.decimals)}
              </Text>
              {hasClaimed && <CheckmarkCircleIcon color="success" ml="8px" />}
            </Flex>
            <PercentageOfTotal
              userAmount={userPoolCharacteristics.amountTokenCommittedInLP}
              totalAmount={publicPoolCharacteristics.totalAmountPool}
            />
          </TokenSection>
          <TokenSection img={`/images/tokens/${token.symbol.toLocaleLowerCase()}.png`}>
            <Text bold fontSize="12px" color="secondary">
              {`${token.symbol} to received`}
            </Text>
            <Flex alignItems="center">
              <Text bold fontSize="20px">
                {getBalanceNumber(userPoolCharacteristics.offeringAmountInToken, token.decimals)}
              </Text>
              {hasClaimed && <CheckmarkCircleIcon color="success" ml="8px" />}
            </Flex>
          </TokenSection>
        </>
      )
    }
    return <Skeleton />
  }
  return <Box mb="24px">{renderTokensectioon()}</Box>
}

export default IfoCardTokens
