import React from 'react'
import { Dropdown, Text, Button, LanguageIcon } from '@pancakeswap/uikit'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import MenuButton from './MenuButton'

const LangSelector: React.FC = () => {
  const { currentLanguage, setLanguage } = useTranslation()

  return (
    <Dropdown
      position="top-right"
      target={
        <Button variant="text" startIcon={<LanguageIcon color="textSubtle" width="24px" />}>
          <Text color="textSubtle">{currentLanguage?.code.toUpperCase()}</Text>
        </Button>
      }
    >
      {languageList.map((lang) => (
        <MenuButton
          key={lang.locale}
          fullWidth
          onClick={() => setLanguage(lang)}
          // Safari fix
          style={{ minHeight: '32px', height: 'auto' }}
        >
          {lang.language}
        </MenuButton>
      ))}
    </Dropdown>
  )
}

export default LangSelector
