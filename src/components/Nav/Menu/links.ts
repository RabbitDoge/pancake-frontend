import { ContextApi } from 'contexts/Localization/types'
import { LinkStatus, MenuEntry } from './types'

export const status = {
  LIVE: <LinkStatus>{
    text: 'LIVE',
    color: 'failure',
  },
  SOON: <LinkStatus>{
    text: 'SOON',
    color: 'warning',
  },
  NEW: <LinkStatus>{
    text: 'NEW',
    color: 'success',
  },
}

export const menu = (t: ContextApi['t']): MenuEntry[] => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/pool',
      },
      {
        label: t('LP Migration'),
        href: 'https://v1exchange.pancakeswap.finance/#/migrate',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Prediction (BETA)'),
    icon: 'PredictionsIcon',
    href: '/prediction',
  },
  {
    label: t('Lottery'),
    icon: 'TicketIcon',
    href: '/lottery',
    status: {
      text: t('Win').toLocaleUpperCase(),
      color: 'success',
    },
  },
  {
    label: t('Collectibles'),
    icon: 'NftIcon',
    href: '/collectibles',
  },
  {
    label: t('Team Battle'),
    icon: 'TeamBattleIcon',
    href: '/competition',
  },
  {
    label: t('Teams & Profile'),
    icon: 'GroupsIcon',
    items: [
      {
        label: t('Leaderboard'),
        href: '/teams',
      },
      {
        label: t('Task Center'),
        href: '/profile/tasks',
      },
      {
        label: t('Your Profile'),
        href: '/profile',
      },
    ],
  },
  {
    label: t('Info'),
    icon: 'InfoIcon',
    href: 'https://pancakeswap.info',
  },
  {
    label: t('IFO'),
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.pancakeswap.finance/contact-us',
      },
      {
        label: t('Voting'),
        href: '/voting',
      },
      {
        label: t('Github'),
        href: 'https://github.com/pancakeswap',
      },
      {
        label: t('Docs'),
        href: 'https://docs.pancakeswap.finance',
      },
      {
        label: t('Blog'),
        href: 'https://pancakeswap.medium.com',
      },
      {
        label: t('Merch'),
        href: 'https://pancakeswap.creator-spring.com/',
      },
    ],
  },
]

export const socials = [
  {
    label: 'Telegram',
    icon: 'TelegramIcon',
    items: [
      {
        label: 'English',
        href: 'https://t.me/pancakeswap',
      },
      {
        label: 'Bahasa Indonesia',
        href: 'https://t.me/PancakeSwapIndonesia',
      },
      {
        label: '中文',
        href: 'https://t.me/PancakeSwap_CN',
      },
      {
        label: 'Tiếng Việt',
        href: 'https://t.me/PancakeSwapVN',
      },
      {
        label: 'Italiano',
        href: 'https://t.me/pancakeswap_ita',
      },
      {
        label: 'русский',
        href: 'https://t.me/pancakeswap_ru',
      },
      {
        label: 'Türkiye',
        href: 'https://t.me/pancakeswapturkiye',
      },
      {
        label: 'Português',
        href: 'https://t.me/PancakeSwapPortuguese',
      },
      {
        label: 'Español',
        href: 'https://t.me/PancakeswapEs',
      },
      {
        label: '日本語',
        href: 'https://t.me/pancakeswapjp',
      },
      {
        label: 'Français',
        href: 'https://t.me/pancakeswapfr',
      },
      {
        label: 'Announcements',
        href: 'https://t.me/PancakeSwapAnn',
      },
      {
        label: 'Whale Alert',
        href: 'https://t.me/PancakeSwapWhales',
      },
    ],
  },
  {
    label: 'Twitter',
    icon: 'TwitterIcon',
    href: 'https://twitter.com/pancakeswap',
  },
]
