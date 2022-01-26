import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as BsIcons from 'react-icons/bs'
import * as FcIcons from 'react-icons/fc'

import FantomLogo from '../../assets/ftm.svg'
import AvalancheLogo from '../../assets/avax.svg'
import Contact from '../../assets/contact.svg'
import Bonds from '../../assets/bonds.svg'
import TSSLogo from '../../assets/tss-logo.png'
import TWLogo from '../../assets/tw-logo.png'

const iconFillColor = '#170E3E'

export const SidebarData = [
  {
    title: 'Discover',
    path: '/discover',
    icon: '💎',
    iconClosed: <RiIcons.RiArrowDownSFill style={{ fill: iconFillColor }} />,
    iconOpened: <RiIcons.RiArrowUpSFill style={{ fill: iconFillColor }} />,

    // subNav: [
    //   {
    //     title: 'Users',
    //     path: '/overview/users',
    //     icon: <IoIcons.IoIosPaper />
    //   },
    //   {
    //     title: 'Revenue',
    //     path: '/overview/revenue',
    //     icon: <IoIcons.IoIosPaper />
    //   }
    // ]
  },
  {
    title: 'DeFi Bonds',
    path: '/defi-bonds',
    icon: (
      <img
        src={Bonds}
        style={{ display: 'inline', width: '22px', height: '22px' }}
      />
    ),
  },
  {
    title: 'Fantom',
    path: '/fantom',
    icon: (
      <img
        src={FantomLogo}
        style={{ display: 'inline', width: '22px', height: '22px' }}
      />
    ),
    iconClosed: <RiIcons.RiArrowDownSFill style={{ fill: iconFillColor }} />,
    iconOpened: <RiIcons.RiArrowUpSFill style={{ fill: iconFillColor }} />,

    subNav: [
      {
        title: 'Stonk Society',
        path: '/fantom/stonksociety',
        icon: (
          <img
            src={TSSLogo}
            style={{ display: 'inline', width: '22px', height: '22px' }}
          />
        ),
        cName: 'sub-nav',
      },
      {
        title: 'Tank Wars',
        path: '/fantom/tankwars',
        icon: (
          <img
            src='https://img.icons8.com/color/48/000000/tank.png'
            style={{ display: 'inline', width: '30px', height: '30px' }}
          />
        ),
        cName: 'sub-nav',
      },
      {
        title: 'Spiritopoly',
        path: '/fantom/spiritopoly',
        icon: <IoIcons.IoIosPaper style={{ fill: iconFillColor }} />,
        cName: 'sub-nav',
      },
      {
        title: 'Augury Finance',
        path: '/fantom/auguryfinance',
        icon: <IoIcons.IoIosPaper style={{ fill: iconFillColor }} />,
      },
    ],
  },
  {
    title: 'Avalanche',
    path: '/avalanche',
    icon: (
      <img
        src={AvalancheLogo}
        style={{ display: 'inline', width: '22px', height: '22px' }}
      />
    ),
    iconClosed: <RiIcons.RiArrowDownSFill style={{ fill: iconFillColor }} />,
    iconOpened: <RiIcons.RiArrowUpSFill style={{ fill: iconFillColor }} />,

    subNav: [
      {
        title: 'Tank Wars 2',
        path: '/avalanche/tankwars',
        icon: <IoIcons.IoIosPaper style={{ fill: iconFillColor }} />,
        cName: 'sub-nav',
      },
      {
        title: 'Spiritopoly 2',
        path: '/avalanche/spiritopoly',
        icon: <IoIcons.IoIosPaper style={{ fill: iconFillColor }} />,
        cName: 'sub-nav',
      },
      {
        title: 'Augury Finance 2',
        path: '/avalanche/auguryfinance',
        icon: <IoIcons.IoIosPaper style={{ fill: iconFillColor }} />,
      },
    ],
  },
  {
    title: 'Contact Us',
    path: '/contact',
    icon: (
      <img
        src={Contact}
        style={{ display: 'inline', width: '22px', height: '22px' }}
      />
    ),
  },
  {
    title: 'About',
    path: '/about',
    icon: <FcIcons.FcAbout style={{ width: '27px', height: '27px' }} />,
    iconClosed: <RiIcons.RiArrowDownSFill style={{ fill: iconFillColor }} />,
    iconOpened: <RiIcons.RiArrowUpSFill style={{ fill: iconFillColor }} />,

    // subNav: [
    //   {
    //     title: 'Users',
    //     path: '/overview/users',
    //     icon: <IoIcons.IoIosPaper />
    //   },
    //   {
    //     title: 'Revenue',
    //     path: '/overview/revenue',
    //     icon: <IoIcons.IoIosPaper />
    //   }
    // ]
  },
]
