'use client';

import React, {useState} from 'react';
import {Menu, X} from 'lucide-react';

import ChooseHouseButton from '@/components/ChooseHouseButton';
import {Button} from '@/components/ui/button';
import useScrollToSection from '@/hooks/useScrollToSection';
import {MENU_ITEMS} from '@/lib/constants';

import MobileMenu from './MobileMenu';

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
};

export default function HeaderClient() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <React.Fragment>
      <header
        className={
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ' +
          'bg-background'
        }
      >
        <div className={'container mx-auto px-4 lg:px-8'}>
          <div className={'flex items-center justify-between h-20'}>
            <Button
              onClick={scrollToTop}
              variant={'text'}
              className={'text-xl lg:text-2xl text-primary font-bold hover:opacity-80 transition-opacity hover:text-primary/90'}
            >
              {'ЛесПарк'}
            </Button>
            <nav className={'hidden lg:flex items-center gap-8'}>
              {
                MENU_ITEMS.map((item) => (
                  <Button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={'text-sm font-medium text-white hover:text-gray-300 transition-colors '}
                    variant={'text'}
                  >
                    {item.label}
                  </Button>
                ))
              }
            </nav>
            <div className={'flex items-center gap-4'}>
              <ChooseHouseButton size={'lg'} className={'hidden lg:flex rounded-full'} />
              <Button
                onClick={toggleMobileMenu}
                variant={'text'}
                size={'lg'}
                className={'lg:hidden p-2 text-white hover:text-gray-300 transition-colors'}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </React.Fragment>
  );
}

