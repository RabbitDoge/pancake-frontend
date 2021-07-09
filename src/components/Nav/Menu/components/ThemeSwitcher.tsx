import React from 'react'
import { SvgProps, Flex, Text, Button } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'
import * as IconModule from '../icons'

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> }
const { MoonIcon, SunIcon } = Icons

const ThemeSwitcher: React.FC = () => {
  const { isDark, toggleTheme } = useTheme()
  return (
    <Button variant="text" onClick={() => toggleTheme()}>
      {/* alignItems center is a Safari fix */}
      <Flex alignItems="center">
        <SunIcon color={isDark ? 'textDisabled' : 'text'} width="24px" />
        <Text color="textDisabled" mx="4px">
          /
        </Text>
        <MoonIcon color={isDark ? 'text' : 'textDisabled'} width="24px" />
      </Flex>
    </Button>
  )
}

export default ThemeSwitcher
