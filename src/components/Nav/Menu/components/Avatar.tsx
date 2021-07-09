import React from 'react'
import styled from 'styled-components'
import { NoProfileAvatarIcon } from '@pancakeswap/uikit'
import { Link } from 'react-router-dom'
import { useProfile } from 'state/hooks'

const StyledAvatar = styled.div`
  margin-left: 8px;
  position: relative;

  img {
    border-radius: 50%;
  }
`

const Avatar: React.FC = () => {
  const { profile } = useProfile()

  if (!profile) {
    return null
  }

  return (
    <StyledAvatar>
      <Link to="/profile" aria-label="Link to profile">
        {profile?.nft ? (
          <img src={`/images/nfts/${profile.nft?.images.sm}`} alt="profile avatar" height="32px" width="32px" />
        ) : (
          <NoProfileAvatarIcon width="32px" height="32px" />
        )}
      </Link>
    </StyledAvatar>
  )
}

export default Avatar
