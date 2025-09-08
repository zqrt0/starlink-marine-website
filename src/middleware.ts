import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Список IP-адресов России (упрощенная версия)
const RUSSIA_IP_RANGES = [
  '5.8.0.0/13',
  '5.16.0.0/14',
  '5.34.0.0/15',
  '5.44.0.0/14',
  '5.48.0.0/13',
  '5.56.0.0/13',
  '5.64.0.0/13',
  '5.72.0.0/15',
  '5.75.0.0/16',
  '5.78.0.0/16',
  '5.79.0.0/16',
  '5.100.0.0/15',
  '5.101.0.0/16',
  '5.102.0.0/16',
  '5.103.0.0/16',
  '5.104.0.0/15',
  '5.106.0.0/16',
  '5.107.0.0/16',
  '5.108.0.0/16',
  '5.109.0.0/16',
  '5.110.0.0/15',
  '5.112.0.0/12',
  '5.128.0.0/13',
  '5.136.0.0/13',
  '5.144.0.0/14',
  '5.148.0.0/14',
  '5.152.0.0/14',
  '5.156.0.0/15',
  '5.158.0.0/16',
  '5.159.0.0/16',
  '5.160.0.0/16',
  '5.161.0.0/16',
  '5.162.0.0/15',
  '5.164.0.0/14',
  '5.168.0.0/14',
  '5.172.0.0/15',
  '5.174.0.0/15',
  '5.176.0.0/12',
  '5.192.0.0/14',
  '5.196.0.0/16',
  '5.197.0.0/16',
  '5.198.0.0/16',
  '5.199.0.0/16',
  '5.200.0.0/16',
  '5.201.0.0/16',
  '5.202.0.0/15',
  '5.204.0.0/14',
  '5.208.0.0/12',
  '5.224.0.0/12',
  '31.3.0.0/16',
  '31.6.0.0/15',
  '31.8.0.0/16',
  '31.9.0.0/16',
  '31.10.0.0/15',
  '31.12.0.0/15',
  '31.14.0.0/15',
  '31.16.0.0/13',
  '31.24.0.0/15',
  '31.26.0.0/15',
  '31.28.0.0/15',
  '31.30.0.0/15',
  '31.32.0.0/13',
  '31.40.0.0/14',
  '31.44.0.0/15',
  '31.46.0.0/16',
  '31.47.0.0/16',
  '31.48.0.0/12',
  '31.64.0.0/11',
  '31.96.0.0/12',
  '31.112.0.0/12',
  '31.128.0.0/11',
  '31.160.0.0/11',
  '31.192.0.0/11',
  '31.224.0.0/11',
  '37.0.0.0/11',
  '37.32.0.0/12',
  '37.48.0.0/13',
  '37.56.0.0/15',
  '37.58.0.0/16',
  '37.59.0.0/16',
  '37.60.0.0/14',
  '37.64.0.0/11',
  '37.96.0.0/12',
  '37.112.0.0/12',
  '37.128.0.0/11',
  '37.160.0.0/11',
  '37.192.0.0/11',
  '37.224.0.0/11',
  '46.0.0.0/8',
  '62.16.0.0/13',
  '62.24.0.0/15',
  '62.26.0.0/16',
  '62.27.0.0/16',
  '62.28.0.0/15',
  '62.30.0.0/15',
  '62.32.0.0/11',
  '62.64.0.0/11',
  '62.96.0.0/12',
  '62.112.0.0/12',
  '62.128.0.0/11',
  '62.160.0.0/11',
  '62.192.0.0/11',
  '62.224.0.0/11',
  '77.0.0.0/8',
  '78.0.0.0/7',
  '80.0.0.0/7',
  '82.0.0.0/7',
  '84.0.0.0/6',
  '88.0.0.0/5',
  '96.0.0.0/4',
  '112.0.0.0/4',
  '128.0.0.0/3',
  '160.0.0.0/3',
  '192.0.0.0/3',
  '224.0.0.0/3',
  '109.0.0.0/8',
  '176.0.0.0/8',
  '178.0.0.0/8',
  '185.0.0.0/8',
  '188.0.0.0/8',
  '195.0.0.0/8',
  '212.0.0.0/8',
  '213.0.0.0/8',
  '217.0.0.0/8',
]

// Функция для проверки IP-адреса
function isIPInRange(ip: string, range: string): boolean {
  const [rangeIP, prefixLength] = range.split('/')
  const ipNum = ipToNumber(ip)
  const rangeNum = ipToNumber(rangeIP)
  const mask = (0xffffffff << (32 - parseInt(prefixLength))) >>> 0
  
  return (ipNum & mask) === (rangeNum & mask)
}

function ipToNumber(ip: string): number {
  return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet), 0) >>> 0
}

function isRussianIP(ip: string): boolean {
  return RUSSIA_IP_RANGES.some(range => isIPInRange(ip, range))
}

export function middleware(request: NextRequest) {
  const ip = request.ip || request.headers.get('x-forwarded-for') || '127.0.0.1'
  
  // Разрешаем доступ для localhost в режиме разработки
  if (ip === '127.0.0.1' || ip === '::1' || ip.startsWith('192.168.') || ip.startsWith('10.')) {
    return NextResponse.next()
  }
  
  // Проверяем, является ли IP российским
  if (!isRussianIP(ip)) {
    return new NextResponse(
      `
      <!DOCTYPE html>
      <html lang="ru">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Доступ ограничен</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }
          .container {
            text-align: center;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            backdrop-filter: blur(10px);
          }
          h1 { margin-bottom: 1rem; }
          p { margin-bottom: 0.5rem; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Доступ ограничен</h1>
          <p>Данный сайт доступен только для пользователей из России.</p>
          <p>This website is only available for users from Russia.</p>
        </div>
      </body>
      </html>
      `,
      {
        status: 403,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
        },
      }
    )
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
