'use client';

import React, {useState} from 'react';
import {Mail, MapPin, MessageCircle, Phone} from 'lucide-react';

import ContactDialog from '@/components/ContactDialog';
import {Button} from '@/components/ui/button';

const documents = [
  {name: 'Проектная декларация', url: '#'},
  {name: 'Разрешение на строительство', url: '#'},
  {name: 'Договор долевого участия', url: '#'},
  {name: 'Градостроительный план', url: '#'}
];

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <React.Fragment>
      <footer className={'bg-primary text-primary-foreground pt-20 pb-8'}>
        <div className={'container mx-auto px-4 lg:px-8'}>
          <div className={'grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'}>
            {/* About Company */}
            <div className={'space-y-4'}>
              <h3 className={'text-2xl font-bold'}>{'ELORIA'}</h3>
              <p className={'text-primary-foreground/80 text-sm'}>
                {'Строительная компания с 15-летним опытом. Реализовано более 30\r'}
                {'успешных проектов.\r'}
              </p>
              <p className={'text-xs text-primary-foreground/60'}>
                {'ООО "????"\r'}
              </p>
            </div>

            {/* Documents */}
            <div id={'documents'} className={'space-y-4'}>
              <h3 className={'text-xl font-bold'}>{'Документы'}</h3>
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
            <div id={'contacts'} className={'space-y-4'}>
              <h3 className={'text-xl font-bold'}>{'Контакты'}</h3>
              <div className={'space-y-3 text-sm text-primary-foreground/80'}>
                <div className={'flex items-start gap-3'}>
                  <MapPin size={18} className={'mt-1 flex-shrink-0'} />
                  <span>{'г. Тюмень, ул. ????, д. ??'}</span>
                </div>
                <div className={'flex items-center gap-3'}>
                  <Phone size={18} className={'flex-shrink-0'} />
                  <a
                    href={'tel:+74951234567'}
                    className={'hover:text-primary-foreground transition-colors'}
                  >
                    {'+7 (495) 123-45-67\r'}
                  </a>
                </div>
                <div className={'flex items-center gap-3'}>
                  <Mail size={18} className={'flex-shrink-0'} />
                  <a
                    href={'mailto:info@example.ru'}
                    className={'hover:text-primary-foreground transition-colors'}
                  >
                    {'info@example.ru\r'}
                  </a>
                </div>
              </div>
            </div>

            {/* Messengers & CTA */}
            <div className={'space-y-4'}>
              <h3 className={'text-xl font-bold'}>{'Связаться с нами'}</h3>
              <div className={'flex gap-3'}>
                <a
                  href={'https://wa.me/'}
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                  className={
                    'w-10 h-10 rounded-full bg-primary-foreground/10 ' +
                    'hover:bg-primary-foreground/20 transition-colors ' +
                    'flex items-center justify-center'
                  }
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href={'https://t.me/'}
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                  className={
                    'w-10 h-10 rounded-full bg-primary-foreground/10 ' +
                    'hover:bg-primary-foreground/20 transition-colors ' +
                    'flex items-center justify-center'
                  }
                >
                  <MessageCircle size={20} />
                </a>
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
            <p>{'© 2025 ELORIA. Все права защищены.'}</p>
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
