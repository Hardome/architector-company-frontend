'use client';

import React, {useState} from 'react';
import {Mail, MapPin, Phone} from 'lucide-react';

import ContactDialog from '@/components/ContactDialog';
import MaxIcon from '@/components/icons/MaxIcon';
import TelegramIcon from '@/components/icons/TelegramIcon';
import {Button} from '@/components/ui/button';
import {H3} from '@/components/ui/typography';
import {COMPANY} from '@/lib/constants';

const documents = [
  {name: 'Проектная декларация', url: '#'},
  {name: 'Разрешение на строительство', url: '#'},
  {name: 'Договор долевого участия', url: '#'},
  {name: 'Градостроительный план', url: '#'}
];

const messengers = [
  {href: COMPANY.maxHref, label: 'Max'},
  {href: COMPANY.tgHref, label: 'Telegram'}
];

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <React.Fragment>
      <footer className={'bg-secondary text-primary-foreground pt-20 pb-8'}>
        <div className={'container mx-auto px-4 lg:px-8'}>
          <div className={'grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'}>
            {/* About Company */}
            <div className={'space-y-4'}>
              <H3 variant={'footerLarge'}>{'ELLORIA'}</H3>
              <p className={'text-primary-foreground/80 text-sm'}>
                {'Строительная компания с 15-летним опытом. Реализовано более 30\r'}
                {'успешных проектов.\r'}
              </p>
              <p className={'text-xs text-primary-foreground/60'}>
                {COMPANY.name}
                {COMPANY.inn && ` ИНН ${COMPANY.inn}`}
              </p>
            </div>

            {/* Documents */}
            <div id={'documents'} className={'space-y-4'}>
              <H3 variant={'footer'}>{'Документы'}</H3>
              <ul className={'space-y-2'}>
                {
                  documents.map((doc) => (
                    <li key={doc.name}>
                      <a
                        href={doc.url}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                        className={
                          'text-sm text-primary-foreground/80 ' +
                          'hover:text-primary-foreground transition-colors underline'
                        }
                      >
                        {doc.name}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>

            {/* Contacts */}
            <address id={'contacts'} className={'space-y-4 not-italic'}>
              <H3 variant={'footer'}>{'Контакты'}</H3>
              <div className={'space-y-3 text-sm text-primary-foreground/80'}>
                <div className={'flex items-start gap-3'}>
                  <MapPin size={18} className={'mt-1 flex-shrink-0'} aria-hidden={'true'} />
                  <span
                    itemProp={'address'}
                    itemScope={true}
                    itemType={'https://schema.org/PostalAddress'}
                  >
                    <span itemProp={'streetAddress'}>{COMPANY.address}</span>
                  </span>
                </div>
                <div className={'flex items-center gap-3'}>
                  <Phone size={18} className={'flex-shrink-0'} aria-hidden={'true'} />
                  <a
                    href={COMPANY.phoneHref}
                    className={'hover:text-primary-foreground transition-colors'}
                    itemProp={'telephone'}
                  >
                    {COMPANY.phone}
                  </a>
                </div>
                <div className={'flex items-center gap-3'}>
                  <Mail size={18} className={'flex-shrink-0'} aria-hidden={'true'} />
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className={'hover:text-primary-foreground transition-colors'}
                    itemProp={'email'}
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>
            </address>

            {/* Messengers & CTA */}
            <div className={'space-y-4'}>
              <H3 variant={'footer'}>{'Связаться с нами'}</H3>
              <div className={'flex gap-3'}>
                {
                  messengers.map((messenger) => (
                    <a
                      key={messenger.label}
                      href={messenger.href}
                      target={'_blank'}
                      rel={'noopener noreferrer'}
                      className={
                        'w-10 h-10 rounded-full bg-primary-foreground/10 ' +
                      'hover:bg-primary-foreground/20 transition-colors ' +
                      'flex items-center justify-center'
                      }
                    >
                      {
                        messenger.label === 'Max' ?
                          <MaxIcon size={20} /> :
                          <TelegramIcon size={20} />
                      }
                    </a>
                  ))
                }
              </div>
              <Button
                onClick={() => setIsModalOpen(true)}
                className={
                  'w-full rounded-full bg-accent hover:bg-accent/90 ' +
                  'text-accent-foreground mt-4'
                }
                size={'lg'}
              >
                {'Оставить заявку\r'}
              </Button>
            </div>
          </div>

          <div
            className={
              'pt-8 border-t border-primary-foreground/20 ' +
              'text-center text-sm text-primary-foreground/60'
            }
          >
            <p>{`© ${new Date().getFullYear()} ELLORIA. Все права защищены.`}</p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactDialog
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        payload={{from: 'Футер сайта'}}
      />
    </React.Fragment>
  );
};

export default Footer;
