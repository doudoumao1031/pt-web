import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import I18nProvider from '@/components/I18nProvider'

export const metadata = {
  title: 'Potato Chat - Easy and Safe Messaging',
  description: 'With POTATO, you can send and receive messages and calls quickly, easily and securely around the world via your mobile phone.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </I18nProvider>
      </body>
    </html>
  )
} 