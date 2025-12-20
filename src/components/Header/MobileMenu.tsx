'use client';

import {Button} from '@/components/ui/button';
import useScrollToSection from '@/hooks/useScrollToSection';
import {MENU_ITEMS} from '@/lib/constants';

import ChooseHouseButton from '../ChooseHouseButton';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({isOpen, onClose}: MobileMenuProps) {
  const scrollToSection = useScrollToSection();
  const handleItemClick = (id: string) => {
    scrollToSection(id);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={'fixed inset-0 z-40 lg:hidden'}>
      <div className={'fixed inset-0 bg-card/95 backdrop-blur-md pt-20'}>
        <nav className={'container mx-auto px-4 py-8 flex flex-col items-start gap-6'}>
          {
            MENU_ITEMS.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                variant={'ghost'}
                className={'text-xl font-medium text-white'}
              >
                {item.label}
              </Button>
            ))
          }
          <ChooseHouseButton size={'lg'} className={'rounded-full w-full mt-4'} onClick={onClose} />
        </nav>
      </div>
    </div>
  );
}