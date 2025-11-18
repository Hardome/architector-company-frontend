'use client';

import {Menu, X} from 'lucide-react';

import {Button} from '@/components/ui/button';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function MobileMenuButton({isOpen, onClick}: MobileMenuButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant={'text'}
      size={'lg'}
      className={'lg:hidden p-2 text-white hover:text-gray-300 transition-colors'}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </Button>
  );
}
