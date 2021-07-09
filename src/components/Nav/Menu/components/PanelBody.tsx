import React, { useMemo } from 'react'
import styled from 'styled-components'
import { useLocation, Link } from 'react-router-dom'
import { SvgProps } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import * as IconModule from '../icons'
import Accordion from './Accordion'
import { MenuEntry, LinkLabel, LinkStatus } from './MenuEntry'
import { PushedProps } from '../types'
import { menu } from '../links'

interface Props extends PushedProps {
  isMobile: boolean
}

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> }

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile }) => {
  const location = useLocation()
  const { t } = useTranslation()

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined
  const links = useMemo(() => menu(t), [t])

  return (
    <Container>
      {links.map((entry) => {
        const Icon = Icons[entry.icon]
        const iconElement = <Icon width="24px" mr="8px" />
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined

        if (entry.items) {
          const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname)
          const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0

          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              status={entry.status}
              initialOpenState={initialOpenState}
              className={calloutClass}
              isActive={entry.items.some((item) => item.href === location.pathname)}
            >
              {isPushed &&
                entry.items.map((item) => (
                  <MenuEntry key={item.href} secondary isActive={item.href === location.pathname} onClick={handleClick}>
                    <Link to={item.href}>
                      <LinkLabel isPushed={isPushed}>{item.label}</LinkLabel>
                      {item.status && (
                        <LinkStatus color={item.status.color} fontSize="14px">
                          {item.status.text}
                        </LinkStatus>
                      )}
                    </Link>
                  </MenuEntry>
                ))}
            </Accordion>
          )
        }
        return (
          <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
            <Link to={entry.href} onClick={handleClick}>
              {iconElement}
              <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
              {entry.status && (
                <LinkStatus color={entry.status.color} fontSize="14px">
                  {entry.status.text}
                </LinkStatus>
              )}
            </Link>
          </MenuEntry>
        )
      })}
    </Container>
  )
}

export default PanelBody
