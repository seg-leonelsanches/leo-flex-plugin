import React from 'react'
import { AnalyticsBrowser } from '@segment/analytics-next'

type AnalyticsProviderProps = {
  writeKey: string
  children: React.ReactNode
}

export const AnalyticsContext = React.createContext<AnalyticsBrowser>(undefined!)

export const AnalyticsProvider = ({ children, writeKey }: AnalyticsProviderProps) => {
  const analytics = React.useMemo(
    () => AnalyticsBrowser.load({ writeKey, cdnURL: process.env.NEXT_PUBLIC_SEGMENT_CDN || 'https://cdn.segment.com' }),
    [writeKey]
  )
  return (
    <AnalyticsContext.Provider value={analytics}>
      {children}
    </AnalyticsContext.Provider>
  )
}
