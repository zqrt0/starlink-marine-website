import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { YANDEX_METRIKA_COUNTER_ID } from '@/lib/analytics'
import NotificationProvider from '@/components/NotificationProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Starlink для морских судов | Спутниковый интернет для яхт и кораблей',
  description: 'Высокоскоростной спутниковый интернет Starlink для яхт, рыболовных и коммерческих судов в России. Надежная связь в море.',
  keywords: 'интернет для судов, старлинк в море, спутниковый интернет для яхт, интернет на корабле, морская связь',
  authors: [{ name: 'Starlink Marine Russia' }],
  openGraph: {
    title: 'Starlink для морских судов',
    description: 'Высокоскоростной спутниковый интернет для яхт и кораблей в России',
    type: 'website',
    locale: 'ru_RU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        {/* Яндекс.Метрика */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              ym("${YANDEX_METRIKA_COUNTER_ID}", "init", {
                   clickmap:true,
                   trackLinks:true,
                   accurateTrackBounce:true,
                   webvisor:true
              });
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/${YANDEX_METRIKA_COUNTER_ID}"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
      </head>
      <body className={inter.className}>
        <NotificationProvider>
          {children}
        </NotificationProvider>
      </body>
    </html>
  )
}
