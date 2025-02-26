'use client'

import { useEffect } from 'react'
import '@/i18n/config'

export default function I18nProvider({ children }) {
  // This component ensures i18n is initialized on the client side
  return children
} 