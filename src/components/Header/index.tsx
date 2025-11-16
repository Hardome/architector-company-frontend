import Link from 'next/link';

import {Button} from '@/components/ui/button';
import {Large, Muted} from '@/components/ui/typography';
import {CONTACT} from '@/lib/constants';

export default function Header() {
  return (
    <header
      className={
        'sticky top-0 z-50 w-full bg-background/95 backdrop-blur ' +
        'supports-[backdrop-filter]:bg-background/60'
      }
    >
      {/* Основная панель */}
      <div className={'w-full border-b'}>
        <div
          className={
            'container flex h-14 items-center justify-between px-4 ' +
            'mx-auto max-w-7xl'
          }
        >
          {/* Бренд */}
          <Link href={'/'} className={'flex items-center space-x-2'}>
            <Large className={'leading-tight'}>{'Лесной Квартал'}</Large>
          </Link>

          {/* Навигация по блокам страницы */}
          <nav className={'hidden md:flex items-center space-x-6'}>
            <a
              href={'#about'}
              className={
                'text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
              }
            >
              {'О поселке'}
            </a>
            <a
              href={'#media'}
              className={
                'text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
              }
            >
              {'Медиа'}
            </a>
            <a
              href={'#projects'}
              className={
                'text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
              }
            >
              {'Проекты'}
            </a>
            <a
              href={'#how-to-buy'}
              className={
                'text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
              }
            >
              {'Как купить'}
            </a>
            <a
              href={'#docs'}
              className={
                'text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
              }
            >
              {'Документы'}
            </a>
            <a
              href={'#contacts'}
              className={
                'text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
              }
            >
              {'Контакты'}
            </a>
          </nav>

          {/* Контакты и кнопка действия */}
          <div className={'flex items-center space-x-3 gap-4'}>
            <div className={'hidden lg:flex flex-col items-end mr-1'}>
              <a
                href={`tel:${CONTACT.phone.link}`}
                className={'text-sm font-semibold hover:text-primary transition-colors'}
              >
                {CONTACT.phone.display}
              </a>
              <Muted className={'text-xs'}>{CONTACT.workingHours}</Muted>
            </div>
            <a href={'#projects'}>
              <Button className={'rounded-md px-5'}>
                {'Подобрать дом'}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}