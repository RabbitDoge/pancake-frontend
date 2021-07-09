import React from 'react'
import styled from 'styled-components'
import { CogIcon, IconButton } from '@pancakeswap/uikit'
import { MENU_ENTRY_HEIGHT } from '../config'
import { PushedProps } from '../types'
import CakePrice from './CakePrice'
import ThemeSwitcher from './ThemeSwitcher'
import SocialLinks from './SocialLinks'
import LangSelector from './LangSelector'

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`

const PanelFooter: React.FC<PushedProps> = ({ isPushed, pushNav }) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    )
  }

  return (
    <Container>
      <SocialEntry>
        <CakePrice />
        <SocialLinks />
      </SocialEntry>
      <SettingsEntry>
        <ThemeSwitcher />
        <LangSelector />
      </SettingsEntry>
    </Container>
  )
}

export default PanelFooter
