'use client';

import React, {useState} from 'react';

import {Button} from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {P} from '@/components/ui/typography';

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
  payload?: {
    from?: string;
  };
}

const ContactDialog = ({isOpen, onClose, payload}: ContactDialogProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => {
    setPhone('');
    setName('');
    onClose();
  };

  const handleSubmit = async(evt: React.FormEvent) => {
    evt.preventDefault();
    setIsLoading(true);

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

      if (!backendUrl) {
        throw new Error('Backend URL is empty');
      }

      const response = await fetch(`${backendUrl}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name.trim(),
          phone,
          ...payload
        })
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке формы');
      }

      handleClose();
    } catch(err) {
      // eslint-disable-next-line no-console
      console.error('Error submitting form:', JSON.stringify(err));
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhoneChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const nums = evt.target.value;
    const digits = nums
      .replace(/\D/g, '')
      .substring(1);

    let formatted = `+7`;

    if (digits.length > 0) {
      formatted += ` (${digits.slice(0, 3)}`;
    }
    if (digits.length > 3) {
      formatted += `) ${digits.slice(3, 6)}`;
    }
    if (digits.length > 6) {
      formatted += `-${digits.slice(6, 8)}`;
    }
    if (digits.length > 8) {
      formatted += `-${digits.slice(8, 10)}`;
    }

    setPhone(formatted);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={'text-3xl font-medium'}>{'Оставьте номер телефона'}</DialogTitle>
          <DialogDescription className={'text-base text-muted-foreground'}>
            {'Мы свяжемся с вами в ближайшее время'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className={'space-y-4'}>
          <Input
            type={'text'}
            value={name}
            required={true}
            disabled={isLoading}
            className={'rounded-lg'}
            onChange={(evt) => setName(evt.target.value)}
            placeholder={'Имя'}
            title={'Укажите своё имя'}
          />
          <Input
            type={'tel'}
            value={phone}
            required={true}
            disabled={isLoading}
            className={'rounded-lg'}
            onChange={handlePhoneChange}
            placeholder={'+7 (___) ___-__-__'}
            title={'Введите номер в формате: +7 (999) 999-99-99'}
          />
          <P className={'text-xs text-gray-500 text-center'}>
            {'Я даю согласие на обработку персональных данных'}
          </P>
          <Button
            type={'submit'}
            disabled={isLoading}
            className={
              'w-full rounded-full ' +
                'hover:opacity-90 transition-opacity disabled:opacity-50 text-base'
            }
          >
            {isLoading ? 'Отправка...' : 'Отправить'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;