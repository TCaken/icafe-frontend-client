import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavGroup,
    name: 'Users',
    to: '/users',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Users',
        to: '/users',
      },
      {
        component: CNavItem,
        name: 'Create User',
        to: '/users/create',
      },
      {
        component: CNavItem,
        name: 'Delete User',
        to: '/users/delete',
      },
      {
        component: CNavItem,
        name: 'Update Users',
        to: '/users/update',
      },
      {
        component: CNavItem,
        name: 'Link Card',
        to: '/users/linkcard',
      },
    ],
  },
]
export default _nav
