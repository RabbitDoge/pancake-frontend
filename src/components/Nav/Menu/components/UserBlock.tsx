import React from 'react'
import { useWalletModal, Button } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import useAuth from 'hooks/useAuth'

const UserBlock: React.FC = () => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account)
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null
  return (
    <div>
      {account ? (
        <Button
          scale="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal()
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          scale="sm"
          onClick={() => {
            onPresentConnectModal()
          }}
        >
          Connect
        </Button>
      )}
    </div>
  )
}

export default UserBlock
